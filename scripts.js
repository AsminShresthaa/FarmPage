document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');

    // Toggle menu visibility when the toggle button is clicked
    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Optional: Close the menu if clicking outside of the menu and toggle button
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
            menu.classList.remove('active');
        }
    });

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add click event listeners
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            
            // Find the card containing the clicked button
            const card = button.closest('.card');
            const quantityControls = card.querySelector('.card-quantity');
            
            // Toggle visibility of quantity controls
            quantityControls.style.display = quantityControls.style.display === 'none' ? 'flex' : 'none';
        });
    });

    // Increment and Decrement buttons functionality
    const quantityButtons = document.querySelectorAll('.quantity-btn');

    quantityButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const action = button.getAttribute('data-action');
            const quantityValueElement = button.parentElement.querySelector('.quantity-value');
            let currentValue = parseInt(quantityValueElement.textContent);

            if (action === 'increment') {
                currentValue += 1;
            } else if (action === 'decrement' && currentValue > 0) {
                currentValue -= 1;
            }

            quantityValueElement.textContent = currentValue;
        });
    });
});
