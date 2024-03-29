// videos carousel
const carousel = document.querySelector('.carousel');
const videos = carousel.querySelectorAll('iframe');

let currentIndex = 0;
const videoWidth = videos[0].clientWidth;
const videoMarginRight = parseInt(
    window.getComputedStyle(videos[0])['margin-right']
);
const videoTotalWidth = videoWidth + videoMarginRight;

function moveVideos(direction, maxIndex) {
    currentIndex += direction;
    if (currentIndex == -1) currentIndex = maxIndex - 1;
    else if (currentIndex == maxIndex) currentIndex = 0;

    let translateX = -100 * currentIndex;

    videos.forEach((video) => {
        video.style.transform = `translateX(${translateX}vw)`;
    });
}

// gallery-image
function EnlargeImage(index) {
    document.querySelector('#enlarged-image').src = srcList[index];
    document.querySelector('.enlarged-image').classList.remove('hidden');
}

function ReduceImage() {
    document.querySelector('.enlarged-image').classList.add('hidden');
}

let galleryImages = document.querySelectorAll('#image');
let srcList = [];

galleryImages.forEach((galleryImage) => {
    srcList.push(galleryImage.src);
});
document.querySelector('#close').addEventListener('click', ReduceImage);
