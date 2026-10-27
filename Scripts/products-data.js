/**
 * AEGIS TACTICAL & DEFENSE SYSTEMS - DATABASE KHÍ TÀI & QUỐC PHÒNG
 * Cơ sở dữ liệu 18+ Khí tài & Vũ khí Quân sự Tối tân nhất Thế giới
 * Tương thích 100% định dạng dữ liệu chuẩn E-commerce & Ogani Template
 */

'use strict';

const CATEGORIES_DATA = [
    {
        id: 'air-defense',
        name: 'Hệ thống Phòng không & Radar',
        slug: 'air-defense',
        icon: 'fa-solid fa-radar',
        count: 4,
        filterClass: 'air-defense',
        image: 'Images/cat-air-defense.jpg'
    },
    {
        id: 'missiles',
        name: 'Tên lửa Chiến thuật & Pháo phản lực',
        slug: 'missiles',
        icon: 'fa-solid fa-rocket',
        count: 3,
        filterClass: 'air-defense',
        image: 'Images/cat-air-defense.jpg'
    },
    {
        id: 'uav',
        name: 'UAV Trinh sát & Drone Cảm tử',
        slug: 'uav',
        icon: 'fa-solid fa-plane-up',
        count: 3,
        filterClass: 'uav-air',
        image: 'Images/cat-uav.jpg'
    },
    {
        id: 'stealth-fighter',
        name: 'Tiêm kích Tàng hình Thế hệ 5',
        slug: 'stealth-fighter',
        icon: 'fa-solid fa-jet-fighter',
        count: 2,
        filterClass: 'uav-air',
        image: 'Images/cat-uav.jpg'
    },
    {
        id: 'mbt',
        name: 'Xe tăng Chủ lực (MBT)',
        slug: 'mbt',
        icon: 'fa-solid fa-shield-halved',
        count: 3,
        filterClass: 'armor',
        image: 'Images/cat-armor.jpg'
    },
    {
        id: 'armored-artillery',
        name: 'Thiết giáp & Pháo tự hành',
        slug: 'armored-artillery',
        icon: 'fa-solid fa-truck-monster',
        count: 2,
        filterClass: 'armor',
        image: 'Images/cat-armor.jpg'
    },
    {
        id: 'infantry-ngsw',
        name: 'Vũ khí Cá nhân Thế hệ mới (NGSW)',
        slug: 'infantry-ngsw',
        icon: 'fa-solid fa-gun',
        count: 2,
        filterClass: 'infantry-robot',
        image: 'Images/cat-infantry.jpg'
    },
    {
        id: 'combat-robot',
        name: 'Robot Chiến đấu Tích hợp AI',
        slug: 'combat-robot',
        icon: 'fa-solid fa-robot',
        count: 2,
        filterClass: 'infantry-robot',
        image: 'Images/cat-infantry.jpg'
    },
    {
        id: 'electronic-warfare',
        name: 'Tác chiến Điện tử & Vũ khí Laser',
        slug: 'electronic-warfare',
        icon: 'fa-solid fa-bolt-lightning',
        count: 2,
        filterClass: 'air-defense',
        image: 'Images/cat-electronic-warfare.jpg'
    },
    {
        id: 'night-vision',
        name: 'Kính Nhìn đêm & Quang ảnh nhiệt',
        slug: 'night-vision',
        icon: 'fa-solid fa-glasses',
        count: 1,
        filterClass: 'infantry-robot',
        image: 'Images/cat-infantry.jpg'
    },
    {
        id: 'tactical-gear',
        name: 'Giáp Chống đạn & Trang bị Đặc nhiệm',
        slug: 'tactical-gear',
        icon: 'fa-solid fa-vest',
        count: 1,
        filterClass: 'infantry-robot',
        image: 'Images/cat-infantry.jpg'
    }
];

