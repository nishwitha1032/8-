const products = document.querySelectorAll(".product");

// Add to Cart Functionality
const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
};

// Calculate Total Price Functionality
const calculateTotalPrice = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
