document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.createElement('li');
    cartBtn.innerHTML = `
      <a href="#" id="cart-toggle" class="position-relative">
        <i class="fa fa-shopping-cart"></i>
        <span id="cart-count" class="cart-badge">0</span>
      </a>`;
    document.querySelector('.main-nav ul').appendChild(cartBtn);

    const cartDrawer = document.getElementById('cartDrawer');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartCount = document.getElementById('cart-count');
    const closeCart = document.getElementById('closeCart');
    const paymentPopup = document.getElementById('paymentPopup');
    const checkoutBtn = document.querySelector('.cart-footer .btn-danger');
    // 🔸 Lưu giỏ hàng tạm trong localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function saveCart() {
      localStorage.setItem('cart', JSON.stringify(cart));
    }

    function updateCart() {
      cartItems.innerHTML = cart.map((item, i) => `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          ${item.name}
          <div>
            <span>${item.price.toLocaleString()}₫</span>
            <button class="btn btn-sm btn-outline-danger ms-2 remove-item" data-index="${i}">&times;</button>
          </div>
        </li>
      `).join('');
      const total = cart.reduce((t, i) => t + i.price, 0);
      cartTotal.textContent = total.toLocaleString() + '₫';
      cartCount.textContent = cart.length;
      saveCart();
    }

    // 🔸 Thêm sản phẩm vào giỏ
    document.querySelectorAll('.add-to-cart').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        const card = e.target.closest('.card-body');
        const name = card.querySelector('.card-title').textContent;
        const price = parseInt(card.querySelector('.fw-bold').textContent.replace(/\D/g,''));
        cart.push({ name, price });
        updateCart();
      });
    });
    // 🔸 Xóa sản phẩm
    cartItems.addEventListener('click', e => {
      if (e.target.classList.contains('remove-item')) {
        cart.splice(e.target.dataset.index, 1);
        updateCart();
      }
    });
    // 🔸 Mở/đóng giỏ hàng
    document.getElementById('cart-toggle').addEventListener('click', e => {
      e.preventDefault();
      cartDrawer.classList.toggle('open');
    });
    closeCart.addEventListener('click', () => cartDrawer.classList.remove('open'));
    // 🔹 Khi nhấn “Thanh toán” -> mở popup nhập thông tin
    checkoutBtn.addEventListener('click', () => {
      paymentPopup.classList.add('active');
      confirmMessage.style.display = 'none';
    });

    // 🔹 Nút đóng popup
    closePopup.addEventListener('click', () => {
      paymentPopup.classList.remove('active');
    });

    // 🔹 Khi người dùng hoàn tất thông tin và nhấn “Xác nhận thanh toán”
    paymentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('customerName').value.trim();
      const email = document.getElementById('customerEmail').value.trim();
      const phone = document.getElementById('customerPhone').value.trim();

      if (name && email && phone) {
        // Ẩn form và hiển thị thông báo cảm ơn
        paymentForm.style.display = 'none';
        confirmMessage.innerHTML = `
          🎉 <strong>Cảm ơn bạn ${name} đã xác nhận mua hàng!</strong><br>
          Thông tin đơn hàng sẽ được gửi đến địa chỉ Gmail: <b>${email}</b>.<br><br>
          📦 Chúng tôi sẽ liên hệ với bạn qua số điện thoại: <b>${phone}</b>.<br>
          <small class="text-muted">(Cửa sổ này sẽ tự đóng sau 1 phút)</small>
        `;
        confirmMessage.style.display = 'block';

        // ⏱️ Tự đóng sau 1 phút (60 giây)
        setTimeout(() => {
          confirmMessage.style.display = 'none';
          paymentPopup.classList.remove('active');
          paymentForm.style.display = 'block';
          paymentForm.reset();
        }, 60000);
      }
    });
    // 🔸 Cập nhật hiển thị khi tải lại trang
    updateCart();
});

// Hiệu ứng hiện ra khi cuộn
    const fadeEls = document.querySelectorAll('.fade-in-scroll');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.1 });
    fadeEls.forEach(el => observer.observe(el));