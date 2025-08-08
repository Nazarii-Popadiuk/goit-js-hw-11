import { getImagesByQuery } from "./js/pixabay-api";
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
} from "./js/render-functions.js";

import izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const query = e.target.elements['search-text'].value.trim();
    if (!query) {
        iziToast.warning({
            title: 'Attention',
            message: 'Please enter a search query!',
            position: 'topRight',
        });
        return;
    }
    clearGallery();
    showLoader();

    try {
        const data = await getImagesByQuery(query);

        if (data.hits.length === 0) {
            iziToast.error({
                title: 'No results',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            })
            return;
        }
        createGallery(data.hits);
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Something went wrong. Please try again later.',
            position: 'topRight',
        });
    
    } finally {
        hideLoader();
    }

});