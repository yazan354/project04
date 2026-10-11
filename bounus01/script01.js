const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

const profileImg = document.getElementById('profile-img');
const switchPhotoBtn = document.getElementById('switch-photo-btn');

const photos = [
    {
        src: 'assets1/profile.jpeg',
        alt: 'Change Photo',
        btnText: 'Casual Photo'
    },
    {
        src: 'assets/casual.jpg',
        alt: 'Change Photo',
        btnText: 'Professional Photo'
    }
];

let currentPhotoIndex = 0;

switchPhotoBtn.addEventListener('click', () => {
    profileImg.classList.add('fade-out');

    setTimeout(() => {
        currentPhotoIndex = currentPhotoIndex === 0 ? 1 : 0;

        profileImg.src = photos[currentPhotoIndex].src;
        profileImg.alt = photos[currentPhotoIndex].alt;
        switchPhotoBtn.textContent = photos[currentPhotoIndex].btnText;

        profileImg.classList.remove('fade-out');
    }, 200);
});