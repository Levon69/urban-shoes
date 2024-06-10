document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.getElementById('cart-icon');
    const favoritesIcon = document.getElementById('favorites-icon');
    const loginIcon = document.getElementById('login-icon');
    const cartPopup = document.getElementById('cart-popup');
    const favoritesPopup = document.getElementById('favorites-popup');
    const loginPopup = document.getElementById('login-popup');
    const likeButtons = document.querySelectorAll('.like-button');
    const cart = [];
    const favorites = [];

    cartIcon.addEventListener('click', () => {
        cartPopup.classList.toggle('visible');
        updateCartPopup();
    });

    favoritesIcon.addEventListener('click', () => {
        favoritesPopup.classList.toggle('visible');
        updateFavoritesPopup();
    });

    loginIcon.addEventListener('click', () => {
        loginPopup.classList.toggle('visible');
    });

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const shoeItem = button.closest('.shoe-item');
            const shoeId = shoeItem.getAttribute('data-id');
            if (!favorites.includes(shoeId)) {
                favorites.push(shoeId);
                button.classList.add('liked');
            } else {
                const index = favorites.indexOf(shoeId);
                favorites.splice(index, 1);
                button.classList.remove('liked');
            }
            document.getElementById('favorites-count').textContent = favorites.length;
        });
    });

    function updateCartPopup() {
        const cartList = document.querySelector('.cart-list');
        cartList.innerHTML = '';
        cart.forEach(item => {
            const listItem = document.createElement('div');
            listItem.textContent = `Товар ${item}`;
            cartList.appendChild(listItem);
        });
    }

    function updateFavoritesPopup() {
        const favoritesList = document.querySelector('.favorites-list');
        favoritesList.innerHTML = '';
        favorites.forEach(item => {
            const listItem = document.createElement('div');
            listItem.textContent = `Товар ${item}`;
            favoritesList.appendChild(listItem);
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const productId = new URLSearchParams(window.location.search).get('id');
    const productData = getProductDataById(productId);

    if (productData) {
        document.getElementById('main-image').src = `images/${productData.mainImage}`;
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails[0].src = `images/${productData.thumbnailImages[0]}`;
        thumbnails[1].src = `images/${productData.thumbnailImages[1]}`;
        thumbnails[2].src = `images/${productData.thumbnailImages[2]}`;
        thumbnails[3].src = `images/${productData.thumbnailImages[3]}`;

        document.getElementById('product-title').textContent = productData.title;
        document.getElementById('product-description').textContent = productData.description;
        document.getElementById('product-price').textContent = `Цена: ${productData.price}`;

        const addToCartButton = document.getElementById('add-to-cart-button');
        addToCartButton.addEventListener('click', () => addToCart(productId));
    }

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
        console.log(`Product ID: ${productId}, Size: ${size}`);
        alert(`Тoвар добавлен в корзину: ID ${productId}, Размер ${size}`);
    }
});
 
 
