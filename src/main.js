import { request } from './js/pixabay-api';
import { createGallery } from './js/render-functions';
import { clearGallery } from './js/render-functions';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const resInput = new FormData(form).get('search-text').trim();
  if (resInput === '') {
    iziToast.show({
      message: 'Please enter a search query!',
      backgroundColor: `#EF4040`,
      messageColor: `#ffffff`,
      position: `topRight`,
      maxWidth: `432px`,
    });

    return;
  }

  clearGallery();
  showLoader();

  request(resInput)
    .then(({ hits }) => {
      if (!hits || hits.length === 0) {
        iziToast.show({
          message:
            ' Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: `#EF4040`,
          messageColor: `#ffffff`,
          position: `topRight`,
          maxWidth: `432px`,
        });

        return;
      }
      createGallery(hits);
    })
    .catch(error => {
      console.log(error.message);
      iziToast.show({
        message:
          'Sorry, but there was an error processing your request. Please try again.',
        backgroundColor: `#EF4040`,
        messageColor: `#ffffff`,
        position: `topRight`,
        maxWidth: `432px`,
      });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
}
