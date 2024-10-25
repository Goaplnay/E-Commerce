// Store cart items
let cart = [];

// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-name');
        const productPrice = parseFloat(button.getAttribute('data-price'));

        // Add product to cart
        cart.push({ name: productName, price: productPrice });
        updateCart();
    });
});

// Update cart display
function updateCart() {
    // Clear cart items display
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);

        total += item.price;
    });

    // Update total price and cart count
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
}

// Checkout button
document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Thank you for your purchase!');
        cart = [];
        updateCart();
    } else {
        alert('Your cart is empty.');
    }
});