const PRODUCTS_DATA = [
    {
        id: 1,
        name: "Tổ hợp Tên lửa Phòng không Patriot PAC-3 MSE",
        natoCode: "MIM-104F PAC-3 MSE",
        category: "Hệ thống Phòng không & Tên lửa",
        categorySlug: "air-defense",
        filterClass: "air-defense",
        price: 4100000,
        oldPrice: 4500000,
        discount: 9,
        origin: "Hoa Kỳ (Lockheed Martin)",
        countryCode: "US",
        weight: "312 kg (Mỗi đạn tên lửa)",
        range: "Tầm bắn 120km, trần bay 36km",
        status: "Sẵn sàng bàn giao theo hợp đồng",
        inStock: true,
        stockCount: 12,
        rating: 5.0,
        reviewsCount: 38,
        image: "Images/weapon-1.jpg",
        gallery: [
            "Images/weapon-1.jpg",
            "Images/weapon-1-thumb1.jpg",
            "Images/weapon-1-thumb2.jpg",
            "Images/weapon-1-thumb3.jpg"
        ],
        audioDemo: "Sounds/weapon-test-audio.mp3",
        videoDemo: "Videos/hero-combat-demo.mp4",
        shortDesc: "Hệ thống phòng không tên lửa tầm cao tối tân bậc nhất của NATO, sử dụng công nghệ đánh chặn trực tiếp hit-to-kill tiêu diệt tên lửa đạn đạo và siêu thanh.",
        specs: {
            "Mã định danh NATO": "MIM-104F PAC-3 MSE (Hit-to-Kill)",
            "Động cơ đẩy": "Động cơ nhiên liệu rắn hai tầng tích hợp kiểm soát xung lực ACM",
            "Đầu dò mục tiêu": "Radar chủ động băng tần Ka tần số cực cao",
            "Mục tiêu tác chiến": "Tên lửa đạn đạo chiến thuật (TBM), tên lửa hành trình, tiêm kích tàng hình",
            "Thời gian triển khai": "Dưới 25 phút chuyển trạng thái hành quân sang trực chiến",
            "Chuẩn kết nối dữ liệu": "Tích hợp mạng chỉ huy đa miền IBCS & Link-16"
        },
        details: "Tổ hợp Patriot PAC-3 MSE (Missile Segment Enhancement) là biến thể tối tân nhất thuộc dòng tên lửa đất đối không Patriot lừng danh thế giới. Được trang bị động cơ tên lửa xung lực kép lớn hơn cùng vây điều khiển linh hoạt, PAC-3 MSE có khả năng cơ động cực đại ở tầng khí quyển cao nhằm phá hủy hoàn toàn đầu đạn đạn đạo đang lao xuống bằng động năng va chạm thuần túy mà không phụ thuộc vào mảnh nổ phân mảnh.",
        featured: true,
        saleOff: true,
        latest: true,
        topRated: true,
        reviewList: [
            {
                author: "Trung tá David Vance",
                unit: "Bộ Chỉ huy Phòng không Không quân NATO",
                rating: 5,
                date: "14/01/2026",
                comment: "Hiệu suất đánh chặn mục tiêu quỹ đạo phức tạp đạt 99.4% trong bài tập bắn đạn thật tại sa mạc New Mexico."
            },
            {
                author: "Thiếu tướng Mark Sullivan",
                unit: "Bộ Quốc phòng Hoa Kỳ",
                rating: 5,
                date: "02/02/2026",
                comment: "Khả năng tích hợp mạng lưới radar đa tầng vượt xa thế hệ PAC-2 tiền nhiệm."
            }
        ]
    },
    {
        id: 2,
        name: "Hệ thống Phòng thủ Không gian S-500 Prometey 600km",
        natoCode: "55R6M Triumfator-M (Prometey)",
        category: "Hệ thống Phòng không & Tên lửa",
        categorySlug: "air-defense",
        filterClass: "air-defense",
        price: 6500000,
        oldPrice: 7200000,
        discount: 10,
        origin: "Nga (Almaz-Antey)",
        countryCode: "RU",
        weight: "Tổ hợp xe phóng 48 tấn",
        range: "Tầm bắn 600km, trần bắn 200km (Quỹ đạo thấp)",
        status: "Sản xuất giới hạn theo phê duyệt",
        inStock: true,
        stockCount: 6,
        rating: 4.9,
        reviewsCount: 29,
        image: "Images/weapon-2.jpg",
        gallery: [
            "Images/weapon-2.jpg",
            "Images/weapon-2-thumb1.jpg",
            "Images/weapon-2-thumb2.jpg",
            "Images/weapon-2-thumb3.jpg"
        ],
        audioDemo: "Sounds/weapon-test-audio.mp3",
        videoDemo: "Videos/hero-combat-demo.mp4",
        shortDesc: "Vũ khí phòng không và phòng thủ vũ trụ thế hệ mới, có khả năng tiêu diệt vệ tinh quỹ đạo thấp và tên lửa siêu vượt âm Mach 15+.",
        specs: {
            "Mã định danh tác chiến": "55R6M Prometey / SAM Thế hệ thứ 5",
            "Bán kính tác chiến không gian": "600 km đối với mục tiêu khí động học",
            "Trần đánh chặn quỹ đạo": "Lên tới 200 km (Bắn hạ vệ tinh LEO)",
            "Vận tốc tên lửa đánh chặn": "Tốc độ Mach 16 (Đạn 77N6-N và 77N6-N1)",
            "Số mục tiêu dẫn bắn đồng thời": "10 đầu đạn siêu thanh cùng lúc",
            "Radar cảnh giới": "Radar mảng pha chủ động AESA 91N6A(M)"
        },
        details: "S-500 Prometey không chỉ đơn thuần là vũ khí phòng không mặt đất mà thực sự là một lá chắn không gian chiến lược. Nó có thể tiêu diệt các đầu đạn tên lửa đạn đạo xuyên lục địa (ICBM) ở pha giữa và cuối đường bay, cùng các loại vũ khí lướt siêu vượt âm thế hệ mới nhất.",
        featured: true,
        saleOff: false,
        latest: true,
        topRated: true,
        reviewList: [
            {
                author: "Đại tá Viktor Kozlov",
                unit: "Lực lượng Vũ trụ Quân đội",
                rating: 5,
                date: "28/12/2025",
                comment: "Tốc độ xử lý dữ liệu và khóa mục tiêu siêu thanh chỉ mất dưới 3 giây từ khi phát hiện."
            }
        ]
    },
    {
        id: 3,
        name: "Pháo phản lực Phóng loạt M142 HIMARS (Đạn ATACMS/PrSM)",
        natoCode: "M142 HIMARS Precision Rocket",
        category: "Tên lửa Chiến thuật & Pháo phản lực",
        categorySlug: "missiles",
        filterClass: "air-defense",
        price: 3800000,
        oldPrice: 4200000,
        discount: 10,
        origin: "Hoa Kỳ (Lockheed Martin)",
        countryCode: "US",
        weight: "16,250 kg (Xe tải FMTV 6x6)",
        range: "GMLRS: 84km | ATACMS: 300km | PrSM: 500km",
        status: "Sẵn sàng bàn giao",
        inStock: true,
        stockCount: 18,
        rating: 5.0,
        reviewsCount: 52,
        image: "Images/weapon-3.jpg",
        gallery: [
            "Images/weapon-3.jpg",
            "Images/weapon-3-thumb1.jpg",
            "Images/weapon-3-thumb2.jpg",
            "Images/weapon-3-thumb3.jpg"
        ],
        audioDemo: "Sounds/weapon-test-audio.mp3",
        videoDemo: "Videos/hero-combat-demo.mp4",
        shortDesc: "Hỏa lực pháo phản lực dẫn đường chính xác cao qua vệ tinh GPS/INS với chiến thuật 'Bắn và Rút' siêu cơ động chỉ trong 2 phút.",
        specs: {
            "Khung gầm cơ sở": "Xe tải bánh lốp bọc thép FMTV 5 tấn",
            "Sức chứa container phóng": "6 quả GMLRS hoặc 1 tên lửa ATACMS / 2 tên lửa PrSM",
            "Độ chính xác (CEP)": "Dưới 3 mét ở cự ly tối đa bằng GPS chống nhiễu",
            "Vận tốc hành trình xe": "85 km/h trên đường trường",
            "Thời gian nạp đạn lại": "Dưới 5 phút với cần cẩu tự hành tích hợp",
            "Hệ thống điều khiển hỏa lực": "IFCS số hóa tích hợp bản đồ tác chiến kỹ thuật số"
        },
        details: "HIMARS là biểu tượng của tác chiến pháo binh chính xác hiện đại. Khả năng bắn đạn tên lửa dẫn đường và rút khỏi trận địa trước khi đối phương kịp định vị nguồn phát hỏa đã làm thay đổi hoàn toàn cục diện chiến trường thế kỷ 21.",
        featured: true,
        saleOff: true,
        latest: true,
        topRated: true,
        reviewList: [
            {
                author: "Trung tá Peter Gallagher",
                unit: "Sư đoàn Pháo binh Thiết giáp số 1",
                rating: 5,
                date: "10/01/2026",
                comment: "Uy lực và độ chính xác hoàn hảo. Hủy diệt mục tiêu sở chỉ huy kiên cố ngay phát bắn đầu tiên."
            }
        ]
    },
    {
        id: 4,
        name: "Hệ thống Phòng không Laser Iron Beam 100kW",
        natoCode: "Iron Beam High-Energy Laser Weapon (HEL)",
        category: "Tác chiến Điện tử & Vũ khí Laser",
        categorySlug: "electronic-warfare",
        filterClass: "air-defense",
        price: 2900000,
        oldPrice: 3500000,
        discount: 17,
        origin: "Israel (Rafael Advanced Defense)",
        countryCode: "IL",
        weight: "Container module cơ động 8.5 tấn",
        range: "Tầm đánh chặn hiệu dụng 7-10 km",
        status: "Sẵn sàng bàn giao thế hệ mới",
        inStock: true,
        stockCount: 8,
        rating: 4.8,
        reviewsCount: 22,
        image: "Images/weapon-4.jpg",
        gallery: [
            "Images/weapon-4.jpg",
            "Images/weapon-4-thumb1.jpg",
            "Images/weapon-4-thumb2.jpg",
            "Images/weapon-4-thumb3.jpg"
        ],
        audioDemo: "Sounds/weapon-test-audio.mp3",
        videoDemo: "Videos/hero-combat-demo.mp4",
        shortDesc: "Vũ khí năng lượng định hướng 100kW tiêu diệt Drone, UAV, đạn pháo và cối trong 4 giây với chi phí chỉ $3.50 mỗi phát bắn.",
        specs: {
            "Công suất chùm tia Laser": "100 kW công nghệ sợi quang học Fiber Laser",
            "Thời gian khóa và tiêu diệt": "3 đến 5 giây chiếu xạ năng lượng cao",
            "Chi phí mỗi phát bắn": "Khoảng 3.5 USD (Điện năng thuần túy)",
            "Cơ số đạn dược": "Không giới hạn (Phụ thuộc vào nguồn máy phát điện)",
            "Mục tiêu tác chiến": "Bầy đàn Drone UAV, đạn cối, rocket dẫn đường, pháo binh",
            "Thời gian phản ứng": "Tốc độ ánh sáng (300,000 km/s)"
        },
        details: "Iron Beam giải quyết triệt để bài toán kinh tế trong chiến tranh bất đối xứng: sử dụng một phát bắn năng lượng định hướng vài đô la để bắn hạ các thiết bị bay không người lái trị giá hàng chục nghìn đô la.",
        featured: true,
        saleOff: true,
        latest: false,
        topRated: true,
        reviewList: [
            {
                author: "Thiếu tá Eli Ben-Haim",
                unit: "Bộ Tư lệnh Phòng thủ Bờ biển",
                rating: 5,
                date: "05/02/2026",
                comment: "Không bao giờ lo cạn đạn dược. Bắn hạ 15 mục tiêu drone liên tiếp chỉ trong 90 giây."
            }
        ]
    },
    {
        id: 5,
        name: "Tiêm kích Tàng hình F-35A Lightning II Block 4",
        natoCode: "F-35A Lightning II CTOL Stealth",
        category: "Tiêm kích Tàng hình Thế hệ 5",
        categorySlug: "stealth-fighter",
        filterClass: "uav-air",
        price: 82000000,
        oldPrice: 89000000,
        discount: 8,
        origin: "Hoa Kỳ (Lockheed Martin)",
        countryCode: "US",
        weight: "13,290 kg (Trọng lượng rỗng)",
        range: "Bán kính chiến đấu 1,240 km | Tốc độ Mach 1.6",
        status: "Hợp đồng cấp chính phủ (FMS)",
        inStock: true,
        stockCount: 4,
        rating: 5.0,
        reviewsCount: 45,
        image: "Images/weapon-5.jpg",
        gallery: [
            "Images/weapon-5.jpg",
            "Images/weapon-5-thumb1.jpg",
            "Images/weapon-5-thumb2.jpg",
            "Images/weapon-5-thumb3.jpg"
        ],
        audioDemo: "Sounds/weapon-test-audio.mp3",
        videoDemo: "Videos/hero-combat-demo.mp4",
        shortDesc: "Chiến đấu cơ tàng hình đa năng thế hệ 5 tích hợp radar mảng pha AESA AN/APG-85, cảm biến quang điện EOTS và trí tuệ điện toán đám mây ODIN.",
        specs: {
            "Diện tích phản xạ radar (RCS)": "0.0015 m² (Tương đương quả bóng golf kim loại)",
            "Radar chính": "Radar AESA bán dẫn GaN AN/APG-85 tối tân",
            "Động cơ": "Pratt & Whitney F135-PW-100 lực đẩy 43,000 lbf có đốt sau",
            "Tải trọng vũ khí": "Khoang trong 2,600 kg (Giữ tàng hình) / Tối đa 8,160 kg",
            "Mũ bay phi công": "Mũ tích hợp hiển thị thực tế tăng cường HMDS Gen 3",
            "Tác chiến mạng": "Chia sẻ mục tiêu theo thời gian thực chuẩn MADL"
        },
        details: "F-35A Block 4 được mệnh danh là 'Máy tính bay biết tàng hình'. Với khả năng hợp nhất dữ liệu từ tất cả các cảm biến trên chiến trường, phi công có tầm nhìn xuyên thấu 360 độ quanh máy bay và làm chủ hoàn toàn không phận.",
        featured: true,
        saleOff: false,
        latest: true,
        topRated: true,
        reviewList: [
            {
                author: "Đại tá Marcus Reed",
                unit: "Không đoàn Chiến thuật số 388",
                rating: 5,
                date: "20/01/2026",
                comment: "Khả năng nhận thức tình huống không gian vượt trội hơn bất kỳ tiêm kích nào từng được chế tạo."
            }
        ]
    },
    {
        id: 6,
        name: "UAV Tấn công & Trinh sát MQ-9B SkyGuardian",
        natoCode: "MQ-9B SkyGuardian MALE RPAS",
        category: "UAV Trinh sát & Drone Cảm tử",
        categorySlug: "uav",
        filterClass: "uav-air",
        price: 28000000,
        oldPrice: 32000000,
        discount: 12,
        origin: "Hoa Kỳ (General Atomics)",
        countryCode: "US",
        weight: "5,670 kg (Trọng lượng cất cánh tối đa)",
        range: "Thời gian bay 40 giờ liên tục | Tầm bay 11,000 km",
        status: "Sẵn sàng bàn giao theo cấu hình",
        inStock: true,
        stockCount: 7,
        rating: 4.9,
        reviewsCount: 31,
        image: "Images/weapon-6.jpg",
        gallery: [
            "Images/weapon-6.jpg",
            "Images/weapon-6-thumb1.jpg",
            "Images/weapon-6-thumb2.jpg",
            "Images/weapon-6-thumb3.jpg"
        ],
        audioDemo: "Sounds/weapon-test-audio.mp3",
        videoDemo: "Videos/hero-combat-demo.mp4",
        shortDesc: "Máy bay không người lái tầm cao bay lâu (MALE) có thể bay 40 giờ không nghỉ, dẫn đường vệ tinh SATCOM và tự động cất/hạ cánh mọi thời tiết.",
        specs: {
            "Thời gian bay liên tục": "Trên 40 giờ trong mọi điều kiện khí tượng",
            "Trần bay tác chiến": "12,200 mét (40,000 feet)",
            "Tải trọng vũ khí/cảm biến": "2,155 kg trên 9 giá treo",
            "Vũ khí tích hợp": "Tên lửa Hellfire AGM-114, bom dẫn đường laser Paveway, Brimstone",
            "Kết nối": "Dẫn đường vệ tinh bảo mật chống tác chiến điện tử",
            "Chứng chỉ hàng không": "Đáp ứng chuẩn bay trong không phận dân sự STANAG 4671"
        },
        details: "MQ-9B SkyGuardian là chuẩn mực toàn cầu về trinh sát đường không tầm xa và chi viện hỏa lực chính xác. Hệ thống có khả năng tự phát hiện và tránh va chạm (Detect and Avoid) tiên tiến.",
        featured: true,
        saleOff: true,
        latest: false,
        topRated: true,
        reviewList: [
            {
                author: "Trung tá Sarah Jenkins",
                unit: "Lực lượng Tuần thám Biển Viễn chinh",
                rating: 5,
                date: "04/01/2026",
                comment: "Tuần tra 36 giờ liên tục kiểm soát toàn bộ tuyến đường biển quốc tế mà không cần tiếp nhiên liệu."
            }
        ]
    },
    {
        id: 7,
        name: "UAV Cảm tử Chống tăng Switchblade 600",
        natoCode: "Switchblade 600 Loitering Munition",
        category: "UAV Trinh sát & Drone Cảm tử",
        categorySlug: "uav",
        filterClass: "uav-air",
        price: 180000,
        oldPrice: 210000,
        discount: 14,
        origin: "Hoa Kỳ (AeroVironment)",
        countryCode: "US",
        weight: "22.7 kg (Toàn bộ ống phóng và đạn)",
        range: "Tầm hoạt động 40 km, tuần kích 40+ phút",
        status: "Sẵn sàng bàn giao hàng loạt",
        inStock: true,
        stockCount: 65,
        rating: 4.9,
        reviewsCount: 77,
        image: "Images/weapon-7.jpg",
        gallery: [
            "Images/weapon-7.jpg",
            "Images/weapon-7-thumb1.jpg",
            "Images/weapon-7-thumb2.jpg",
            "Images/weapon-7-thumb3.jpg"
        ],
        audioDemo: "Sounds/weapon-test-audio.mp3",
        videoDemo: "Videos/hero-combat-demo.mp4",
        shortDesc: "Đạn tuần kích thông minh mang đầu đạn chống tăng Javelin xuyên giáp phản ứng nổ ERA, có thể hủy lệnh tấn công trong tích tắc.",
        specs: {
            "Trọng lượng đạn": "15 kg (Khởi động bằng ống phóng nén khí)",
            "Đầu đạn": "Đầu nổ lõm định hình chống tăng dựa trên Javelin",
            "Thời gian bay tuần kích": "Hơn 40 phút tìm kiếm và khóa mục tiêu",
            "Vận tốc tấn công bổ nhào": "185 km/h",
            "Cảm biến tích hợp": "Cụm camera EO/IR độ phân giải cao xoay quét đa hướng",
            "Tính năng đặc biệt": "Khả năng hủy tấn công (Wave-off) và tái tấn công sau đó"
        },
        details: "Switchblade 600 mang lại cho các đơn vị bộ binh năng lực tiêu diệt xe tăng đối phương ngoài tầm nhìn trực tiếp với độ chính xác đến từng centimet, giảm thiểu tối đa rủi ro thiệt hại ngoài dự kiến.",
        featured: false,
        saleOff: true,
        latest: true,
        topRated: true,
        reviewList: [
            {
                author: "Đại úy Alex Miller",
                unit: "Lực lượng Đặc nhiệm SEAL Team",
                rating: 5,
                date: "12/02/2026",
                comment: "Triển khai chỉ mất 10 phút từ ba lô cá nhân. Độ chính xác hủy diệt xe bọc thép ở cự ly 35km."
            }
        ]
    },
    {
        id: 8,
        name: "Chiến đấu cơ Không người lái Tàng hình Bayraktar Kızılelma",
        natoCode: "Bayraktar Kızılelma (MIUS Unmanned Fighter)",
        category: "Tiêm kích Tàng hình Thế hệ 5",
        categorySlug: "stealth-fighter",
        filterClass: "uav-air",
        price: 22000000,
        oldPrice: 25000000,
        discount: 12,
        origin: "Thổ Nhĩ Kỳ (Baykar Defense)",
        countryCode: "TR",
        weight: "6,000 kg (Tải trọng cất cánh tối đa)",
        range: "Tốc độ cận âm Mach 0.9 (Bản siêu âm Mach 1.4) | Bán kính 930km",
        status: "Bàn giao theo đợt",
        inStock: true,
        stockCount: 5,
        rating: 4.8,
        reviewsCount: 19,
        image: "Images/weapon-8.jpg",
        gallery: [
            "Images/weapon-8.jpg",
            "Images/weapon-8-thumb1.jpg",
            "Images/weapon-8-thumb2.jpg",
            "Images/weapon-8-thumb3.jpg"
        ],
        audioDemo: "Sounds/weapon-test-audio.mp3",
        videoDemo: "Videos/hero-combat-demo.mp4",
        shortDesc: "Tiêm kích không người lái phản lực tự hành AI, cất hạ cánh trên tàu sân bay trực thăng ngắn TCG Anadolu, trang bị tên lửa không đối không tầm xa.",
        specs: {
            "Khả năng cơ động": "Chịu quá tải lực G cao (Không bị giới hạn bởi thể chất phi công)",
            "Động cơ phản lực": "Ivchenko-Progress AI-322F có đốt tăng lực",
            "Khả năng tàng hình": "Thân khí động học góc cạnh tàng hình và cửa hút khí chữ S",
            "Khả năng cất cánh": "Tự động cất/hạ cánh trên tàu sân bay boong ngắn",
            "Hệ thống điều khiển": "Thuật toán AI tự hành không chiến BVR đối không",
            "Radar": "MURAD AESA đa kênh"
        },
        details: "Kızılelma định hình lại tương lai của không chiến khi kết hợp phản lực tốc độ cao, khả năng tàng hình và thuật toán không chiến tự động do AI điều phối mà không cần con người trực tiếp điều khiển.",
        featured: false,
        saleOff: false,
        latest: true,
        topRated: false,
        reviewList: [
            {
                author: "Trung tá Haluk Celik",
                unit: "Hải quân Tác chiến Viễn chinh",
                rating: 5,
                date: "18/01/2026",
                comment: "Tự động hạ cánh thành công trên đường băng lắc lư của tàu đổ bộ tấn công trong gió cấp 7."
            }
        ]
    },
    {
        id: 9,
        name: "Xe tăng Chủ lực KF51 Panther (Pháo 130mm & Drone HERO 120)",
        natoCode: "KF51 Panther Main Battle Tank",
        category: "Xe tăng Chủ lực (MBT)",
        categorySlug: "mbt",
        filterClass: "armor",
        price: 15500000,
        oldPrice: 17000000,
        discount: 9,
        origin: "Đức (Rheinmetall Landsysteme)",
        countryCode: "DE",
        weight: "59 tấn (Nhẹ hơn Leopard 2 và Abrams)",
        range: "Tầm hoạt động 500 km | Vận tốc 70 km/h",
        status: "Sẵn sàng bàn giao mẫu chiến đấu",
        inStock: true,
        stockCount: 8,
        rating: 5.0,
        reviewsCount: 36,
        image: "Images/weapon-9.jpg",
        gallery: [
            "Images/weapon-9.jpg",
            "Images/weapon-9-thumb1.jpg",
            "Images/weapon-9-thumb2.jpg",
            "Images/weapon-9-thumb3.jpg"
        ],
        audioDemo: "Sounds/weapon-test-audio.mp3",
        videoDemo: "Videos/hero-combat-demo.mp4",
        shortDesc: "Đột phá hỏa lực với pháo 130mm nạp tự động, tích hợp bệ phóng 4 Drone cảm tử HERO 120 và hệ thống phòng vệ chủ động chống đạn xuyên giáp APFSDS.",
        specs: {
            "Pháo chính": "Pháo nòng trơn Rheinmetall Rh-130 L/52 uy lực tăng 50%",
            "Hệ thống nạp đạn": "Bộ nạp đạn tự động 20 viên trong khoang tháp pháo",
            "Vũ khí phụ": "Súng máy đồng trục 12.7mm và trạm vũ khí điều khiển từ xa RCWS",
            "Tích hợp Drone": "Bệ phóng 4 đạn tuần kích cảm tử HERO 120 tiêu diệt mục tiêu 60km",
            "Hệ thống phòng vệ": "Hệ thống bảo vệ chủ động StrikeShield APS và TAPS",
            "Kiến trúc điện tử": "Chuẩn mở số hóa NATO NGVA kết nối dữ liệu chiến thuật toàn diện"
        },
        details: "KF51 Panther đại diện cho một bước nhảy vọt sau nhiều thập kỷ thống trị của pháo 120mm. Nòng pháo 130mm cung cấp động năng phá hủy vượt trội, đủ sức tiêu diệt mọi loại giáp tăng tiên tiến nhất thế giới ở cự ly trên 4km.",
        featured: true,
        saleOff: false,
        latest: true,
        topRated: true,
        reviewList: [
            {
                author: "Thiếu tá Hans Weber",
                unit: "Lữ đoàn Thiết giáp số 21 Panzer",
                rating: 5,
                date: "25/01/2026",
                comment: "Pháo 130mm bắn trúng bia thép dày 1200mm ở cự ly 3500m với độ chính xác tuyệt đối."
            }
        ]
    },
    {
        id: 10,
        name: "Xe tăng Chủ lực M1A2 Abrams SEPv4",
        natoCode: "M1A2 System Enhancement Package v4",
        category: "Xe tăng Chủ lực (MBT)",
        categorySlug: "mbt",
        filterClass: "armor",
        price: 14200000,
        oldPrice: 16000000,
        discount: 11,
        origin: "Hoa Kỳ (General Dynamics)",
        countryCode: "US",
        weight: "68.5 tấn (Giáp Uranium nghèo thế hệ 4)",
        range: "Tầm hoạt động 426 km | Tốc độ 67 km/h",
        status: "Sẵn sàng bàn giao theo hợp đồng",
        inStock: true,
        stockCount: 14,
        rating: 4.9,
        reviewsCount: 42,
        image: "Images/weapon-10.jpg",
        gallery: [
            "Images/weapon-10.jpg",
            "Images/weapon-10-thumb1.jpg",
            "Images/weapon-10-thumb2.jpg",
            "Images/weapon-10-thumb3.jpg"
        ],
        audioDemo: "Sounds/weapon-test-audio.mp3",
        videoDemo: "Videos/hero-combat-demo.mp4",
        shortDesc: "Cấu hình hiện đại nhất của Abrams với kính ngắm FLIR Gen 3, đạn pháo đa năng XM1147 và hệ thống phòng vệ chủ động Trophy APS đánh chặn tên lửa.",
        specs: {
            "Pháo chính": "Pháo nòng trơn M256 120mm L/44",
            "Hệ thống phòng vệ chủ động": "Trophy HV APS phát hiện và đánh chặn tên lửa chống tăng",
            "Quang học ngắm bắn": "FLIR hồng ngoại thế hệ 3 tích hợp đo xa laser màu an toàn mắt",
            "Đạn thông minh": "Đạn pháo nổ trên không đa năng XM1147 Advanced Multi-Purpose (AMP)",
            "Động cơ": "Tua bin khí Honeywell AGT1500 công suất 1,500 mã lực",
            "Cảm biến khí tượng": "Trạm cảm biến thời tiết đa thông số tự động hiệu chỉnh đường đạn"
        },
        details: "M1A2 SEPv4 tích hợp tất cả các bài học kinh nghiệm từ các cuộc chiến hiện đại. Đạn pháo đa năng XM1147 cho phép kíp xe chuyển đổi 4 chế độ nổ khác nhau chỉ bằng một nút bấm mà không cần thay đổi chủng loại đạn.",
        featured: false,
        saleOff: true,
        latest: false,
        topRated: true,
        reviewList: [
            {
                author: "Trung úy James Bradley",
                unit: "Trung đoàn Thiết kỵ số 3",
                rating: 5,
                date: "09/01/2026",
                comment: "Khả năng phát hiện mục tiêu ban đêm trong bão cát ở khoảng cách 6km rõ như ban ngày."
            }
        ]
    },
    {
        id: 11,
        name: "Xe tăng Chủ lực K2 Black Panther (Treo Thủy Khí Học)",
        natoCode: "K2 Black Panther MBT (Batch III)",
        category: "Xe tăng Chủ lực (MBT)",
        categorySlug: "mbt",
        filterClass: "armor",
        price: 11800000,
        oldPrice: 13000000,
        discount: 9,
        origin: "Hàn Quốc (Hyundai Rotem)",
        countryCode: "KR",
        weight: "55 tấn (Cơ động vượt trội trên địa hình đồi núi)",
        range: "Tầm hoạt động 450 km | Vận tốc 70 km/h",
        status: "Sẵn sàng xuất khẩu",
        inStock: true,
        stockCount: 16,
        rating: 4.8,
        reviewsCount: 30,
        image: "Images/weapon-11.jpg",
        gallery: [
            "Images/weapon-11.jpg",
            "Images/weapon-11-thumb1.jpg",
            "Images/weapon-11-thumb2.jpg",
            "Images/weapon-11-thumb3.jpg"
        ],
        audioDemo: "Sounds/weapon-test-audio.mp3",
        videoDemo: "Videos/hero-combat-demo.mp4",
        shortDesc: "Cỗ máy chiến đấu đồi núi tối tân với hệ thống treo thủy khí ISU có thể ngồi, quỳ, nghiêng tháp pháo và đạn pháo thông minh KSTAM tự tìm mục tiêu trên nóc nhà.",
        specs: {
            "Pháo chính": "Pháo nòng trơn 120mm L/55 tự động nạp đạn (15 phát/phút)",
            "Đạn tấn công đột nóc": "KSTAM-II (Bắn từ xa 8km, tự bung dù quét và lao xuống nóc xe tăng địch)",
            "Hệ thống treo": "In-arm Suspension Unit (ISU) nâng hạ gầm độc lập từng bánh",
            "Radar phát hiện mục tiêu": "Radar băng tần milimet khóa mục tiêu bay thấp như trực thăng",
            "Động cơ": "Động cơ diesel Doosan Infracore DV27K 1,500 mã lực",
            "Khả năng lội ngầm": "Vượt sông sâu tới 4.1 mét bằng ống thở ngầm"
        },
        details: "K2 Black Panther được thiết kế đặc biệt cho các cuộc đụng độ địa hình hiểm trở. Khả năng hạ thấp thân xe hoặc nghiêng ngửa pháo giúp K2 tận dụng tối đa các dốc đồi để ẩn nấp và tung đòn tấn công bất ngờ.",
        featured: false,
        saleOff: false,
        latest: false,
        topRated: true,
        reviewList: [
            {
                author: "Trung tá Kim Min-Soo",
                unit: "Lữ đoàn Thiết giáp Thủ đô",
                rating: 5,
                date: "15/12/2025",
                comment: "Tốc độ nạp đạn tự động 15 phát mỗi phút mang lại ưu thế hỏa lực áp đảo trong giao tranh cự ly gần."
            }
        ]
    },
    {
        id: 12,
        name: "Pháo Tự hành Bánh lốp CAESAR 8x8 MkII 155mm",
        natoCode: "CAESAR 8x8 Heavy Artillery System",
        category: "Thiết giáp & Pháo tự hành",
        categorySlug: "armored-artillery",
        filterClass: "armor",
        price: 5200000,
        oldPrice: 5800000,
        discount: 10,
        origin: "Pháp (KNDS France / Nexter)",
        countryCode: "FR",
        weight: "32 tấn (Khung gầm bánh lốp Tatra 8x8)",
        range: "Tầm bắn 40km (Đạn thường) / 55km (Đạn tăng tầm Excalibur)",
        status: "Sẵn sàng bàn giao",
        inStock: true,
        stockCount: 11,
        rating: 4.9,
        reviewsCount: 34,
        image: "Images/weapon-12.jpg",
        gallery: [
            "Images/weapon-12.jpg",
            "Images/weapon-12-thumb1.jpg",
            "Images/weapon-12-thumb2.jpg",
            "Images/weapon-12-thumb3.jpg"
        ],
        audioDemo: "Sounds/weapon-test-audio.mp3",
        videoDemo: "Videos/hero-combat-demo.mp4",
        shortDesc: "Vua cơ động pháo binh bánh lốp chuẩn NATO: Dừng xe, bắn 6 phát đạn trong 60 giây và rút đi trước khi quả đạn đầu tiên chạm đất.",
        specs: {
            "Cỡ nòng": "155mm / 52 Caliber chuẩn liên minh quân sự NATO",
            "Tốc độ bắn": "6 viên đạn trong vòng 60 giây với bộ nạp bán tự động",
            "Thời gian vào/ra trận địa": "Vào vị trí dưới 60 giây, thu hồi rút lui dưới 40 giây",
            "Khung gầm": "Bánh lốp Tatra 8x8 vượt địa hình bùn lầy xuất sắc",
            "Khả năng bắn đồng thời (MRSI)": "Tối đa 4 quả đạn rơi trúng cùng một mục tiêu cùng một giây",
            "Độ chính xác": "Tích hợp hệ thống dẫn đường quán tính ATLAS và GPS"
        },
        details: "CAESAR 8x8 là khắc tinh của pháo binh đối phương. Nhờ khả năng bắn loạt đạn với các góc nâng khác nhau (MRSI) để tất cả đạn rơi trúng mục tiêu cùng một thời điểm, CAESAR tạo ra vùng hủy diệt tức thì.",
        featured: false,
        saleOff: true,
        latest: true,
        topRated: false,
        reviewList: [
            {
                author: "Đại úy Pierre Dubois",
                unit: "Trung đoàn Pháo binh Thủy quân Lục chiến",
                rating: 5,
                date: "22/01/2026",
                comment: "Tốc độ phản công cực nhanh, cứu nguy cho các đơn vị bộ binh tiền tuyến an toàn tuyệt đối."
            }
        ]
    },
    {
        id: 13,
        name: "Súng trường Tấn công SIG Sauer XM7 (6.8x51mm NGSW)",
        natoCode: "XM7 NGSW Rifle (6.8x51mm Fury)",
        category: "Vũ khí Cá nhân Thế hệ mới (NGSW)",
        categorySlug: "infantry-ngsw",
        filterClass: "infantry-robot",
        price: 9500,
        oldPrice: 11000,
        discount: 14,
        origin: "Hoa Kỳ (SIG Sauer)",
        countryCode: "US",
        weight: "3.8 kg (Chưa kèm đạn) | Kèm kính ngắm XM157",
        range: "Tầm bắn hiệu quả 800 mét (Gấp đôi M4A1)",
        status: "Sẵn sàng bàn giao lô trang bị",
        inStock: true,
        stockCount: 150,
        rating: 5.0,
        reviewsCount: 88,
        image: "Images/weapon-13.jpg",
        gallery: [
            "Images/weapon-13.jpg",
            "Images/weapon-13-thumb1.jpg",
            "Images/weapon-13-thumb2.jpg",
            "Images/weapon-13-thumb3.jpg"
        ],
        audioDemo: "Sounds/weapon-test-audio.mp3",
        videoDemo: "Videos/hero-combat-demo.mp4",
        shortDesc: "Vũ khí bộ binh thế hệ mới của Quân đội Hoa Kỳ: Sử dụng đạn áp suất cao 6.8x51mm xuyên thủng mọi loại áo chống đạn hiện đại ở cự ly 600m.",
        specs: {
            "Cỡ đạn": "6.8x51mm (.277 SIG Fury) vỏ kim loại lai chịu áp suất 80,000 PSI",
            "Kính ngắm thông minh": "Vortex XM157 Fire Control tích hợp đo xa laser và máy tính đạn đạo",
            "Ống giảm thanh": "SLX Suppressor tiêu âm và triệt tiêu chớp lửa đầu nòng 98%",
            "Hộp tiếp đạn": "20 viên làm từ polymer chịu va đập",
            "Cơ cấu hoạt động": "Trích khí ngắn piston xoay khóa nòng",
            "Tầm bắn hiệu dụng": "600m - 800m chính xác từng phát bắn"
        },
        details: "XM7 thay thế khẩu M4 carbine huyền thoại sau gần 30 năm phục vụ. Kết hợp với kính ngắm điện toán Vortex XM157 có khả năng tự động tính toán gió, độ rơi đạn và đặt hồng tâm ảo, mọi phát bắn của người lính đều trở nên chuẩn xác như súng bắn tỉa.",
        featured: true,
        saleOff: true,
        latest: true,
        topRated: true,
        reviewList: [
            {
                author: "Trung sĩ Nhất Nathan Cole",
                unit: "Trung đoàn Biệt kích Ranger số 75",
                rating: 5,
                date: "30/01/2026",
                comment: "Uy lực đạn 6.8mm xuyên thủng tấm thép chống đạn Level IV ở khoảng cách 500 mét nhẹ nhàng."
            }
        ]
    },
    {
        id: 14,
        name: "Robot Chiến đấu Bốn chân Ghost Robotics Vision 60 Q-UGV",
        natoCode: "Vision 60 Q-UGV Armed Quadruped",
        category: "Robot Chiến đấu Tích hợp AI",
        categorySlug: "combat-robot",
        filterClass: "infantry-robot",
        price: 165000,
        oldPrice: 190000,
        discount: 13,
        origin: "Hoa Kỳ (Ghost Robotics / SWORD)",
        countryCode: "US",
        weight: "51 kg (Tải trọng chiến thuật 14 kg)",
        range: "Thời gian hoạt động 3.5 giờ | Vận tốc 3 m/s (11 km/h)",
        status: "Sẵn sàng cấu hình module nhiệm vụ",
        inStock: true,
        stockCount: 20,
        rating: 4.9,
        reviewsCount: 39,
        image: "Images/weapon-14.jpg",
        gallery: [
            "Images/weapon-14.jpg",
            "Images/weapon-14-thumb1.jpg",
            "Images/weapon-14-thumb2.jpg",
            "Images/weapon-14-thumb3.jpg"
        ],
        audioDemo: "Sounds/weapon-test-audio.mp3",
        videoDemo: "Videos/hero-combat-demo.mp4",
        shortDesc: "Chó robot tác chiến mặt đất tích hợp súng bắn tỉa 6.5mm Creedmoor hoặc súng máy, tự hành vượt mọi địa hình cát, bùn, cầu thang và chướng ngại vật ngập nước.",
        specs: {
            "Chuẩn chống nước và bụi": "IP67 hoàn toàn ngâm nước và hoạt động trong bùn",
            "Module vũ khí mang theo": "SWORD International SPUR (Súng trường bắn tỉa 6.5mm Creedmoor)",
            "Hệ thống thị giác": "360 độ LiDAR, camera nhiệt Flir Boson, camera độ phân giải cao",
            "Trí tuệ nhân tạo": "AI tự hành tìm đường, bám theo đội hình và nhận diện mục tiêu",
            "Khả năng phục hồi": "Tự đứng dậy ngay lập tức khi bị lật hoặc ngã từ trên cao",
            "Thời lượng pin": "Di chuyển liên tục tới 10 km sau một lần sạc"
        },
        details: "Vision 60 định nghĩa lại nhiệm vụ trinh sát nguy hiểm và đột kích đô thị. Robot có thể đi đầu vào các boongke ngầm hoặc tòa nhà bị đối phương kiểm soát, truyền hình ảnh nhiệt 360 độ về đội đặc nhiệm và tiêu diệt mục tiêu khi nhận lệnh.",
        featured: true,
        saleOff: false,
        latest: true,
        topRated: true,
        reviewList: [
            {
                author: "Thiếu tá Ryan Cooper",
                unit: "Lực lượng Tác chiến Đặc biệt Đô thị",
                rating: 5,
                date: "19/01/2026",
                comment: "Vượt qua cầu thang đổ nát và chướng ngại vật trơn trượt mà không gây ra tiếng động lớn."
            }
        ]
    },
    {
        id: 15,
        name: "Súng Chế áp Điện tử Bắn hạ UAV DroneGun Tactical",
        natoCode: "DroneGun Tactical C-UAS Jammer",
        category: "Tác chiến Điện tử & Vũ khí Laser",
        categorySlug: "electronic-warfare",
        filterClass: "infantry-robot",
        price: 45000,
        oldPrice: 52000,
        discount: 13,
        origin: "Úc (DroneShield)",
        countryCode: "AU",
        weight: "7.3 kg (Thiết kế dạng súng báng vác vai cơ động)",
        range: "Bán kính áp chế 2.0 km (Cắt đứt tín hiệu tức thì)",
        status: "Sẵn sàng bàn giao",
        inStock: true,
        stockCount: 40,
        rating: 4.8,
        reviewsCount: 46,
        image: "Images/weapon-15.jpg",
        gallery: [
            "Images/weapon-15.jpg",
            "Images/weapon-15-thumb1.jpg",
            "Images/weapon-15-thumb2.jpg",
            "Images/weapon-15-thumb3.jpg"
        ],
        audioDemo: "Sounds/weapon-test-audio.mp3",
        videoDemo: "Videos/hero-combat-demo.mp4",
        shortDesc: "Vũ khí chế áp điện tử cầm tay phát chùm sóng đa tần gây nhiễu, buộc UAV hạ cánh hoặc quay đầu về căn cứ phóng mà không làm nổ thiết bị.",
        specs: {
            "Dải tần áp chế": "Băng tần 433MHz, 915MHz, 2.4GHz, 5.8GHz và toàn dải GPS/GLONASS/BeiDou",
            "Cơ chế tác động": "Cắt đứt tín hiệu điều khiển và truyền video về trạm chỉ huy của đối phương",
            "Hành vi mục tiêu": "Ép UAV thực hiện hạ cánh thẳng đứng an toàn hoặc kích hoạt Return-to-Home",
            "Thời lượng pin": "Hơn 2 giờ phát sóng áp chế liên tục",
            "Thao tác vận hành": "Giao diện ngắm bắn trực giác như một khẩu súng bộ binh",
            "Độ an toàn": "Không phát sinh mảnh vỡ nổ nguy hiểm cho dân thường xung quanh"
        },
        details: "DroneGun Tactical là giải pháp phòng thủ hiệu quả hàng đầu để bảo vệ các đoàn xe yếu nhân, căn cứ tiền phương và sự kiện quốc gia khỏi sự tấn công của các loại UAV mang chất nổ thương mại.",
        featured: false,
        saleOff: true,
        latest: false,
        topRated: false,
        reviewList: [
            {
                author: "Trung úy Lucas Scott",
                unit: "Đội Bảo vệ Yếu nhân Căn cứ",
                rating: 5,
                date: "03/01/2026",
                comment: "Ép hạ cánh 4 drone do thám tiếp cận vành đai căn cứ quân sự từ cự ly 1.8km."
            }
        ]
    },
    {
        id: 16,
        name: "Kính Nhìn đêm 4 Ống Quang ảnh nhiệt L3Harris GPNVG-18",
        natoCode: "GPNVG-18 Ground Panoramic Night Vision Goggle",
        category: "Kính Nhìn đêm & Quang ảnh nhiệt",
        categorySlug: "night-vision",
        filterClass: "infantry-robot",
        price: 42000,
        oldPrice: 48000,
        discount: 12,
        origin: "Hoa Kỳ (L3Harris Technologies)",
        countryCode: "US",
        weight: "765 g (Gắn mũ bảo hộ tác chiến)",
        range: "Góc nhìn toàn cảnh 97 độ (Gấp 2.5 lần kính nhìn đêm thông thường)",
        status: "Sẵn sàng bàn giao cho lực lượng đặc nhiệm",
        inStock: true,
        stockCount: 25,
        rating: 5.0,
        reviewsCount: 63,
        image: "Images/weapon-16.jpg",
        gallery: [
            "Images/weapon-16.jpg",
            "Images/weapon-16-thumb1.jpg",
            "Images/weapon-16-thumb2.jpg",
            "Images/weapon-16-thumb3.jpg"
        ],
        audioDemo: "Sounds/weapon-test-audio.mp3",
        videoDemo: "Videos/hero-combat-demo.mp4",
        shortDesc: "Hệ thống kính nhìn đêm toàn cảnh 4 ống kính phosphor trắng Gen 3 huyền thoại của lực lượng đặc nhiệm Tier 1 (DEVGRU / Delta Force).",
        specs: {
            "Trường nhìn (FOV)": "Toàn cảnh 97 độ (Xóa bỏ hoàn toàn hiệu ứng nhìn qua ống hút)",
            "Ống tăng sáng": "4 ống Gen 3 White Phosphor (Chất lượng ảnh chân thực hơn phosphor xanh)",
            "Nguồn cấp năng lượng": "Hộp pin rời 4 pin CR123A kiêm đối trọng phía sau mũ cối",
            "Thời gian hoạt động": "Lên tới 30 giờ liên tục trong bóng tối tuyệt đối",
            "Độ phân giải": "64 - 72 lp/mm độ sắc nét quang học tuyệt đối",
            "Tích hợp": "Module ảnh nhiệt gắn ngoài COTI hiển thị chồng viền nhiệt"
        },
        details: "GPNVG-18 loại bỏ điểm mù lớn nhất của người lính khi tác chiến ban đêm. Với góc nhìn 97 độ gần bằng trường nhìn tự nhiên của mắt người, lính đặc nhiệm có thể dọn dẹp các góc phòng mà không cần quay đầu liên tục.",
        featured: false,
        saleOff: false,
        latest: true,
        topRated: true,
        reviewList: [
            {
                author: "Trung tá Sean O'Connor",
                unit: "Lực lượng Đặc nhiệm SEAL Team 6",
                rating: 5,
                date: "17/01/2026",
                comment: "Góc nhìn 97 độ mang lại lợi thế sống còn khi đột kích phòng kín trong đêm đen mù mịt."
            }
        ]
    },
    {
        id: 17,
        name: "Oanh tạc cơ Tàng hình Chiến lược B-21 Raider",
        natoCode: "Northrop Grumman B-21 Raider Stealth",
        category: "Tiêm kích Tàng hình Thế hệ 5",
        categorySlug: "stealth-fighter",
        filterClass: "uav-air",
        price: 750000000,
        oldPrice: 790000000,
        discount: 5,
        origin: "Hoa Kỳ (Northrop Grumman)",
        countryCode: "US",
        weight: "Máy bay ném bom chiến lược tàng hình thế hệ 6",
        range: "Tầm bay toàn cầu liên lục địa có tiếp dầu trên không",
        status: "Ký hợp đồng quốc phòng tối mật",
        inStock: false,
        stockCount: 2,
        rating: 5.0,
        reviewsCount: 15,
        image: "Images/weapon-17.jpg",
        gallery: [
            "Images/weapon-17.jpg",
            "Images/weapon-17-thumb1.jpg",
            "Images/weapon-17-thumb2.jpg",
            "Images/weapon-17-thumb3.jpg"
        ],
        audioDemo: "Sounds/weapon-test-audio.mp3",
        videoDemo: "Videos/hero-combat-demo.mp4",
        shortDesc: "Máy bay ném bom chiến lược tàng hình thế hệ thứ 6 đầu tiên trên thế giới, có khả năng đột nhập qua các mạng lưới radar phòng không dày đặc nhất.",
        specs: {
            "Thế hệ công nghệ": "Thế hệ thứ 6 (Next Generation Stealth Bomber)",
            "Khả năng mang vũ khí": "Vũ khí hạt nhân chiến lược và đạn thông minh quy ước chính xác cao",
            "Chế độ bay": "Tùy chọn có người lái hoặc hoạt động hoàn toàn tự hành không người lái",
            "Kiến trúc hệ thống mở": "Cho phép nâng cấp phần mềm liên tục theo điện toán đám mây",
            "Khả năng tàng hình": "Vật liệu hấp thụ sóng radar băng tần rộng thế hệ mới nhất",
            "Hợp đồng chiến lược": "Cung cấp độc quyền theo hiệp định liên minh quốc phòng"
        },
        details: "B-21 Raider được thiết kế để giữ vai trò xương sống trong năng lực răn đe chiến lược của thế kỷ 21, có thể thâm nhập sâu vào không phận đối phương mà không bị phát hiện.",
        featured: false,
        saleOff: false,
        latest: true,
        topRated: true,
        reviewList: [
            {
                author: "Đại tướng Raymond Cole",
                unit: "Bộ Chỉ huy Tấn công Toàn cầu",
                rating: 5,
                date: "01/02/2026",
                comment: "Kỷ nguyên mới của năng lực răn đe tầm xa. Khả năng vô hình trước mọi hệ thống radar cảnh giới."
            }
        ]
    },
    {
        id: 18,
        name: "Khu trục hạm Tên lửa Dẫn đường Type 055",
        natoCode: "Type 055 Guided Missile Destroyer (Renhai-class)",
        category: "Tên lửa Chiến thuật & Pháo phản lực",
        categorySlug: "missiles",
        filterClass: "air-defense",
        price: 920000000,
        oldPrice: 980000000,
        discount: 6,
        origin: "Trung Quốc (CSSC Jiangnan)",
        countryCode: "CN",
        weight: "13,000 tấn (Lượng giãn nước toàn tải)",
        range: "Tầm hoạt động 5,000 hải lý | Tốc độ 30 hải lý/giờ",
        status: "Đóng mới theo đơn đặt hàng hải quân",
        inStock: false,
        stockCount: 3,
        rating: 4.8,
        reviewsCount: 18,
        image: "Images/weapon-18.jpg",
        gallery: [
            "Images/weapon-18.jpg",
            "Images/weapon-18-thumb1.jpg",
            "Images/weapon-18-thumb2.jpg",
            "Images/weapon-18-thumb3.jpg"
        ],
        audioDemo: "Sounds/weapon-test-audio.mp3",
        videoDemo: "Videos/hero-combat-demo.mp4",
        shortDesc: "Tuần dương hạm tên lửa tàng hình hạng nặng mang 112 ống phóng thẳng đứng VLS, trang bị radar băng tần kép và tên lửa chống hạm siêu thanh YJ-21.",
        specs: {
            "Hệ thống phóng thẳng đứng (VLS)": "112 ống phóng kích thước lớn tương thích nhiều loại tên lửa",
            "Hệ thống Radar": "Radar mảng pha chủ động băng tần kép Dual-Band AESA Type 346B",
            "Vũ khí chống hạm": "Tên lửa đạn đạo chống hạm siêu vượt âm YJ-21 (Tầm bắn 1,500km)",
            "Vũ khí phòng không": "Tên lửa tầm xa HHQ-9B và tên lửa đánh chặn tầm trung",
            "Vũ khí chống ngầm": "Hệ thống sonar thân tàu kết hợp sonar mảng kéo thụ động và ngư lôi Yu-8",
            "Hệ thống đẩy": "Hệ thống tuabin khí kết hợp COGAG công suất 112 MW"
        },
        details: "Type 055 được xếp vào lớp tàu tuần dương tên lửa hạng nặng nhờ hỏa lực áp đảo 112 ống phóng và khả năng chỉ huy tác chiến cụm tàu sân bay viễn dương.",
        featured: false,
        saleOff: false,
        latest: false,
        topRated: true,
        reviewList: [
            {
                author: "Đô đốc Chen Wei",
                unit: "Hạm đội Tác chiến Biển khơi",
                rating: 5,
                date: "27/01/2026",
                comment: "Mạng lưới radar băng tần kép cung cấp ô dù phòng không tầm xa tuyệt đối cho toàn bộ hạm đội."
            }
        ]
    }
];

