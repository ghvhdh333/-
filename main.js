const toggleBtn = document.querySelector('.bar_toggleBtn');
const menu = document.querySelector('.bar_menu');
const icons = document.querySelector('.bar_icons');

toggleBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});