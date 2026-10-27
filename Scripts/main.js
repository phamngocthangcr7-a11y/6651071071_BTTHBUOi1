/**
 * AEGIS TACTICAL & DEFENSE SYSTEMS - MAIN UI & LOGIC CONTROLLER
 * Xử lý Preloader, Humberger Menu, Hero Categories, Filter Tabs, Sliders,
 * Autocomplete Search, Audio/Video Players, Modal & DOM Controllers
 * Mô phỏng 100% chức năng & bố cục Ogani Template (WebDesign_UTC2)
 */

'use strict';

(function () {
    // Helper to safely select elements
    const $ = (selector, context = document) => context.querySelector(selector);
    const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));

    /*------------------
        Preloader
    --------------------*/
    window.addEventListener('load', () => {
        const loader = $('.loader');
        const preloder = $('#preloder');
        if (loader) {
            loader.style.transition = 'opacity 0.4s ease';
            loader.style.opacity = '0';
        }
        if (preloder) {
            setTimeout(() => {
                preloder.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';
                preloder.style.opacity = '0';
                preloder.style.visibility = 'hidden';
                setTimeout(() => preloder.remove(), 600);
            }, 250);
        }
    });

    /*------------------
        Background Set (.set-bg)
    --------------------*/
    function initSetBg() {
        $$('.set-bg').forEach(el => {
            const bg = el.getAttribute('data-setbg');
            if (bg) {
                el.style.backgroundImage = `url('${bg}')`;
            }
        });
    }

    /*------------------
        Humberger Off-canvas Menu (Mobile)
    --------------------*/
    function initHumbergerMenu() {
        const openBtn = $('.humberger__open');
        const wrapper = $('.humberger__menu__wrapper');
        const overlay = $('.humberger__menu__overlay');
        const closeBtn = $('.humberger__menu__close');

        if (openBtn && wrapper && overlay) {
            openBtn.addEventListener('click', () => {
                wrapper.classList.add('show__humberger__menu__wrapper');
                overlay.classList.add('active');
                document.body.classList.add('over_hid');
            });

            const closeMenu = () => {
                wrapper.classList.remove('show__humberger__menu__wrapper');
                overlay.classList.remove('active');
                document.body.classList.remove('over_hid');
            };

            overlay.addEventListener('click', closeMenu);
            if (closeBtn) closeBtn.addEventListener('click', closeMenu);
        }
    }

    /*------------------
        Hero Categories SlideToggle
    --------------------*/
    function initHeroCategories() {
        const catBtn = $('.hero__categories__all');
        const catList = $('.hero__categories ul');
        if (catBtn && catList) {
            catBtn.addEventListener('click', (e) => {
                e.preventDefault();
                catList.classList.toggle('active');
            });
        }
    }

    /*------------------
        Hero Search Autocomplete
    --------------------*/
    function initSearchAutocomplete() {
        const searchInput = $('.hero__search__form input');
        const searchForm = $('.hero__search__form form');
        const searchCatSelect = $('.hero__search__categories select');

        if (!searchInput) return;

        // Create dropdown container for suggestions
        let suggestBox = $('.hero__search__suggestions');
        if (!suggestBox) {
            suggestBox = document.createElement('div');
            suggestBox.className = 'hero__search__suggestions';
            searchInput.parentElement.appendChild(suggestBox);
        }

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            if (query.length < 2) {
                suggestBox.classList.remove('show');
                suggestBox.innerHTML = '';
                return;
            }

            const matches = PRODUCTS_DATA.filter(p => {
                return p.name.toLowerCase().includes(query) ||
                    (p.natoCode && p.natoCode.toLowerCase().includes(query)) ||
                    p.category.toLowerCase().includes(query) ||
                    p.origin.toLowerCase().includes(query);
            }).slice(0, 5);

            if (matches.length === 0) {
                suggestBox.innerHTML = `<div class="suggestion-item no-match"><i class="fa fa-info-circle"></i> Không tìm thấy khí tài phù hợp với "${query}"</div>`;
            } else {
                suggestBox.innerHTML = matches.map(p => `
                    <a href="shop-details.html?id=${p.id}" class="suggestion-item">
                        <img src="${p.image}" alt="${p.name}" onerror="this.src='${generateFallbackImage(p)}'">
                        <div class="s-info">
                            <span class="s-name">${p.name}</span>
                            <span class="s-code">${p.natoCode || p.category} - <b style="color:#d97706">${formatCurrency(p.price)}</b></span>
                        </div>
                    </a>
                `).join('');
            }
            suggestBox.classList.add('show');
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !suggestBox.contains(e.target)) {
                suggestBox.classList.remove('show');
            }
        });

        if (searchForm) {
            searchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const q = searchInput.value.trim();
                const cat = searchCatSelect ? searchCatSelect.value : '';
                let targetUrl = 'shop-grid.html?';
                if (q) targetUrl += `search=${encodeURIComponent(q)}&`;
                if (cat && cat !== 'all') targetUrl += `category=${encodeURIComponent(cat)}`;
                window.location.href = targetUrl;
            });
        }
    }

    /*------------------
        Featured Products Tabs Filter
    --------------------*/
    function initFeaturedFilter() {
        const controlButtons = $$('.featured__controls li');
        const items = $$('.featured__filter .mix');

        if (controlButtons.length === 0 || items.length === 0) return;

        controlButtons.forEach(btn => {
            btn.addEventListener('click', function () {
                controlButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                const filter = this.getAttribute('data-filter');
                const targetClass = (filter === '*' ? '*' : filter.replace('.', '').trim());

                items.forEach(item => {
                    if (item._filterTimeout) {
                        clearTimeout(item._filterTimeout);
                        item._filterTimeout = null;
                    }

                    const isMatch = (targetClass === '*' || item.classList.contains(targetClass));
                    if (isMatch) {
                        item.style.display = '';
                        void item.offsetWidth; // Force reflow
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.92)';
                        item._filterTimeout = setTimeout(() => {
                            item.style.display = 'none';
                            item._filterTimeout = null;
                        }, 250);
                    }
                });
            });
        });
    }

    /*------------------
        Carousel / Slider Initializers
    --------------------*/
    // Generic Horizontal Slider Controller
    function createHorizontalSlider(containerSelector, prevBtnSelector, nextBtnSelector, scrollStep = 300) {
        const container = $(containerSelector);
        const prevBtn = $(prevBtnSelector);
        const nextBtn = $(nextBtnSelector);

        if (!container) return;

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                container.scrollBy({ left: -scrollStep, behavior: 'smooth' });
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                container.scrollBy({ left: scrollStep, behavior: 'smooth' });
            });
        }
    }

    // Categories Slider
    function initCategoriesSlider() {
        createHorizontalSlider('.categories__slider', '.categories__slider__prev', '.categories__slider__next', 290);
    }

    // Latest Product Vertical 3-Column Sliders
    function initLatestProductSliders() {
        $$('.latest-product__slider').forEach(slider => {
            const items = slider.querySelectorAll('.latest-product__slider__item');
            if (items.length <= 1) return;

            let currentIndex = 0;
            const parent = slider.closest('.latest-product__text');
            const prevBtn = parent ? parent.querySelector('.latest-product__btn-prev') : null;
            const nextBtn = parent ? parent.querySelector('.latest-product__btn-next') : null;

            const updateSlide = () => {
                items.forEach((item, idx) => {
                    item.style.display = idx === currentIndex ? 'block' : 'none';
                });
            };

            updateSlide();

            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    currentIndex = (currentIndex - 1 + items.length) % items.length;
                    updateSlide();
                });
            }
            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    currentIndex = (currentIndex + 1) % items.length;
                    updateSlide();
                });
            }
        });
    }

    /*------------------
        Quantity Change (.pro-qty)
    --------------------*/
    function initQuantityButtons() {
        $$('.pro-qty').forEach(qtyContainer => {
            if (qtyContainer.querySelector('.qtybtn')) return; // already initialized

            const dec = document.createElement('span');
            dec.className = 'dec qtybtn';
            dec.textContent = '-';

            const inc = document.createElement('span');
            inc.className = 'inc qtybtn';
            inc.textContent = '+';

            qtyContainer.prepend(dec);
            qtyContainer.append(inc);

            const input = qtyContainer.querySelector('input');

            dec.addEventListener('click', () => {
                let val = parseInt(input.value, 10) || 1;
                if (val > 1) {
                    input.value = val - 1;
                    input.dispatchEvent(new Event('change'));
                }
            });

            inc.addEventListener('click', () => {
                let val = parseInt(input.value, 10) || 1;
                input.value = val + 1;
                input.dispatchEvent(new Event('change'));
            });
        });
    }

    /*------------------
        Video Modal Controller
    --------------------*/
    function initVideoModal() {
        const videoBtns = $$('.open-combat-video-btn, [data-action="open-video"]');
        videoBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const videoSrc = btn.getAttribute('data-src') || 'Videos/hero-combat-demo.mp4';

                let modal = $('#aegis-video-modal');
                if (!modal) {
                    modal = document.createElement('div');
                    modal.id = 'aegis-video-modal';
                    modal.className = 'aegis-modal-overlay video-modal';
                    document.body.appendChild(modal);
                }

                modal.innerHTML = `
                    <div class="aegis-modal-dialog video-dialog">
                        <button class="aegis-modal-close">&times;</button>
                        <div class="video-container">
                            <div class="video-hud-header">
                                <span class="rec-badge"><i class="fa fa-circle"></i> THỰC CHIẾN TỰ ĐỘNG - CLASSIFIED</span>
                                <span>AEGIS DEFENSE LIVE COMBAT FEED</span>
                            </div>
                            <video controls autoplay class="tactical-video-player" src="${videoSrc}">
                                Trình duyệt của bạn không hỗ trợ thẻ video.
                            </video>
                        </div>
                    </div>
                `;

                modal.classList.add('active');
                document.body.classList.add('modal-open');

                const video = modal.querySelector('video');
                const closeModal = () => {
                    if (video) video.pause();
                    modal.classList.remove('active');
                    document.body.classList.remove('modal-open');
                };

                modal.querySelector('.aegis-modal-close').onclick = closeModal;
                modal.onclick = (event) => {
                    if (event.target === modal) closeModal();
                };
            });
        });
    }

    /*------------------
        Audio Test Player (Shop Details)
    --------------------*/
    function initAudioTestPlayer() {
        const testBtn = $('#weapon-audio-test-btn');
        const audioEl = $('#weapon-test-audio-element');
        const waveContainer = $('#audio-wave-visualizer');

        if (!testBtn) return;

        let isPlaying = false;

        testBtn.addEventListener('click', (e) => {
            e.preventDefault();
            SoundEngine.playWeaponFire();

            if (waveContainer) {
                waveContainer.classList.add('active');
            }

            testBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i> ĐANG KHAI HỎA / THỬ ĐỘNG CƠ...';
            testBtn.classList.add('firing');

            setTimeout(() => {
                if (waveContainer) waveContainer.classList.remove('active');
                testBtn.innerHTML = '<i class="fa-solid fa-satellite-dish"></i> THỬ NGHIỆM ĐỘNG CƠ / KHAI HỎA (AUDIO)';
                testBtn.classList.remove('firing');
            }, 2500);
        });
    }

    /*------------------
        Shop Details Pic Thumbnail Click
    --------------------*/
    function initProductDetailsPic() {
        const mainPic = $('.product__details__pic__item--large');
        const thumbs = $$('.product__details__pic__slider img, .product__details__pic__thumbs img');

        if (!mainPic || thumbs.length === 0) return;

        thumbs.forEach(thumb => {
            thumb.addEventListener('click', function () {
                thumbs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                const newSrc = this.getAttribute('data-imgbigurl') || this.getAttribute('src');
                if (newSrc) {
                    mainPic.setAttribute('src', newSrc);
                }
            });
        });
    }

    /*------------------
        Shop Details Tabs Navigation
    --------------------*/
    function initShopDetailsTabs() {
        const tabLinks = $$('.product__details__tab .nav-tabs .nav-link');
        const tabPanes = $$('.product__details__tab .tab-content .tab-pane');

        if (tabLinks.length === 0) return;

        tabLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                tabLinks.forEach(l => l.classList.remove('active'));
                tabPanes.forEach(p => {
                    p.classList.remove('active');
                    p.classList.remove('show');
                });

                this.classList.add('active');
                const targetId = this.getAttribute('href');
                const targetPane = $(targetId);
                if (targetPane) {
                    targetPane.classList.add('active');
                    targetPane.classList.add('show');
                }

                // If switched away from Video Tab, pause video playback
                if (targetId !== '#tabs-3') {
                    const videoEl = $('#detail-combat-video') || $('video');
                    if (videoEl && !videoEl.paused) {
                        videoEl.pause();
                    }
                }
            });
        });
    }

    /*------------------
        Shop Details Review Form
    --------------------*/
    function initReviewForm(productId) {
        const form = $('#officer-review-form');
        const reviewListContainer = $('#officer-reviews-container');

        if (!form || !reviewListContainer) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const officerName = $('#review-officer-name').value.trim();
            const officerUnit = $('#review-officer-unit').value.trim();
            const officerRating = parseInt($('#review-officer-rating').value, 10) || 5;
            const officerComment = $('#review-officer-comment').value.trim();

            if (!officerName || !officerComment) {
                CartEngine.showToast('Vui lòng nhập đầy đủ Danh tính Sĩ quan & Nhận xét tác chiến!', 'error');
                return;
            }

            const newReview = {
                author: officerName,
                unit: officerUnit || 'Đơn vị Tác chiến Độc lập',
                rating: officerRating,
                date: new Date().toLocaleDateString('vi-VN'),
                comment: officerComment
            };

            // Save to LocalStorage
            const storageKey = `AEGIS_REVIEWS_${productId}`;
            let stored = [];
            try {
                stored = JSON.parse(localStorage.getItem(storageKey)) || [];
            } catch (err) {
                stored = [];
            }
            stored.unshift(newReview);
            localStorage.setItem(storageKey, JSON.stringify(stored));

            // Prepend review DOM
            const starsHtml = '<i class="fa fa-star"></i>'.repeat(officerRating);
            const reviewEl = document.createElement('div');
            reviewEl.className = 'officer-review-card';
            reviewEl.innerHTML = `
                <div class="review-header">
                    <div class="officer-meta">
                        <span class="officer-name"><i class="fa-solid fa-user-shield"></i> ${newReview.author}</span>
                        <span class="officer-unit">${newReview.unit}</span>
                    </div>
                    <div class="review-rating">${starsHtml}</div>
                </div>
                <div class="review-date"><i class="fa fa-calendar"></i> ${newReview.date}</div>
                <p class="review-body">${newReview.comment}</p>
            `;
            reviewListContainer.prepend(reviewEl);

            form.reset();
            SoundEngine.playSuccessChime();
            CartEngine.showToast('Báo cáo đánh giá tác chiến đã được lưu vào hệ thống!', 'success');
        });
    }

    /*------------------
        Price Range Slider (Shop Grid)
    --------------------*/
    function initPriceSlider() {
        const minInput = $('#minamount');
        const maxInput = $('#maxamount');
        const sliderRange = $('.price-range');

        if (!sliderRange || !minInput || !maxInput) return;

        // If jQuery UI slider is loaded
        if (window.jQuery && jQuery.fn.slider) {
            const minVal = parseInt(sliderRange.getAttribute('data-min'), 10) || 5000;
            const maxVal = parseInt(sliderRange.getAttribute('data-max'), 10) || 100000000;

            jQuery(sliderRange).slider({
                range: true,
                min: minVal,
                max: maxVal,
                values: [minVal, maxVal],
                slide: function (event, ui) {
                    minInput.value = formatCurrency(ui.values[0]);
                    maxInput.value = formatCurrency(ui.values[1]);
                },
                change: function (event, ui) {
                    if (window.filterByPrice) {
                        window.filterByPrice(ui.values[0], ui.values[1]);
                    }
                }
            });

            minInput.value = formatCurrency(minVal);
            maxInput.value = formatCurrency(maxVal);
        }
    }

    /*------------------
        Global Initialization
    --------------------*/
    document.addEventListener('DOMContentLoaded', () => {
        initSetBg();
        initHumbergerMenu();
        initHeroCategories();
        initSearchAutocomplete();
        initFeaturedFilter();
        initCategoriesSlider();
        initLatestProductSliders();
        initQuantityButtons();
        initVideoModal();
        initAudioTestPlayer();
        initProductDetailsPic();
        initShopDetailsTabs();
        initPriceSlider();
    });

    // Expose APIs to window
    window.AegisUI = {
        initQuantityButtons,
        initProductDetailsPic,
        initReviewForm,
        initPriceSlider,
        initSetBg
    };
})();