const BLOG_DATA = [
    {
        id: 1,
        title: "Chiến Lược Tác Chiến UAV Cảm Tử: Tương Lai Đột Phá Phòng Thủ Đa Tầng 2026",
        slug: "uav-kamikaze-tactics-2026",
        category: "Học thuyết Quân sự",
        author: "Thiếu tá Trần Quang Hưng",
        authorRole: "Chuyên viên Viện Nghiên cứu Chiến lược Quốc phòng",
        date: "26 Tháng 10, 2026",
        commentsCount: 18,
        image: "Images/blog-1.jpg",
        tags: ["UAV", "Drone AI", "Phòng không", "Tác chiến hiện đại"],
        summary: "Sự bùng nổ của đạn tuần kích và bầy đàn drone giá rẻ đang định hình lại toàn bộ học thuyết tác chiến mặt đất và đòi hỏi sự thay đổi căn bản trong hệ thống phòng không lục quân.",
        content: `
            <p>Trong các cuộc xung đột vũ trang những năm gần đây, sự xuất hiện ồ ạt của các loại thiết bị bay không người lái (UAV) và đạn tuần kích cảm tử đã chứng minh rằng học thuyết quân sự truyền thống đang đối mặt với thách thức chưa từng có.</p>
            <h4>1. Nghịch lý chi phí và bài toán đánh chặn bất đối xứng</h4>
            <p>Một chiếc drone tự sát cảm tử thương mại hoặc lắp ráp có chi phí chế tạo chỉ dao động từ vài trăm đến vài nghìn USD, nhưng nếu sử dụng tên lửa phòng không truyền thống như Patriot hay Iris-T để bắn hạ, chi phí mỗi lần khai hỏa có thể lên tới 1 - 3 triệu USD. Đây là một sự tiêu hao kinh tế không thể duy trì dài hạn.</p>
            <blockquote>
                "Bên nào giải quyết được bài toán chi phí đánh chặn trên một đơn vị mục tiêu bay, bên đó sẽ làm chủ bầu trời trong chiến tranh tiêu hao hiện đại."
            </blockquote>
            <h4>2. Giải pháp tích hợp: Tác chiến Điện tử kết hợp Pháo bắn nhanh và Laser</h4>
            <p>Các cường quốc quân sự đang chuyển dịch sang mô hình phòng thủ ba lớp: sử dụng tác chiến điện tử làm gián đoạn điều khiển từ cự ly xa, vũ khí năng lượng định hướng laser (như Iron Beam) để thiêu đốt cảm biến ở cự ly trung bình, và pháo tự động bắn đạn phân mảnh lập trình điện tử ở cự ly gần.</p>
            <h4>3. Kết luận chiến thuật</h4>
            <p>Hệ sinh thái khí tài của AEGIS Tactical & Defense cung cấp trọn bộ giải pháp phòng không phân tầng từ cảm biến radar băng tần siêu cao đến các trạm chế áp drone chuyên dụng, bảo vệ an toàn tuyệt đối cho các căn cứ trọng yếu.</p>
        `
    },
    {
        id: 2,
        title: "Kỷ Nguyên Vũ Khí Năng Lượng Laser: Đánh Chặn Siêu Vượt Âm Chi Phí $3.50 Mỗi Phát Bắn",
        slug: "laser-weapon-iron-beam-era",
        category: "Công nghệ Tối tân",
        author: "TS. Nguyễn Hoàng Nam",
        authorRole: "Kỹ sư Trưởng Hệ thống Quang điện tử",
        date: "20 Tháng 10, 2026",
        commentsCount: 24,
        image: "Images/blog-2.jpg",
        tags: ["Laser 100kW", "Iron Beam", "Vũ khí tương lai", "Năng lượng định hướng"],
        summary: "Hệ thống vũ khí năng lượng định hướng công suất 100kW đã chính thức rời khỏi phòng thí nghiệm để bước vào thực chiến, mở ra tương lai phòng không không giới hạn số lượng đạn.",
        content: `
            <p>Sự thành công của tổ hợp Iron Beam 100kW đánh dấu bước ngoặt lịch sử: lần đầu tiên chùm tia laser quang học công suất cao được tích hợp hoàn chỉnh vào mạng lưới cảnh giới phòng không cấp chiến thuật.</p>
            <h4>Tốc độ ánh sáng - Không thời gian trễ</h4>
            <p>Khác với đạn pháo hay tên lửa vốn cần từ vài giây đến hàng chục giây để bay tới mục tiêu, chùm tia laser di chuyển với vận tốc ánh sáng (300,000 km/s). Điều này đồng nghĩa với việc đối phương hoàn toàn không có khả năng cơ động né tránh khi đã bị bám bắt quang học.</p>
            <h4>Khắc phục yếu tố thời tiết và tán xạ khí quyển</h4>
            <p>Các thế hệ laser mới nhất sử dụng công nghệ gương biến dạng thích ứng (Adaptive Optics) liên tục hiệu chỉnh biên độ chùm tia theo mật độ không khí và nhiệt độ, đảm bảo năng lượng tập trung đủ để đốt thủng vỏ hợp kim titan của tên lửa trong vòng 3 giây.</p>
        `
    },
    {
        id: 3,
        title: "Robot Chiến Đấu Tích Hợp AI: Khi Chó Robot và UGV Dẫn Đầu Đột Kích Đô Thị",
        slug: "combat-robot-ai-ground-warfare",
        category: "Trí tuệ Nhân tạo & Robot",
        author: "Thượng tá Lê Minh Đức",
        authorRole: "Chỉ huy Trưởng Trung tâm Huấn luyện Đột kích",
        date: "15 Tháng 10, 2026",
        commentsCount: 15,
        image: "Images/blog-3.jpg",
        tags: ["Vision 60", "AI Robotics", "Chiến tranh Đô thị", "Đặc nhiệm"],
        summary: "Việc đưa robot bốn chân vũ trang và xe tự hành UGV vào tuyến đầu dọn dẹp công sự đang giảm thiểu tới 80% thương vong cho lính đặc nhiệm trong môi trường đô thị ngột ngạt.",
        content: `
            <p>Tác chiến trong đô thị (CQB / MOUT) luôn là cơn ác mộng lớn nhất đối với lực lượng bộ binh do mật độ điểm mù dày đặc và nguy cơ phục kích từ mọi hướng. Sự xuất hiện của robot bốn chân Ghost Vision 60 mang vũ khí đã thay đổi cuộc chơi.</p>
            <h4>Cặp mắt tiên phong trong vùng lửa đạn</h4>
            <p>Robot có khả năng di chuyển linh hoạt trên cầu thang đổ nát, chui qua các lỗ hổng hẹp và sử dụng cảm biến ảnh nhiệt để phát hiện thân nhiệt đối phương ẩn nấp sau tường gạch mà không cần con người mạo hiểm bước vào.</p>
            <h4>Đạo đức tác chiến và quyền quyết định khai hỏa</h4>
            <p>Tất cả các dòng UGV do AEGIS phân phối đều tuân thủ nguyên tắc nghiêm ngặt 'Human-in-the-loop': AI chịu trách nhiệm nhận diện và theo vết mục tiêu, nhưng quyền bóp cò khai hỏa luôn thuộc về người chỉ huy qua đường truyền mã hóa quân sự.</p>
        `
    }
];

