let cart = [];

function addToCart(productId) {
    // Simulate adding a product to the cart
    cart.push(productId);
    alert(`Product with ID ${productId} added to cart! in project db-dev`);
}

function viewCart() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        alert(`Products in cart: ${cart.join(', ')}`);
    }
}

// Example: Attach these actions to buttons on the page
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('viewCartBtn').addEventListener('click', viewCart);
});
