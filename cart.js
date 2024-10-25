// Sample cart items data (you can load this dynamically from localStorage or a database)
let cartItems = [
    { name: "Smartphone", price: 299 },
    { name: "Laptop", price: 399 },
    { name: "Headphones", price: 99 },
    { name: "SmartTV", price: 299 },
    { name: "Camera", price: 399 },
    { name: "Digital WAtch", price: 80 }
];

// Function to render cart items on the cart page
function renderCartItems() {
    let cartItemsContainer = document.getElementById("cart-items");
    let cartTotal = 0;

    // Clear previous items in the cart display
    cartItemsContainer.innerHTML = "";

    cartItems.forEach((item, index) => {
        let cartItemElement = document.createElement("div");
        cartItemElement.classList.add("cart-item");

        cartItemElement.innerHTML = `
            <div>
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
            </div>
            <button class="remove-button" onclick="removeFromCart(${index})">Remove</button>
        `;

        cartItemsContainer.appendChild(cartItemElement);
        cartTotal += item.price;
    });

    // Update total
    document.getElementById("cart-total").innerText = cartTotal.toFixed(2);
}

// Function to remove item from cart
function removeFromCart(index) {
    cartItems.splice(index, 1); // Remove item by index
    renderCartItems(); // Re-render the cart items
}


function checkout() {
    if (cartItems.length === 0) {
        alert("Your cart is empty. Add items to proceed.");
    } else {
        alert("Proceeding to checkout!");
       
    }
}

s
window.onload = renderCartItems;