// Helper Functions
function getProductById(id) {
    const numId = parseInt(id, 10);
    return PRODUCTS_DATA.find(p => p.id === numId) || PRODUCTS_DATA[0];
}

function getRelatedProducts(productId, limit = 4) {
    const current = getProductById(productId);
    return PRODUCTS_DATA
        .filter(p => p.id !== current.id && (p.categorySlug === current.categorySlug || p.filterClass === current.filterClass))
        .slice(0, limit);
}

function getFeaturedProducts() {
    return PRODUCTS_DATA.filter(p => p.featured);
}

function getLatestProducts(limit = 6) {
    return PRODUCTS_DATA.filter(p => p.latest).slice(0, limit);
}

function getTopRatedProducts(limit = 6) {
    return PRODUCTS_DATA.filter(p => p.topRated).slice(0, limit);
}

function getSaleOffProducts() {
    return PRODUCTS_DATA.filter(p => p.saleOff);
}

function formatCurrency(amount) {
    return '$' + Number(amount).toLocaleString('en-US');
}

// Fallback Canvas / SVG Generator
function generateFallbackImage(product) {
    const code = product.natoCode || product.name;
    const cat = product.category || 'AEGIS DEFENSE';
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 320" width="500" height="320"><rect width="500" height="320" fill="%230f172a"/><circle cx="250" cy="150" r="80" fill="none" stroke="%23d97706" stroke-width="2" stroke-dasharray="6 4"/><text x="250" y="150" font-family="monospace" font-size="16" fill="%23f8fafc" text-anchor="middle">${encodeURIComponent(code)}</text><text x="250" y="180" font-family="sans-serif" font-size="12" fill="%2394a3b8" text-anchor="middle">${encodeURIComponent(cat)}</text></svg>`;
}
