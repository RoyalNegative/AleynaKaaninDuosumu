const hayirBtn = document.getElementById('hayir');
const evetBtn = document.getElementById('evet');
const modal = document.getElementById('modal');
const kapat = document.querySelector('.kapat');
const videoContainer = document.querySelector('.video-container');
const videoSrc = "https://www.youtube.com/embed/9b9Z5HSCXOI?start=110&autoplay=1";

function randomPozisyon() {
    const maxX = window.innerWidth - hayirBtn.offsetWidth;
    const maxY = window.innerHeight - hayirBtn.offsetHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    hayirBtn.style.left = x + 'px';
    hayirBtn.style.top = y + 'px';
}

hayirBtn.addEventListener('mouseenter', randomPozisyon);

evetBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    videoContainer.innerHTML = `<iframe width="400" height="225" src="${videoSrc}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
});

kapat.addEventListener('click', () => {
    modal.style.display = 'none';
    videoContainer.innerHTML = "";
});

// Modal dışında bir yere tıklanınca kapansın
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        videoContainer.innerHTML = "";
    }
}); 