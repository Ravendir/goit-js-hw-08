// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const img = galleryItems.map(image => {
  return `
  <a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`;
});
gallery.insertAdjacentHTML('beforeend', img.join(''));

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});
