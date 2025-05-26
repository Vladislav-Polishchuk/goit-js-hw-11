import axios from 'axios';

const API_KEY = '50496804-e1c6d45c14416878311a59d2c';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
