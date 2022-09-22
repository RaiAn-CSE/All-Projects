const images = [
    'images/1.png',
    'images/2.png',
    'images/3.png',
    'images/4.jpg'
]

let imgIndex = 0;
img = document.getElementById('img-id');
setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    imgLink = images[imgIndex];
    console.log(imgLink);
    img.setAttribute('src', imgLink);
    imgIndex++;
}, 1000);