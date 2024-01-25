
const dailyLink = document.getElementById('daily-link');
const weeklyLink = document.getElementById('weekly-link');
const monthlyLink = document.getElementById('monthly-link');

// Add event listeners
dailyLink.addEventListener('click', () => updatePastTime('Yesterday -  '));
weeklyLink.addEventListener('click', () => updatePastTime('Last Week - '));
monthlyLink.addEventListener('click', () => updatePastTime('Last Month - '));

// Function to update past-time in all cards
function updatePastTime(time) {
  const pastTimeElements = document.querySelectorAll('.past-time');
  pastTimeElements.forEach(element => {
    element.textContent = time ;
  });
}