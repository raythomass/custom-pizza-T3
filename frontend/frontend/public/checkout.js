document.addEventListener("DOMContentLoaded", function() {
    const deliveryForm = document.getElementById("delivery-form");
    const orderSummaryList = document.getElementById("order-summary-list");
    const btnEditCart = document.getElementById("btn-edit-cart");
    const btnPlaceOrder = document.getElementById("btn-place-order");

    // Dummy data for order summary (we need to replace with actual data from backend)
    const orderSummary = [
        { name: "Custom Pizza 1", quantity: 2, price: 10 },
        { name: "Custom Pizza 2", quantity: 1, price: 12 },
        { name: "Custom Pizza 3", quantity: 3, price: 15 }
    ];

    // Function to display order summary
    function displayOrderSummary() {
        orderSummaryList.innerHTML = "";
        orderSummary.forEach(item => {
            orderSummaryList.innerHTML += `
                <li>
                    <p><strong>${item.name}</strong></p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Price: $${item.price.toFixed(2)}</p>
                </li>
            `;
        });
    }

    // Event listener for form submission
    deliveryForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Implement logic to handle form submission
        console.log("Form submitted");
    });

    // Event listener for edit cart button
    btnEditCart.addEventListener("click", function() {
        // Implement logic to redirect to cart page
        console.log("Editing cart...");
    });

    // Event listener for place order button
    btnPlaceOrder.addEventListener("click", function() {
        // Implement logic to place order
        console.log("Placing order...");
    });

    // Display order summary on page load
    displayOrderSummary();
});
