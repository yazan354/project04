// Dynamic Theme Switcher Logic
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    // Toggles the dark-theme class on the body element
    document.body.classList.toggle('dark-theme');
});