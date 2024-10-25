let cartItems = [];

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    alert(productName + ' has been added to your cart.');
    console.log(cartItems);
}
