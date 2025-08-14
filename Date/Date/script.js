// Get the current date
const dateElement = document.getElementById('current-date');
const currentDate = new Date();

// Format the date (e.g., "November 22, 2024")
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);

// Display the date
dateElement.textContent = formattedDate;