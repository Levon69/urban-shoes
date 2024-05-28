document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const productType = urlParams.get('type');

    const womenShoes = [
        { id: 1, name: 'Женские туфли 1', images: ['images/women/women1_1.jpg', 'images/women/women1_2.jpg', 'images/women/women1_3.jpg', 'images/women/women1_4.jpg'] },
        { id: 2, name: 'Женские туфли 2', images: ['images/women/women2_1.jpg', 'images/women/women2_2.jpg', 'images/women/women2_3.jpg', 'images/women/women2_4.jpg'] },
        { id: 3, name: 'Женские туфли 3', images: ['images/women/women3_1.jpg', 'images/women/women3_2.jpg', 'images/women/women3_3.jpg', 'images/women/women3_4.jpg'] }
    ];

    const menShoes = [
        { id: 1, name: 'Мужские туфли 1', images: ['images/men/men1_1.jpg', 'images/men/men1_2.jpg', 'images/men/men1_3.jpg', 'images/men/men1_4.jpg'] },
        { id: 2, name: 'Мужские туфли 2', images: ['images/men/men2_1.jpg', 'images/men/men2_2.jpg', 'images/men/men2_3.jpg', 'images/men/men2_4.jpg'] },
        { id: 3, name: 'Мужские туфли 3', images: ['images/men/men3_1.jpg', 'images/men/men3_2.jpg', 'images/men/men3_3.jpg', 'images/men/men3_4.jpg'] }
    ];

    const shoes = productType === 'womenShoesGrid' ? womenShoes : menShoes;
    const product = shoes.find(shoe => shoe.id === productId);

    if (product) {
        document.getElementById('productName').textContent = product.name;
        const productImage = document.getElementById('productImage');
        let currentImageIndex = 0;
        productImage.src = product.images[currentImageIndex];

        document.getElementById('prevImage').addEventListener('click', function() {
            currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : product.images.length - 1;
            productImage.src = product.images[currentImageIndex];
        });

        document.getElementById('nextImage').addEventListener('click', function() {
            currentImageIndex = (currentImageIndex < product.images.length - 1) ? currentImageIndex + 1 : 0;
            productImage.src = product.images[currentImageIndex];
        });

        document.getElementById('likeButton').addEventListener('click', function() {
            alert('Товар добавлен в понравившиеся!');
        });

        document.getElementById('cartButton').addEventListener('click', function() {
            alert('Товар добавлен в корзину!');
        });
    }
});
