const button = document.getElementById('changeBtn');
const colorText = document.getElementById('colorCode');

button.addEventListener('click', () => {
  // Generate random hex color
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  
  // Apply to background
  document.body.style.backgroundColor = randomColor;

  // Show color code
  colorText.textContent = randomColor.toUpperCase();
});
