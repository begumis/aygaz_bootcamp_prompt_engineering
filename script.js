const images = document.querySelectorAll('.image-container img');
let currentImageIndex = 0;
const totalImages = images.length;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % totalImages;
  showImage(currentImageIndex);
}

function previousImage() {
  currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
  showImage(currentImageIndex);
}

document.addEventListener('DOMContentLoaded', () => {
  showImage(currentImageIndex);
  document.querySelector('.prev').addEventListener('click', previousImage);
  document.querySelector('.next').addEventListener('click', nextImage);
});
