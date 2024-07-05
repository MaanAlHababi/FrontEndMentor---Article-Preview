const shareButton = document.getElementById('share-button');
const shareMenu = document.getElementById('share-menu');
const publisherSection = document.getElementById('publisher');


shareButton.addEventListener('click', () => {
    shareButton.classList.toggle('dark');
    if (window.innerWidth <= 768) {
        publisherSection.classList.toggle('hidden');
        shareMenu.classList.toggle('hidden');
    } else {
        shareMenu.classList.toggle('hidden');
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && publisherSection.classList.contains('hidden')) {
        publisherSection.classList.toggle('hidden');
    }
});