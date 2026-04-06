function toggleMode() {
    document.body.classList.toggle("light");
}
const toggleBtn = document.getElementById('darkModeToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Save preference in localStorage
  if(document.body.classList.contains('dark-mode')){
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});

// Load saved theme on page load
window.onload = () => {
  if(localStorage.getItem('darkMode') === 'enabled'){
    document.body.classList.add('dark-mode');
  }
};
