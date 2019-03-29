// Wait for the page to load before we grab elements from the page
window.addEventListener('load', function() {
  // Hide the dropdown content when the page loads
  document.querySelector('#dropdown-content').classList.add('hidden');
  // Add a click handler to the dropdown button
  document.querySelector('#dropdown-button').addEventListener('click', handleDropdownButtonClick);
});

// When the dropdown button is clicked, show the dropdown content
function handleDropdownButtonClick() {
  document.querySelector('#dropdown-content').classList.toggle('hidden');
}
