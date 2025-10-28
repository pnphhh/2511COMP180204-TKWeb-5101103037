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
     //Form đăng kí
    const form = document.getElementById('registration-form');
    if (!form) return; 

    let currentStep = 1;
    const steps = document.querySelectorAll('.step');

    const totalSteps = steps.length;

    // Khai báo các hằng số giá
    const TICKET_PRICE = 30000;
    const GUIDE_FEE = 300000;
    const SOUVENIR_PRICES = {
        pen: 30000,
        postcard: 20000,
        keychain: 20000
    };
    // Khai báo biến Modal và các phần tử liên quan
    const paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
    const qrSection = document.getElementById('qr-code-section');
    const successSection = document.getElementById('success-section');
    const confirmPaymentBtn = document.getElementById('confirm-payment-btn');

    // Hàm chuyển bước
    function updateStepUI() {
        steps.forEach((step, index) => {
            step.classList.remove('active');
            if (index + 1 === currentStep) {
                step.classList.add('active');
            }
        });
    }

    //Hàm validation cho từng bước
    function validateStep(step) {
        if (step === 1) {
            return true;
        }

        if (step === 2) {
            const tourType = document.querySelector('input[name="tourType"]:checked').value;
            const fullName = document.getElementById('fullName').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const visitDate = document.getElementById('visitDate').value;
            const numGuests = parseInt(document.getElementById('numGuests').value);
            
            let isValid = true;

            if (!fullName || !phone || !email || !visitDate || isNaN(numGuests) || numGuests < 1) {
                alert('Vui lòng điền đầy đủ và chính xác thông tin bắt buộc.');
                isValid = false;
            } else if (tourType === 'individual' && numGuests >= 10) {
                alert('Khách cá nhân/gia đình phải đăng ký dưới 10 người.');
                isValid = false;
            } else if (tourType === 'group' && numGuests < 10) {
                alert('Khách đoàn/tổ chức phải đăng ký từ 10 người trở lên.');
                isValid = false;
            }
            //Kiểm tra email và sdt
            const phoneRegex = /^[0-9]{10,12}$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (isValid && !phoneRegex.test(phone)) {
                alert('Số điện thoại không hợp lệ.');
                isValid = false;
            }

            if (isValid && !emailRegex.test(email)) {
                alert('Email không hợp lệ.');
                isValid = false;
            }

            return isValid;
        }

        if (step === 3) {
            // Bước 3: Luôn hợp lệ, các trường là tùy chọn
            return true;
        }

        return true;
    }

    // Hàm tính tổng tiền vé và dịch vụ
    function calculateTotal() {
        const tourType = document.querySelector('input[name="tourType"]:checked').value;
        const numGuests = parseInt(document.getElementById('numGuests').value) || 0;
        let totalTicketPrice = 0;
        let guideFee = 0;
        let souvenirFee = 0;
        let discount = 0;
        if (tourType === 'individual') {
            const adultCount = parseInt(document.getElementById('adultCount').value) || 0;
            const discountCount = parseInt(document.getElementById('discountCount').value) || 0;
            const freeCount = parseInt(document.getElementById('freeCount').value) || 0;

            // Cập nhật tổng số khách (tự động tính tổng)
            const totalGuests = adultCount + discountCount + freeCount;
            document.getElementById('numGuests').value = totalGuests;

            // Tính tiền từng loại
            const adultPrice = adultCount * TICKET_PRICE;
            const discountPrice = discountCount * (TICKET_PRICE * 0.5);
            const freePrice = freeCount * 0;

            totalTicketPrice = adultPrice + discountPrice + freePrice;
        } else if (tourType === 'group') {
            let basePrice = numGuests * TICKET_PRICE;
            totalTicketPrice = basePrice;
            
            const discountGroups = Math.floor(numGuests / 30);
            if (numGuests >= 10) { 
                discount = basePrice * 0.15; // Chiết khấu 15% tổng tiền vé
                totalTicketPrice -= discount;
            }
        }

        if (document.getElementById('guideService').checked) {
            guideFee = GUIDE_FEE;
        }

        if (document.getElementById('souvenirOption').checked) {
            const penQty = parseInt(document.getElementById('souvenirPen').value) || 0;
            const postcardQty = parseInt(document.getElementById('souvenirPostcard').value) || 0;
            const keychainQty = parseInt(document.getElementById('souvenirKeychain').value) || 0;

            souvenirFee = (penQty * SOUVENIR_PRICES.pen) + 
                          (postcardQty * SOUVENIR_PRICES.postcard) + 
                          (keychainQty * SOUVENIR_PRICES.keychain);
        }

        const subtotal = totalTicketPrice + guideFee + souvenirFee;
        const totalAmount = subtotal; 

        return {
            totalTicketPrice: totalTicketPrice, 
            guideFee,
            souvenirFee,
            discount,
            totalAmount
        };
    }
    
    //Hàm cập nhật thông tin tổng kết (Bước 4) 
    function updateSummary() {
        const result = calculateTotal(); 
        const formatCurrency = (amount) => {
            return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        };
        const baseTicketPrice = result.totalTicketPrice + result.discount; 
        document.getElementById('summary-ticket-price').textContent = formatCurrency(baseTicketPrice);
        document.getElementById('summary-guide-fee').textContent = formatCurrency(result.guideFee);
        document.getElementById('summary-souvenir-fee').textContent = formatCurrency(result.souvenirFee);
        document.getElementById('summary-total-price').textContent = formatCurrency(result.totalAmount);
        const discountRow = document.getElementById('summary-discount-row');
        if (result.discount > 0) {
            discountRow.style.display = 'flex';
            document.getElementById('summary-discount-amount').textContent = '-' + formatCurrency(result.discount);
        } else {
            discountRow.style.display = 'none';
        }
    }


    // Xử lí chuyển bước
    form.addEventListener('click', function(e) {
        const nextButton = e.target.closest('[data-next-step]'); 
        const prevButton = e.target.closest('[data-prev-step]');

        if (nextButton) {
            if (validateStep(currentStep)) {
                if (currentStep === 3) {
                    updateSummary(); // Cập nhật tổng tiền trước khi sang Bước 4
                }
                currentStep++;
                if (currentStep > totalSteps) currentStep = totalSteps;
                updateStepUI();
            }
        } else if (prevButton) {
            currentStep--;
            if (currentStep < 1) currentStep = 1;
            updateStepUI();
        }
    });
    // Xử lý logic thay đổi Loại hình tham quan
    const tourTypeRadios = document.querySelectorAll('input[name="tourType"]');
    const individualFields = document.getElementById('individual-fields');
    const groupFields = document.getElementById('group-fields');
    const nameLabel = document.getElementById('name-label');
    const guestLimitText = document.getElementById('guest-limit-text');

    function handleTourTypeChange() {
        const tourType = document.querySelector('input[name="tourType"]:checked').value;
        const numGuestsInput = document.getElementById('numGuests');
        
        if (tourType === 'individual') {
            individualFields.style.display = 'block';
            groupFields.style.display = 'none';
            nameLabel.textContent = 'Họ và Tên:';
            guestLimitText.textContent = 'Cá nhân: Tối đa 9 người.';
            numGuestsInput.removeAttribute('min');
            numGuestsInput.setAttribute('max', 9);
            numGuestsInput.value = Math.min(numGuestsInput.value, 9) || 1;
        } else {
            individualFields.style.display = 'none';
            groupFields.style.display = 'block';
            nameLabel.textContent = 'Tên Người Đại Diện:';
            guestLimitText.textContent = 'Đoàn: Tối thiểu 10 người.';
            numGuestsInput.removeAttribute('max');
            numGuestsInput.setAttribute('min', 10);
            numGuestsInput.value = Math.max(numGuestsInput.value, 10) || 10;
        }
    }

    tourTypeRadios.forEach(radio => radio.addEventListener('change', handleTourTypeChange));
    handleTourTypeChange(); 


    // Xử lý Dịch vụ Kèm theo
    const souvenirOptionCheckbox = document.getElementById('souvenirOption');
    const souvenirDetails = document.getElementById('souvenir-details');

    souvenirOptionCheckbox.addEventListener('change', function() {
        souvenirDetails.style.display = this.checked ? 'flex' : 'none'; 
        updateSummary();
    });
    
    document.querySelectorAll('.service-option, .souvenir-input, .guest-category, #numGuests').forEach(element => {
        element.addEventListener('change', updateSummary);
    });

    
    // Xử lý Form Thanh toán
    const finalSubmitBtn = document.getElementById('final-submit-btn');

    finalSubmitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (!document.getElementById('agreePolicy').checked) {
            alert('Vui lòng tích vào ô "Tôi đồng ý với các điều kiện và chính sách của bảo tàng."');
            return;
        }

        const phone = document.getElementById('phone').value.trim();
        const totalAmount = calculateTotal().totalAmount;
        const totalAmountText = document.getElementById('summary-total-price').textContent;
        
        // Dữ liệu mô phỏng cho QR Code: Nội dung CK + Số tiền
        // Tạo VietQR tự động theo số tiền
        const bankBin = "970422"; // MB bank
        const accountNumber = "0822052264";
        const accountName = "NGUYEN NGOC PHUONG TRAM";
        const amount = totalAmount; // tổng tiền
        const description = `BTLS-${phone}`;

        const qrData = `https://img.vietqr.io/image/${bankBin}-${accountNumber}-compact2.png?amount=${amount}&addInfo=${encodeURIComponent(description)}&accountName=${encodeURIComponent(accountName)}`;

        // Hiển thị mã QR MB bank thật
        const qrcodeDiv = document.getElementById('qrcode');
        qrcodeDiv.innerHTML = `<img src="${qrData}" alt="VietQR" width="200" height="200">`;

        document.getElementById('qr-total-amount').textContent = totalAmountText;
        qrSection.style.display = 'block';
        successSection.style.display = 'none';
        
        // Hiển thị Modal
        paymentModal.show();
    });

    // Xử lý nút Đã Thanh Toán
    confirmPaymentBtn.addEventListener('click', function() {
    // 1. Ẩn phần QR Code và nút "Đã Thanh Toán"
    qrSection.style.display = 'none';
    
    // 2. HIỂN THỊ giao diện thành công (Success Section)
    successSection.style.display = 'block';
    
    // 3. (Tùy chọn) Sau 3 giây, tự động đóng modal
    setTimeout(() => {
        paymentModal.hide();
        // Có thể thêm logic reset form tại đây nếu cần
    }, 3000);
});
    // Xử lý áp dụng voucher (Mô phỏng)
    document.getElementById('applyVoucher').addEventListener('click', function() {
        const voucherCode = document.getElementById('voucherCode').value.toUpperCase();
        let calculatedTotal = calculateTotal().totalAmount; 
        let finalPrice = calculatedTotal;

        if (voucherCode === 'MUSEUM20') {
            finalPrice = calculatedTotal * 0.8;
            alert('Áp dụng Voucher "MUSEUM20" thành công! Giảm 20% tổng thanh toán.');
        } else if (voucherCode === 'FREESHIP') {
            finalPrice = calculatedTotal - 20000;
            if (finalPrice < 0) finalPrice = 0;
            alert('Áp dụng Voucher "FREESHIP" thành công! Giảm 20.000 VND.');
        } else {
            alert('Mã Voucher không hợp lệ hoặc đã hết hạn.');
            finalPrice = calculatedTotal;
        }
        
        const formatCurrency = (amount) => amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        document.getElementById('summary-total-price').textContent = formatCurrency(Math.round(finalPrice));
    });

});