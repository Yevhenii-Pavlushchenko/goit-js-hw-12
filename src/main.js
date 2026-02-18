import { perPage, getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  loadBtn,
  showLoader,
  showLoadMoreButton,
  clearGallery,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const outputTotal = document.querySelector('.output-total');

form.addEventListener('submit', onSubmitForm);
loadBtn.addEventListener('click', onLoadMoreClick);
let inputValue = '';
let pageNum = 1;
let totalPages = 0;
let imagesCount = 0;

hideLoader();

async function onSubmitForm(event) {
  event.preventDefault();
  imagesCount = 0;
  pageNum = 1;
  hideLoadMoreButton();
  clearGallery();

  inputValue = form.elements['search-text'].value.trim();
  try {
    if (inputValue === '') {
      iziToast.warning({
        title: 'warning',
        position: 'topRight',
        message: 'Please enter a search query!',
      });

      outputTotal.textContent = ``;

      hideLoadMoreButton();
      hideLoader();
      clearGallery();
      return;
    }

    showLoader();
    const { hits, totalHits } = await getImagesByQuery(inputValue, pageNum);
    totalPages = Math.ceil(totalHits / perPage);

    imagesCount += hits.length;
    if (imagesCount > totalHits) {
      imagesCount = totalHits;
    }
    outputTotal.textContent = `Total images: ${imagesCount}/${totalHits}`;

    if (!hits || hits.length === 0) {
      console.log(hits);
      iziToast.show({
        message:
          ' Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: `#4e75ff`,
        messageColor: `#ffffff`,
        position: `topRight`,
      });
      hideLoader();
      return;
    }
    createGallery(hits);
    if (pageNum < totalPages) {
      showLoadMoreButton();
    }
  } catch (error) {
    hideLoadMoreButton();
    console.log(error.message);
  } finally {
    form.elements['search-text'].value = '';
    hideLoader();
  }
}

async function onLoadMoreClick() {
  showLoader();
  try {
    pageNum += 1;
    const { hits, totalHits } = await getImagesByQuery(inputValue, pageNum);

    imagesCount += hits.length;
    if (imagesCount > totalHits) {
      imagesCount = totalHits;
    }
    outputTotal.textContent = `Total images: ${imagesCount}/${totalHits}`;
    if (pageNum < totalPages) {
      showLoadMoreButton();
    } else {
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        backgroundColor: `#4e75ff`,
        messageColor: `#ffffff`,
        position: `topRight`,
      });
      hideLoadMoreButton();
    }

    createGallery(hits);
    scrollDownOnePage();
    hideLoader();
  } catch (error) {
    console.log(error);
  }
}
function scrollDownOnePage() {
  window.scrollBy({
    top: 1200,
    behavior: 'smooth',
  });
}

const scrollTopBtn = document.querySelector('#scrollToTop');

// Скрол вгору при натисканні
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add('is-visible');
  } else {
    scrollTopBtn.classList.remove('is-visible');
  }
});
