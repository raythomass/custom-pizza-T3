document.addEventListener("DOMContentLoaded", function() {
    const cartList = document.getElementById("cart-list");
    const totalAmount = document.getElementById("total-amount");
    const proceedToCheckoutBtn = document.getElementById("btn-proceed-to-checkout");

    // Dummy data for cart items (we need to replace with actual data from backend)
    const cartItems = [
        { name: "Custom Pizza 1", quantity: 2, price: 10 },
        { name: "Custom Pizza 2", quantity: 1, price: 12 },
        { name: "Custom Pizza 3", quantity: 3, price: 15 }
    ];

    // Function to display cart items
    function displayCartItems() {
        cartList.innerHTML = "";
        let total = 0;
        cartItems.forEach(item => {
            const itemTotal = item.quantity * item.price;
            total += itemTotal;
            cartList.innerHTML += `
                <li>
                    <p><strong>${item.name}</strong></p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    <p>Total: $${itemTotal.toFixed(2)}</p>
                    <button class="btn-remove-item" data-name="${item.name}">Remove</button>
                </li>
            `;
        });
        totalAmount.textContent = `$${total.toFixed(2)}`;
    }

    // Event listener for remove item buttons
    cartList.addEventListener("click", function(event) {
        if (event.target.classList.contains("btn-remove-item")) {
            const itemName = event.target.dataset.name;
            const itemIndex = cartItems.findIndex(item => item.name === itemName);
            if (itemIndex !== -1) {
                cartItems.splice(itemIndex, 1);
                displayCartItems();
            }
        }
    });

    // Event listener for proceed to checkout button
    proceedToCheckoutBtn.addEventListener("click", function() {
        // Implement logic to proceed to checkout
        console.log("Proceeding to checkout...");
    });

    // Display cart items on page load
    displayCartItems();
});
