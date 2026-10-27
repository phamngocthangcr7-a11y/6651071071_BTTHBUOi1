/**
 * AEGIS TACTICAL & DEFENSE SYSTEMS - CART & INTERACTION ENGINE
 * Quản lý Giỏ hàng, Yêu thích, So sánh, LocalStorage, Mã giảm giá,
 * Hiệu ứng Âm thanh Chiến thuật & Web Audio API Synthesizer
 */

'use strict';

// Storage Keys
const STORAGE_KEYS = {
    CART: 'AEGIS_TACTICAL_CART_V1',
    WISHLIST: 'AEGIS_TACTICAL_WISHLIST_V1',
    COMPARE: 'AEGIS_TACTICAL_COMPARE_V1',
    COUPON: 'AEGIS_TACTICAL_COUPON_V1',
    ORDERS: 'AEGIS_TACTICAL_ORDERS_V1'
};

// Available Defense Discount Coupons
const VALID_COUPONS = {
    'UTC2': { code: 'UTC2', discount: 10, label: 'Ưu đãi Sinh viên UTC2 - Giảm 10%' },
    'NATO2026': { code: 'NATO2026', discount: 20, label: 'Thỏa ước Quốc phòng NATO 2026 - Giảm 20%' }
};

// Web Audio API Synthesizer & Audio Player
class TacticalSoundEngine {
    constructor() {
        this.audioCtx = null;
        this.fallbackAudio = new Audio('Sounds/tactical-click.mp3');
        this.weaponAudio = new Audio('Sounds/weapon-test-audio.mp3');
    }

    initContext() {
        if (!this.audioCtx) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (AudioContextClass) {
                this.audioCtx = new AudioContextClass();
            }
        }
        if (this.audioCtx && this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }
    }

    // Tactical Mechanical Gun-Cock & Click Sound
    playClick() {
        try {
            // Attempt to play actual mp3 file
            this.fallbackAudio.currentTime = 0;
            const playPromise = this.fallbackAudio.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Fallback to Web Audio API synthesis
                    this.synthesizeClick();
                });
            }
        } catch (e) {
            this.synthesizeClick();
        }
    }

    synthesizeClick() {
        try {
            this.initContext();
            if (!this.audioCtx) return;
            const now = this.audioCtx.currentTime;

            // Oscillator 1: High frequency snap (metallic latch)
            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(1400, now);
            osc.frequency.exponentialRampToValueAtTime(320, now + 0.05);

            gain.gain.setValueAtTime(0.3, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.05);

            // Oscillator 2: Low mechanical clack
            const subOsc = this.audioCtx.createOscillator();
            const subGain = this.audioCtx.createGain();
            subOsc.type = 'square';
            subOsc.frequency.setValueAtTime(180, now + 0.02);
            subOsc.frequency.exponentialRampToValueAtTime(60, now + 0.08);

            subGain.gain.setValueAtTime(0.25, now + 0.02);
            subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

            subOsc.connect(subGain);
            subGain.connect(this.audioCtx.destination);
            subOsc.start(now + 0.02);
            subOsc.stop(now + 0.08);
        } catch (err) {
            console.warn('Audio synthesis bypassed:', err);
        }
    }

    // Heavy Weapon Fire / Blast Synthesizer
    playWeaponFire() {
        try {
            this.weaponAudio.currentTime = 0;
            const playPromise = this.weaponAudio.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    this.synthesizeExplosion();
                });
            }
        } catch (e) {
            this.synthesizeExplosion();
        }
    }

    synthesizeExplosion() {
        try {
            this.initContext();
            if (!this.audioCtx) return;
            const now = this.audioCtx.currentTime;

            // Generate white noise buffer for explosion roar
            const bufferSize = this.audioCtx.sampleRate * 0.8;
            const noiseBuffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
            const output = noiseBuffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                output[i] = Math.random() * 2 - 1;
            }

            const whiteNoise = this.audioCtx.createBufferSource();
            whiteNoise.buffer = noiseBuffer;

            // Lowpass filter for heavy thud
            const filter = this.audioCtx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(450, now);
            filter.frequency.exponentialRampToValueAtTime(50, now + 0.7);

            const gain = this.audioCtx.createGain();
            gain.gain.setValueAtTime(0.6, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.75);

            whiteNoise.connect(filter);
            filter.connect(gain);
            gain.connect(this.audioCtx.destination);

            whiteNoise.start(now);
            whiteNoise.stop(now + 0.8);
        } catch (err) {
            console.warn('Explosion sound synthesis bypassed:', err);
        }
    }

    // Success radar chime
    playSuccessChime() {
        try {
            this.initContext();
            if (!this.audioCtx) return;
            const now = this.audioCtx.currentTime;

            const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
            notes.forEach((freq, index) => {
                const osc = this.audioCtx.createOscillator();
                const gain = this.audioCtx.createGain();
                const startTime = now + index * 0.08;

                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, startTime);

                gain.gain.setValueAtTime(0.18, startTime);
                gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.25);

                osc.connect(gain);
                gain.connect(this.audioCtx.destination);
                osc.start(startTime);
                osc.stop(startTime + 0.25);
            });
        } catch (err) {
            console.warn('Chime bypassed:', err);
        }
    }
}

