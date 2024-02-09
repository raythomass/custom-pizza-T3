document.addEventListener("DOMContentLoaded", function() {
    const crustSelect = document.getElementById("crust");
    const sauceSelect = document.getElementById("sauce");
    const cheeseSelect = document.getElementById("cheese");
    const pepperoniCheckbox = document.getElementById("pepperoni");
    const mushroomsCheckbox = document.getElementById("mushrooms");
    const onionsCheckbox = document.getElementById("onions");
    const pizzaPreview = document.getElementById("pizza-preview");

    // Event listeners for customization options
    crustSelect.addEventListener("change", updatePizzaPreview);
    sauceSelect.addEventListener("change", updatePizzaPreview);
    cheeseSelect.addEventListener("change", updatePizzaPreview);
    pepperoniCheckbox.addEventListener("change", updatePizzaPreview);
    mushroomsCheckbox.addEventListener("change", updatePizzaPreview);
    onionsCheckbox.addEventListener("change", updatePizzaPreview);

    // Function to update pizza preview
    function updatePizzaPreview() {
        const crust = crustSelect.value;
        const sauce = sauceSelect.value;
        const cheese = cheeseSelect.value;
        const toppings = [];
        if (pepperoniCheckbox.checked) toppings.push("Pepperoni");
        if (mushroomsCheckbox.checked) toppings.push("Mushrooms");
        if (onionsCheckbox.checked) toppings.push("Onions");

        // Display preview
        pizzaPreview.innerHTML = `
            <h3>Customized Pizza</h3>
            <p><strong>Crust:</strong> ${crust}</p>
            <p><strong>Sauce:</strong> ${sauce}</p>
            <p><strong>Cheese:</strong> ${cheese}</p>
            <p><strong>Toppings:</strong> ${toppings.join(", ")}</p>
        `;
    }
});
