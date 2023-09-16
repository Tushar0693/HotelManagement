const checkInInput = document.getElementById('check-in');
const checkOutInput = document.getElementById('check-out');

// Get the current date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Set the minimum date for check-in to today
checkOutInput.setAttribute('min', today);

// Add an event listener to the check-out input to disable past dates
checkOutInput.addEventListener('input', function () {
    const checkOutDate = new Date(checkOutInput.value);
    // const checkOutDate = new Date(this.value);
    
    if (checkOutDate < checkInDate) {
        this.value = checkInInput.value;
    }
});