document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Display a success message
    document.getElementById('orderSuccessMessage').style.display = 'block';

    // Reset the form fields
    this.reset();
});