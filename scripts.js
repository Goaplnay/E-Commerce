let cartCount = 0;

function addToCart(price) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert('Added to cart! Price: $' + price);
}
