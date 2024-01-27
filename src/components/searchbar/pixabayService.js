// components/searchbar/pixabayService.js
import axios from 'axios';

const apiKey = '40850281-d34ea881c994bc1ff48fafec7';
const baseUrl = 'https://pixabay.com/api/';

const pixabayService = {
  search: async query => {
    try {
      const response = await axios.get(
        `${baseUrl}?q=${query}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      );
      return response.data.hits;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  },
};

export default pixabayService;
