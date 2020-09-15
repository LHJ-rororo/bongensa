const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menuNav');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});