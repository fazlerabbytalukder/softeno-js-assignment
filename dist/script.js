document.addEventListener("DOMContentLoaded", () => {
    const productImage = document.getElementById("product-image");
    const colorButtons = document.querySelectorAll(".color-btn");
    const quantityElement = document.getElementById("quantity");
    const decreaseBtn = document.getElementById("decrease-btn");
    const increaseBtn = document.getElementById("increase-btn");
    const addToCartBtn = document.getElementById("add-to-cart-btn");
    const cartModal = document.getElementById("cart-modal");
    const closeModal = document.getElementById("close-modal");
    const cartItems = document.getElementById("cart-items");
  
    let quantity = 1;
    let selectedSize = "S";

// Add event listeners to color buttons
colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the data-color attribute value
    const selectedColor = button.getAttribute("data-color");

    // Update the product image source based on the selected color
    productImage.src = `./assets/img/product-${selectedColor}.jpg`;

    // Optionally, highlight the selected color button
    colorButtons.forEach((btn) => btn.classList.remove("ring-2", "ring-black"));
    button.classList.add("ring-2", "ring-black");
  });
});

  
    decreaseBtn.addEventListener("click", () => {
      if (quantity > 1) quantity--;
      quantityElement.textContent = quantity;
    });
  
    increaseBtn.addEventListener("click", () => {
      quantity++;
      quantityElement.textContent = quantity;
    });
  
    document.querySelectorAll(".size-btn").forEach(button => {
      button.addEventListener("click", (e) => {
        selectedSize = e.target.textContent;
      });
    });
  
    addToCartBtn.addEventListener("click", () => {
      cartItems.innerHTML = `
        <li>
          Product - Quantity: ${quantity}, Size: ${selectedSize}
        </li>
      `;
      cartModal.classList.remove("hidden");
    });
  
    closeModal.addEventListener("click", () => {
      cartModal.classList.add("hidden");
    });
  
    cartModal.addEventListener("click", (e) => {
      if (e.target === cartModal) cartModal.classList.add("hidden");
    });
  });
  