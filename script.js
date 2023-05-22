
// Get the header element
const header = document.querySelector('header');

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
  // Get the scroll distance from the top of the page
  const scrollDistance = window.scrollY;

  // If the scroll distance is greater than 100px, set the background color to red
  if (scrollDistance > 200) {
    header.style.backgroundColor = 'rgb(177, 179, 148)';
  } else {
    // Otherwise, set the background color to transparent
    header.style.backgroundColor = 'transparent';
  }
});

