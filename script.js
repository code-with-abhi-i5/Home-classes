const images = ["./images/2.jpg", "./images/3.jpg", "./images/1.webp"];
let n = 0;

// Initial image
document.getElementById('slideImage').src = images[n];

// Auto slideshow
setInterval(() => {
  nextImage();
}, 5000);

// Show/hide sidebar
document.getElementById('cross').style.visibility = "hidden";
document.getElementById('ham').addEventListener('click', () => {
  document.getElementsByClassName('menubar')[0].classList.remove('sidebargo');
  document.getElementById('cross').style.visibility = "visible";
  document.getElementById('ham').style.visibility = "hidden";
});

document.getElementById('cross').addEventListener('click', () => {
  document.getElementsByClassName('menubar')[0].classList.add('sidebargo');
  document.getElementById('ham').style.visibility = "visible";
  document.getElementById('cross').style.visibility = "hidden";
});

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
