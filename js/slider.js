const images = [
    'images/jacket-1.png',
    'images/jacket-2.png',
    'images/jacket-3.png',
    'images/jacket-4.png',
    'images/jacket-5.png',
    'images/jacket-6.png',
]
let imgIndex = 0;
const img = document.getElementById('carousel-img')
setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgLink = images[imgIndex]
    img.setAttribute('src', imgLink)
    imgIndex++;
}, 1000)