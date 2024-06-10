document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('main-image');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const thumbnails = document.querySelectorAll('.thumbnail');
    let currentIndex = 0;

    const productId = new URLSearchParams(window.location.search).get('id');
    const productData = getProductDataById(productId);
    if (productData) {
        mainImage.src = `images/${productData.mainImage}`;
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.src = `images/${productData.thumbnailImages[index]}`;
            thumbnail.addEventListener('click', () => showImage(index));
        });

        document.getElementById('product-title').textContent = productData.title;
        document.getElementById('product-description').textContent = productData.description;
        document.getElementById('product-price').textContent = `Цена: ${productData.price}`;

        const addToCartButton = document.getElementById('add-to-cart-button');
        addToCartButton.addEventListener('click', () => addToCart(productId));
    }

    function showImage(index) {
        mainImage.src = thumbnails[index].src;
        currentIndex = index;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        showImage(currentIndex);
    }

    prevButton.addEventListener('click', prevImage);
    nextButton.addEventListener('click', nextImage);

    function getProductDataById(id) {
        const products = [
            {
                id: '1',
                title: 'Женская обувь 1',
                description: 'Описание женской обуви 1',
                price: '1000₽',
                mainImage: 'shoe1.jpg',
                thumbnailImages: ['shoe1-1.jpg', 'shoe1-2.jpg', 'shoe1-3.jpg', 'shoe1-4.jpg']
            },
            {
                id: '2',
                title: 'Женская обувь 2',
                description: 'Описание женской обуви 2',
                price: '1200₽',
                mainImage: 'shoe2.jpg',
                thumbnailImages: ['shoe2-1.jpg', 'shoe2-2.jpg', 'shoe2-3.jpg', 'shoe2-4.jpg']
            },
            {
                id: '3',
                title: 'Женская обувь 3',
                description: 'Описание женской обуви 3',
                price: '1300₽',
                mainImage: 'shoe3.jpg',
                thumbnailImages: ['shoe3-1.jpg', 'shoe3-2.jpg', 'shoe3-3.jpg', 'shoe3-4.jpg']
            },
            {
                id: '4',
                title: 'Мужская обувь 1',
                description: 'Описание мужской обуви 1',
                price: '1400₽',
                mainImage: 'shoe4.jpg',
                thumbnailImages: ['shoe4-1.jpg', 'shoe4-2.jpg', 'shoe4-3.jpg', 'shoe4-4.jpg']
            },
            {
                id: '5',
                title: 'Мужская обувь 2',
                description: 'Описание мужской обуви 2',
                price: '1500₽',
                mainImage: 'shoe5.jpg',
                thumbnailImages: ['shoe5-1.jpg', 'shoe5-2.jpg', 'shoe5-3.jpg', 'shoe5-4.jpg']
            },
            {
                id: '6',
                title: 'Мужская обувь 3',
                description: 'Описание мужской обуви 3',
                price: '1600₽',
                mainImage: 'shoe6.jpg',
                thumbnailImages: ['shoe6-1.jpg', 'shoe6-2.jpg', 'shoe6-3.jpg', 'shoe6-4.jpg']
            }
        ];

        return products.find(product => product.id === id);
    }

    function addToCart(productId) {
        const size = document.getElementById('size').value;
        const cart = getCart();
        const existingItem = cart.find(item => item.id === productId && item.size === size);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id: productId, size, quantity: 1 });
        }
        
        saveCart(cart);
        updateCartCount();
        alert(`Товар добавлен в корзину: ID ${productId}, Размер ${size}`);
    }

    function removeFromCart(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || {};
        delete cart[productId];
        localStorage.setItem('cart', JSON.stringify(cart));
    }
        removeFromCart('product2');
    function getCart() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }

    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function updateCartCount() {
        const cart = getCart();
        const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
        document.getElementById('cart-count').textContent = cartCount;
    }

    function addToCart(productId, quantity) {
        let cart = JSON.parse(localStorage.getItem('cart')) || {};
        cart[productId] = (cart[productId] || 0) + quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function displayCart() {
        let cart = JSON.parse(localStorage.getItem('cart')) || {};
    }

    function showCart() {
        const cart = getCart();
        const cartList = document.querySelector('.cart-list');
        cartList.innerHTML = '';
        
        if (cart.length === 0) {
            cartList.textContent = 'Корзина пуста.';
        } else {
            cart.forEach(item => {
                const product = getProductDataById(item.id);
                const itemElement = document.createElement('div');
                itemElement.textContent = `${product.title} (Размер: ${item.size}) - Количество: ${item.quantity}`;
                cartList.appendChild(itemElement);
            });
        }
    }

    document.getElementById('cart-icon').addEventListener('click', () => {
        document.getElementById('cart-popup').classList.toggle('visible');
        showCart();
    });

    document.getElementById('checkout-button').addEventListener('click', () => {
        alert('Перейти к оформлению заказа');
    });

    updateCartCount();
});
   
