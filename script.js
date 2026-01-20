const images = ["./images/image.jpg", "./images/image.jpg", "./images/image.jpg"];
let n = 0;

// Initial image
document.getElementById('slideImage').src = images[n];

// Auto slideshow
setInterval(() => {
  nextImage();
}, 5000);

// Manual Slide Controls
document.getElementById('prevBtn').addEventListener('click', prevImage);
document.getElementById('nextBtn').addEventListener('click', nextImage);

function prevImage() {
  n = (n - 1 + images.length) % images.length;
  document.getElementById('slideImage').src = images[n];
}

function nextImage() {
  n = (n + 1) % images.length;
  document.getElementById('slideImage').src = images[n];
}
