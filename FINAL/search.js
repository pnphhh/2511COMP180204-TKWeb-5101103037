/* === BỘ CHẠY TÌM KIẾM CỦA WEBSITE === */

// Chạy khi trang search-results.html tải xong
document.addEventListener("DOMContentLoaded", function() {

    // 1. TẠO "DATABASE" NỘI DUNG WEBSITE
    // BẠN PHẢI TỰ BỔ SUNG NỘI DUNG CỦA BẠN VÀO ĐÂY
    const site_content = [
        {
            title: "Trang Chủ - Giới Thiệu Chung",
            url: "index.html",
            content: "Bảo tàng sở hữu hơn 40.000 hiện vật sưu tập độc đáo quý giá lịch sử văn hóa Việt Nam"
        },
        {
            title: "Không Gian Trưng Bày: Nét cũ dấu xưa",
            url: "index.html",
            content: "Trưng bày Nét cũ dấu xưa thăng long hà nội linh thiêng hào hoa tiền giấy hoa sen"
        },
        {
            title: "Không Gian Trưng Bày: Thăng Long - Hà Nội linh thiêng hào hoa",
            url: "index.html",
            content: "Trưng bày Nét cũ dấu xưa thăng long hà nội linh thiêng hào hoa tiền giấy hoa sen"
        },
        {
            title: "Không Gian Trưng Bày: Tiền giấy Việt Nam qua các thời kỳ",
            url: "index.html",
            content: "Trưng bày Nét cũ dấu xưa thăng long hà nội linh thiêng hào hoa tiền giấy hoa sen"
        },
        {
            title: "Không Gian Trưng Bày: Hoa sen trong nghệ thuật trang trí Việt Nam",
            url: "index.html",
            content: "Trưng bày Nét cũ dấu xưa thăng long hà nội linh thiêng hào hoa tiền giấy hoa sen"
        },
        {
            title: "Các bộ sưu tập nổi bật",
            url: "index.html",
            content: "Khám phá di sản văn hóa phong phú của Việt Nam qua các bộ sưu tập hiện vật độc đáo đang được lưu giữ và trưng bày tại bảo tàng."
        },
        {
            title: "Bảo vật quốc gia",
            url: "index.html",
            content: "Nghệ thuật Phật giáo và Hindu giáo của nền Văn hóa Phù Nam - Óc Eo (thế kỷ 1-7) và văn hóa Champa (thế kỷ 2-17) phát triển từ xa xưa ở Nam bộ và Trung bộ Việt Nam."
        },
        {
            title: "Cổ khí Minh Mạng",
            url: "index.html",
            content: "33 loại đồ đựng bằng đồng phỏng theo các loại đồ đựng thời Tam Đại và được dùng để tế lễ, trên đó khắc những bài minh văn chữ Hán lấy ý từ những tác phẩm kinh điển của Nho giáo."
        },
        {
            title: "Video Nổi Bật và Lịch Sự Kiện",
            url: "index.html",
            content: "Video youtube lịch sự kiện nét cọ trên gốm di sản văn hóa óc eo đồ chơi dân gian"
        },
        {
            title: "Thông Tin Giờ Mở Cửa và Địa Chỉ",
            url: "index.html",
            content: "Giờ mở cửa thứ ba chủ nhật địa chỉ số 2 nguyễn bỉnh khiêm phường bến nghé quận 1"
        },
        {
            title: "Quy trình tham quan",
            url: "index.html",
            content: "Giờ mở cửa thứ ba chủ nhật địa chỉ số 2 nguyễn bỉnh khiêm phường bến nghé quận 1"
        },
        {
            title: "Minigame săn quà",
            url: "minigame.html",
            content: "Trả lời đúng 5 câu hỏi về lịch sử Việt Nam để nhận phần quà nhé!"
        },
        {
            title: "Đăng Ký Tham Quan Bảo Tàng",
            url: "dangki.html",
            content: "Đăng Ký Tham Quan Bảo Tàng"
        },
    ];

    // 2. LẤY TỪ KHÓA TỪ URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('q'); // Lấy giá trị của 'q' (vd: ?q=gốm)

    // Lấy các phần tử trên trang
    const resultsContainer = document.getElementById('results-container');
    const searchTitle = document.getElementById('search-title');

    if (searchTerm) {
        // Cập nhật tiêu đề trang
        searchTitle.textContent = `Kết quả tìm kiếm cho: "${searchTerm}"`;
        
        // Chuẩn hóa từ khóa (viết thường, bỏ dấu)
        const normalizedSearchTerm = searchTerm.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        // 3. LỌC "DATABASE"
        const results = site_content.filter(item => {
            // Chuẩn hóa nội dung trong database
            const normalizedTitle = item.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const normalizedContent = item.content.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

            // Kiểm tra xem từ khóa có trong tiêu đề hoặc nội dung không
            return normalizedTitle.includes(normalizedSearchTerm) || 
                   normalizedContent.includes(normalizedSearchTerm);
        });

        // 4. HIỂN THỊ KẾT QUẢ RA HTML
        if (results.length > 0) {
            results.forEach(item => {
                const resultElement = document.createElement('div');
                resultElement.className = 'search-result-item mb-4';
                
                // Tạo HTML cho mỗi kết quả
                // Lấy 150 ký tự đầu của content làm mô tả
                const description = item.content.substring(0, 150) + "..."; 

                resultElement.innerHTML = `
                    <h4><a href="${item.url}">${item.title}</a></h4>
                    <p>${description}</p> 
                `; 
                
                resultsContainer.appendChild(resultElement);
            });
        } else {
            // Không tìm thấy
            resultsContainer.innerHTML = "<p>Không tìm thấy kết quả nào phù hợp.</p>";
        }
    } else {
        // Không có từ khóa
        searchTitle.textContent = "Vui lòng nhập từ khóa để tìm kiếm";
    }
});