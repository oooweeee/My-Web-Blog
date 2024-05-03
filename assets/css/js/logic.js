// logic.js

// Example: Toggle dark mode
document.querySelector('.toggle-button').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  // Example: Handle "Back" button click
  document.querySelector('.back-button').addEventListener('click', () => {
    window.location.href = '/index.html'; // Redirect to the landing page
  });
  
  // Add any other logic or utility functions as needed