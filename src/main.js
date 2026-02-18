import { perPage, request } from './js/pixabay-api';
import {
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  loadBtn,
  showLoader,
  showLoadMoreButton,
} from './js/render-functions';
import { clearGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const jsImgTotal = document.querySelector('.img-total');

form.addEventListener('submit', onSubmitForm);
loadBtn.addEventListener('click', onLoadMoreClick);
let resInput = '';
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

  resInput = form.elements['search-text'].value.trim();
  try {
    if (resInput === '') {
      iziToast.warning({
        title: 'warning',
        position: 'topRight',
        message: 'Please enter a search query!',
      });

      jsImgTotal.textContent = ``;

      hideLoadMoreButton();
      hideLoader();
      clearGallery();
      return;
    }

    showLoader();
    const { hits, totalHits } = await request(resInput, pageNum);
    totalPages = Math.ceil(totalHits / perPage);

    imagesCount += hits.length;
    if (imagesCount > totalHits) {
      imagesCount = totalHits;
    }
    jsImgTotal.textContent = `Total images: ${imagesCount}/${totalHits}`;

    if (!hits || hits.length === 0) {
      console.log(hits);
      iziToast.show({
        message:
          ' Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: `#4e75ff`,
        messageColor: `#ffffff`,
        position: `topRight`,
        maxWidth: `432px`,
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
    // iziToast.show({
    //   message: 'Please enter a search query!',
    //   backgroundColor: `#4e75ff`,
    //   messageColor: `#ffffff`,
    //   position: `topRight`,
    //   maxWidth: `432px`,
    // });
  } finally {
    form.elements['search-text'].value = '';
    hideLoader();
  }
}

async function onLoadMoreClick() {
  showLoader();
  try {
    pageNum += 1;
    const { hits, totalHits } = await request(resInput, pageNum);

    imagesCount += hits.length;
    if (imagesCount > totalHits) {
      imagesCount = totalHits;
    }
    jsImgTotal.textContent = `Total images: ${imagesCount}/${totalHits}`;
    if (pageNum < totalPages) {
      showLoadMoreButton();
    } else {
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        backgroundColor: `#4e75ff`,
        messageColor: `#ffffff`,
        position: `topRight`,
        maxWidth: `432px`,
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
