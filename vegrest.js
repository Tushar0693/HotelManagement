let cart = [];

// Function to add items to the cart
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

// Function to update the cart display
function updateCart() {
    let cartItems = document.getElementById("cartItems");
    let cartTotal = document.getElementById("cartTotal");
    let total = 0;

    // Clear the existing cart display
    cartItems.innerHTML = "";

    // Populate the cart display with items
    cart.forEach(item => {
        let li = document.createElement("li");
        li.innerText = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    // Update the total price
    cartTotal.innerText = total;
}