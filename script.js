document.addEventListener('DOMContentLoaded', function() {
    const womenShoes = [
        { id: 1, name: 'Chuck Taylor Canvas', images: ['images/women/women1_1.jpg', 'images/women/women1_2.jpg', 'images/women/women1_3.jpg', 'images/women/women1_4.jpg'] },
        { id: 2, name: 'Air VaporMax Plus', images: ['images/women/women2_1.jpg', 'images/women/women2_2.jpg', 'images/women/women2_3.jpg', 'images/women/women2_4.jpg'] },
        { id: 3, name: 'Air Max 90 Futura', images: ['images/women/women3_1.jpg', 'images/women/women3_2.jpg', 'images/women/women3_3.jpg', 'images/women/women3_4.jpg'] }
    ];

    const menShoes = [
        { id: 1, name: 'KD 17', images: ['images/men/men1_1.jpg', 'images/men/men1_2.jpg', 'images/men/men1_3.jpg', 'images/men/men1_4.jpg'] },
        { id: 2, name: 'Ja 1', images: ['images/men/men2_1.jpg', 'images/men/men2_2.jpg', 'images/men/men2_3.jpg', 'images/men/men2_4.jpg'] },
        { id: 3, name: 'Air VaporMax ', images: ['images/men/men3_1.jpg', 'images/men/men3_2.jpg', 'images/men/men3_3.jpg', 'images/men/men3_4.jpg'] }
    ];

    const likedItems = [];
    const cartItems = [];
    const users = [];

    function renderShoes(shoes, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        shoes.forEach(shoe => {
            const shoeElement = document.createElement('div');
            shoeElement.className = 'shoe-item';
            shoeElement.innerHTML = `
                <img src="${shoe.images[0]}" alt="${shoe.name}">
                <h3>${shoe.name}</h3>
                <button onclick="location.href='product.html?id=${shoe.id}&type=${containerId}'">Посмотреть</button>
            `;
            container.appendChild(shoeElement);
        });
    }

    window.likeItem = function(id, containerId) {
        const shoes = containerId === 'womenShoesGrid' ? womenShoes : menShoes;
        const item = shoes.find(shoe => shoe.id === id);
        if (!likedItems.includes(item)) {
            likedItems.push(item);
        }
        renderLikedItems();
    }

    window.addToCart = function(id, containerId) {
        const shoes = containerId === 'womenShoesGrid' ? womenShoes : menShoes;
        const item = shoes.find(shoe => shoe.id === id);
        if (!cartItems.includes(item)) {
            cartItems.push(item);
        }
        renderCartItems();
    }

    function renderLikedItems() {
        const container = document.getElementById('likedGrid');
        container.innerHTML = '';
        likedItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'shoe-item';
            itemElement.innerHTML = `
                <img src="${item.images[0]}" alt="${item.name}">
                <h3>${item.name}</h3>
            `;
            container.appendChild(itemElement);
        });
    }

    function renderCartItems() {
        const container = document.getElementById('cartGrid');
        container.innerHTML = '';
        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'shoe-item';
            itemElement.innerHTML = `
                <img src="${item.images[0]}" alt="${item.name}">
                <h3>${item.name}</h3>
            `;
            container.appendChild(itemElement);
        });
    }

    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const user = { username, email, password };
        users.push(user);
        alert('Регистрация прошла успешно!');
        this.reset();
    });

    renderShoes(womenShoes, 'womenShoesGrid');
    renderShoes(menShoes, 'menShoesGrid');
});
