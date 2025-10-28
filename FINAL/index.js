// LẮNG NGHE SỰ KIỆN KHI CUỘN TRANG
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // Lấy thẻ header
    var header = document.querySelector(".site-header");
    
    // Đặt mốc cuộn (ví dụ: 50px từ lề trên)
    var scrollThreshold = 50; 

    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
        // Khi cuộn xuống quá mốc, thêm class 'scrolled'
        header.classList.add("scrolled");
    } else {
        // Khi ở trên mốc, xóa class 'scrolled'
        header.classList.remove("scrolled");
    }
}


document.addEventListener("DOMContentLoaded", function() {
    // HIỆU ỨNG HIỆN RA NỘI DUNG KHI CUỘN
    const elementsToFadeIn = document.querySelectorAll(".fade-in-scroll, .slide-up-on-scroll");
    const observerOptions = {
        root: null, 
        rootMargin: "0px",
        threshold: 0.1 // Kích hoạt khi 10% phần tử lọt vào màn hình
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // MỚI: Kiểm tra cả khi đi vào và đi ra
            if (entry.isIntersecting) {
                // Khi đi vào: Thêm class
                entry.target.classList.add("is-visible");
            } else {
                // Khi đi ra: Xóa class để reset hiệu ứng
                entry.target.classList.remove("is-visible");
            }
        });
    }, observerOptions);

    // Bắt đầu theo dõi tất cả các phần tử
    elementsToFadeIn.forEach(el => {
        observer.observe(el);
    });

    // --- TOÀN BỘ CODE TÌM KIẾM ĐƯỢC GỘP LẠI ---
    const searchToggle = document.getElementById('search-toggle');
    const searchForm = document.getElementById('header-search-form');

    // Chỉ chạy code nếu các phần tử này tồn tại trên trang
    if (searchToggle && searchForm) {
        
        // Chỉ cần khai báo 1 lần
        const searchInput = searchForm.querySelector('input'); 
        
        // 1. Code BẬT/TẮT thanh tìm kiếm
        searchToggle.addEventListener('click', function(e) {
            e.preventDefault(); // Ngăn link '#' nhảy trang
            // Bật/ tắt thanh tìm kiếm
            searchForm.classList.toggle('is-visible');
            // Tự động focus vào ô input khi hiện
            if (searchForm.classList.contains('is-visible')) {
                searchInput.focus();
            }
        });

        // 2. Code ĐÓNG KHI CLICK RA NGOÀI
        document.addEventListener('click', function(e) {
            // Kiểm tra xem click có nằm ngoài form VÀ ngoài nút toggle không
            if (!searchForm.contains(e.target) && !searchToggle.contains(e.target)) {
                if (searchForm.classList.contains('is-visible')) {
                    searchForm.classList.remove('is-visible');
                }
            }
        });

        // 3. Code CHỨC NĂNG TÌM KIẾM (ĐÃ DI CHUYỂN VÀO ĐÂY)
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Ngăn form gửi đi theo cách truyền thống
            
            // Lấy từ khóa người dùng gõ
            const searchTerm = searchInput.value.trim(); // .trim() để bỏ khoảng trắng thừa
            
            if (searchTerm) {
                // Chuyển hướng sang trang kết quả
                window.location.href = 'search-results.html?q=' + encodeURIComponent(searchTerm);
            }
        });
    }
});