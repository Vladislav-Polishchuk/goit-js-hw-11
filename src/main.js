import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';

const form = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');
const loadingText = document.querySelector('.loading-text');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = input.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
    });
    return;
  }

  clearGallery();
  showLoader();
  loadingText.hidden = false;

  try {
    const data = await getImagesByQuery(query);
    hideLoader();
    loadingText.hidden = true;

    if (data.hits.length === 0) {
      iziToast.info({
        title: 'No results',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    hideLoader();
    loadingText.hidden = true;

    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
    console.error(error);
  }
});