const SoundEngine = new TacticalSoundEngine();

// Cart Data Engine
const CartEngine = {
    // Get stored items
    getCart() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEYS.CART)) || [];
        } catch (e) {
            return [];
        }
    },

    saveCart(cart) {
        localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
        this.updateHeaderUI();
    },

    getWishlist() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEYS.WISHLIST)) || [];
        } catch (e) {
            return [];
        }
    },

    saveWishlist(list) {
        localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(list));
        this.updateHeaderUI();
    },

    getCoupon() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEYS.COUPON)) || null;
        } catch (e) {
            return null;
        }
    },

    saveCoupon(coupon) {
        localStorage.setItem(STORAGE_KEYS.COUPON, JSON.stringify(coupon));
    },

    removeCoupon() {
        localStorage.removeItem(STORAGE_KEYS.COUPON);
    },

    // Cart Actions
    addToCart(productId, quantity = 1, notify = true) {
        const id = parseInt(productId, 10);
        const qty = parseInt(quantity, 10) || 1;
        const product = getProductById(id);
        if (!product) return;

        let cart = this.getCart();
        const existingIndex = cart.findIndex(item => item.id === id);

        if (existingIndex > -1) {
            cart[existingIndex].quantity += qty;
        } else {
            cart.push({
                id: id,
                quantity: qty,
                addedAt: new Date().toISOString()
            });
        }

        this.saveCart(cart);
        SoundEngine.playClick();

        if (notify) {
            this.showToast(`ĐÃ BỔ SUNG VÀO KHO KHÍ TÀI: [${product.natoCode || product.name}] (x${qty})`, 'success');
        }
    },

    updateQuantity(productId, quantity) {
        const id = parseInt(productId, 10);
        let qty = parseInt(quantity, 10);
        let cart = this.getCart();

        if (qty <= 0) {
            this.removeFromCart(id);
            return;
        }

        const index = cart.findIndex(item => item.id === id);
        if (index > -1) {
            cart[index].quantity = qty;
            this.saveCart(cart);
            SoundEngine.playClick();
        }
    },

    removeFromCart(productId) {
        const id = parseInt(productId, 10);
        const product = getProductById(id);
        let cart = this.getCart();
        cart = cart.filter(item => item.id !== id);
        this.saveCart(cart);
        SoundEngine.playClick();

        if (product) {
            this.showToast(`ĐÃ RÚT BỎ KHÍ TÀI: [${product.natoCode || product.name}]`, 'info');
        }
    },

    clearCart() {
        localStorage.removeItem(STORAGE_KEYS.CART);
        this.updateHeaderUI();
    },

    // Totals Calculation
    getCartTotals() {
        const cart = this.getCart();
        let subtotal = 0;
        let count = 0;

        cart.forEach(item => {
            const product = getProductById(item.id);
            if (product) {
                subtotal += (product.price * item.quantity);
                count += item.quantity;
            }
        });

        const coupon = this.getCoupon();
        let discountPercent = coupon ? coupon.discount : 0;
        let discountAmount = Math.round((subtotal * discountPercent) / 100);
        let shipping = subtotal > 100000 || subtotal === 0 ? 0 : 5000;
        let grandTotal = Math.max(0, subtotal - discountAmount + shipping);

        return {
            subtotal,
            count,
            discountPercent,
            discountAmount,
            couponCode: coupon ? coupon.code : null,
            shipping,
            grandTotal
        };
    },

    // Wishlist Actions
    toggleWishlist(productId) {
        const id = parseInt(productId, 10);
        const product = getProductById(id);
        let list = this.getWishlist();
        const index = list.indexOf(id);

        if (index > -1) {
            list.splice(index, 1);
            this.saveWishlist(list);
            SoundEngine.playClick();
            this.showToast(`ĐÃ BỎ KHỎI DANH SÁCH THEO DÕI: [${product.name}]`, 'info');
            return false;
        } else {
            list.push(id);
            this.saveWishlist(list);
            SoundEngine.playClick();
            this.showToast(`ĐÃ LƯU VÀO DANH SÁCH THEO DÕI TÁC CHIẾN: [${product.name}]`, 'success');
            return true;
        }
    },

    isInWishlist(productId) {
        const id = parseInt(productId, 10);
        return this.getWishlist().includes(id);
    },

    // Coupon Engine
    applyCoupon(code) {
        if (!code) return { success: false, message: 'Vui lòng nhập mã ưu đãi quân sự!' };
        const cleanCode = code.trim().toUpperCase();
        if (VALID_COUPONS[cleanCode]) {
            const coupon = VALID_COUPONS[cleanCode];
            this.saveCoupon(coupon);
            SoundEngine.playSuccessChime();
            this.showToast(`KÍCH HOẠT MÃ THÀNH CÔNG: ${coupon.label}`, 'success');
            return { success: true, coupon };
        } else {
            this.showToast('MÃ QUÂN SỰ KHÔNG HỢP LỆ HOẶC HẾT HẠN!', 'error');
            return { success: false, message: 'Mã quân sự không hợp lệ. Gợi ý: Dùng mã UTC2 hoặc NATO2026' };
        }
    },

    // Toast HUD Notifications
    showToast(message, type = 'info') {
        let container = document.getElementById('aegis-toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'aegis-toast-container';
            container.className = 'aegis-toast-container';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = `aegis-toast aegis-toast--${type}`;
        
        let iconHtml = '<i class="fa-solid fa-shield-halved"></i>';
        if (type === 'success') iconHtml = '<i class="fa-solid fa-circle-check"></i>';
        if (type === 'error') iconHtml = '<i class="fa-solid fa-triangle-exclamation"></i>';

        toast.innerHTML = `
            <div class="aegis-toast__icon">${iconHtml}</div>
            <div class="aegis-toast__body">
                <div class="aegis-toast__title">AEGIS TACTICAL COMMAND</div>
                <div class="aegis-toast__text">${message}</div>
            </div>
            <button class="aegis-toast__close" aria-label="Đóng">&times;</button>
        `;

        container.appendChild(toast);

        // Auto close after 3.8s
        const removeTimer = setTimeout(() => {
            toast.classList.add('aegis-toast--hiding');
            setTimeout(() => toast.remove(), 400);
        }, 3800);

        toast.querySelector('.aegis-toast__close').addEventListener('click', () => {
            clearTimeout(removeTimer);
            toast.remove();
        });
    },

    // Update Header Counts on all pages
    updateHeaderUI() {
        const totals = this.getCartTotals();
        const wishlist = this.getWishlist();

        // Update badges
        const cartCountBadges = document.querySelectorAll('.cart-count, #cart-count');
        cartCountBadges.forEach(el => el.textContent = totals.count);

        const wishlistCountBadges = document.querySelectorAll('.wishlist-count, #wishlist-count');
        wishlistCountBadges.forEach(el => el.textContent = wishlist.length);

        // Update total money
        const headerTotals = document.querySelectorAll('.header-cart-total, #header-cart-total');
        headerTotals.forEach(el => {
            el.textContent = formatCurrency(totals.grandTotal);
        });
    },

    // Quick View Tactical Modal
    openQuickView(productId) {
        const product = getProductById(productId);
        if (!product) return;

        let modal = document.getElementById('aegis-quickview-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'aegis-quickview-modal';
            modal.className = 'aegis-modal-overlay';
            document.body.appendChild(modal);
        }

        modal.innerHTML = `
            <div class="aegis-modal-dialog">
                <button class="aegis-modal-close">&times;</button>
                <div class="aegis-modal-content">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="quickview-pic">
                                <img src="${product.image}" alt="${product.name}" onerror="this.src='${generateFallbackImage(product)}'">
                                <span class="quickview-badge">${product.natoCode || 'NATO SPEC'}</span>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="quickview-details">
                                <span class="quickview-cat">${product.category}</span>
                                <h3>${product.name}</h3>
                                <div class="quickview-rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <span>(${product.reviewsCount} báo cáo tác chiến)</span>
                                </div>
                                <div class="quickview-price">
                                    ${formatCurrency(product.price)}
                                    ${product.oldPrice ? `<span class="old-price">${formatCurrency(product.oldPrice)}</span>` : ''}
                                </div>
                                <p class="quickview-desc">${product.shortDesc}</p>
                                
                                <ul class="quickview-specs-list">
                                    <li><b>Xuất xứ:</b> <span>${product.origin}</span></li>
                                    <li><b>Tầm hoạt động:</b> <span>${product.range}</span></li>
                                    <li><b>Trọng lượng:</b> <span>${product.weight}</span></li>
                                    <li><b>Tình trạng:</b> <span class="stock-badge in-stock">${product.status}</span></li>
                                </ul>

                                <div class="quickview-actions">
                                    <div class="product__details__quantity">
                                        <div class="quantity">
                                            <div class="pro-qty">
                                                <input type="text" id="quickview-qty" value="1">
                                            </div>
                                        </div>
                                    </div>
                                    <button class="primary-btn site-btn" id="quickview-add-cart" data-id="${product.id}">
                                        <i class="fa fa-shopping-bag"></i> THÊM VÀO GIỎ HÀNG
                                    </button>
                                    <button class="heart-icon-btn ${this.isInWishlist(product.id) ? 'active' : ''}" id="quickview-wishlist" data-id="${product.id}">
                                        <i class="fa-solid fa-heart"></i>
                                    </button>
                                </div>
                                
                                <div class="quickview-footer">
                                    <a href="shop-details.html?id=${product.id}" class="view-details-link">
                                        XEM ĐẦY ĐỦ THÔNG SỐ VÀ AUDIO/VIDEO THỰC CHIẾN →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        modal.classList.add('active');
        document.body.classList.add('modal-open');

        // Setup quantity buttons in quickview
        const qtyContainer = modal.querySelector('.pro-qty');
        if (qtyContainer && !qtyContainer.querySelector('.qtybtn')) {
            const dec = document.createElement('span');
            dec.className = 'dec qtybtn';
            dec.textContent = '-';
            const inc = document.createElement('span');
            inc.className = 'inc qtybtn';
            inc.textContent = '+';
            qtyContainer.prepend(dec);
            qtyContainer.append(inc);

            qtyContainer.querySelectorAll('.qtybtn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const input = qtyContainer.querySelector('input');
                    let val = parseInt(input.value, 10) || 1;
                    if (this.classList.contains('inc')) {
                        input.value = val + 1;
                    } else {
                        input.value = val > 1 ? val - 1 : 1;
                    }
                });
            });
        }

        // Close events
        modal.querySelector('.aegis-modal-close').onclick = () => {
            modal.classList.remove('active');
            document.body.classList.remove('modal-open');
        };
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.classList.remove('modal-open');
            }
        };

        // Add to cart click
        modal.querySelector('#quickview-add-cart').onclick = () => {
            const qty = parseInt(modal.querySelector('#quickview-qty').value, 10) || 1;
            this.addToCart(product.id, qty);
            modal.classList.remove('active');
            document.body.classList.remove('modal-open');
        };

        // Wishlist click
        modal.querySelector('#quickview-wishlist').onclick = function() {
            const added = CartEngine.toggleWishlist(product.id);
            this.classList.toggle('active', added);
        };
    }
};

// Auto-run on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    CartEngine.updateHeaderUI();

    // Delegate global add-to-cart clicks
    document.addEventListener('click', (e) => {
        const addCartBtn = e.target.closest('.add-to-cart-btn, [data-action="add-cart"]');
        if (addCartBtn) {
            e.preventDefault();
            const id = addCartBtn.getAttribute('data-id');
            const qty = addCartBtn.getAttribute('data-qty') || 1;
            CartEngine.addToCart(id, qty);
        }

        const wishlistBtn = e.target.closest('.add-to-wishlist-btn, [data-action="toggle-wishlist"]');
        if (wishlistBtn) {
            e.preventDefault();
            const id = wishlistBtn.getAttribute('data-id');
            const added = CartEngine.toggleWishlist(id);
            wishlistBtn.classList.toggle('active', added);
        }

        const quickViewBtn = e.target.closest('.quick-view-btn, [data-action="quick-view"]');
        if (quickViewBtn) {
            e.preventDefault();
            const id = quickViewBtn.getAttribute('data-id');
            CartEngine.openQuickView(id);
        }
    });
});
