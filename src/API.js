import axios from 'axios';

const BASE_URL = 'https://test.create.diagnal.com/data';
const IMAGES_BASE_URL = 'https://test.create.diagnal.com/images/';

export const getMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/page1.json`);
    return response.data.page['content-items'].content;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const getImageUrl = (posterImage) => {
  return `${IMAGES_BASE_URL}${posterImage}`;
};
