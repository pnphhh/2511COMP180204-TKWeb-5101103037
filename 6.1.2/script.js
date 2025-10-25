$(document).ready(function(){
    // Hiệu ứng cho gian hàng
    $('.product-title').on('click', function(){
        // this: chính là thẻ h3 được click
        // .next(): tìm đến thẻ ngay sau nó (chính là div .product-details)
        // .slideToggle(): bật/tắt hiển thị với hiệu ứng trượt
        $(this).next('.product-details').slideToggle('slow');

        // Thêm hiệu ứng cho icon (nếu có)
        $(this).toggleClass('active');
    });
});

