// Task1_Image_Gallery

const images = [
  { src: 'images/img1.jpg', alt: 'Image 1' },
  { src: 'images/img2.jpg', alt: 'Image 2' },
  { src: 'images/img3.jpg', alt: 'Image 3' },
  { src: 'images/img4.jpg', alt: 'Image 4' }
];
let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  document.getElementById('lightbox').style.display = 'flex';
  showImage(currentIndex);
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function changeImage(n) {
  currentIndex = (currentIndex + n + images.length) % images.length;
  showImage(currentIndex);
}

function showImage(index) {
  const img = images[index];
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('caption').textContent = img.alt;
}
