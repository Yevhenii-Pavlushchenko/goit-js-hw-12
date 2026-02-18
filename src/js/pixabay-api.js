import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '54685682-80977b0b5ca1319a1902ced87';
export const perPage = 15;
axios.defaults.baseURL = BASE_URL;

export async function getImagesByQuery(query, page) {
  const response = await axios({
    url: BASE_URL,
    method: 'get',
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: perPage,
    },
  });
  return response.data;
}
