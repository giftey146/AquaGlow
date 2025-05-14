// Display a welcome alert on the homepage
window.addEventListener('load', function () {
  if (window.location.pathname.includes("index.html")) {
    alert("Welcome to AquaGlow – Stay hydrated, stay smart! 💧");
  }
});

// Highlight nav link on hover
const links = document.querySelectorAll('.navbar a');
links.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#00ffff';
  });
  link.addEventListener('mouseout', () => {
    link.style.color = 'white';
  });
});
