let cart = [];

function addToCart(productName, price) {
    const product = { name: productName, price: price };
    cart.push(product);
    alert(${productName} has been added to the cart);
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.querySelector('a[href="#"]');
    cartCount.innerText = Cart (${cart.length});
}