import axios from 'axios';

const API_KEY = '34187261-edb3bdfe414ee3b7adebeccc5';
const BASE_URL = 'https://pixabay.com/api/';

const pixabayService = {
  searchImages: async (query, page = 1, perPage = 12) => {
    try {
      const response = await axios.get(
        `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
      );

      const { hits, totalHits } = response.data;

      if (!Array.isArray(hits)) {
        console.log('Invalid response format. Hits should be an array.');
        return {
          images: [],
          totalHits: 0,
        };
      }

      if (hits.length === 0) {
        console.log('Sorry, there are no images matching your request...');
      }

      const modifiedHits = hits.map(
        ({ id, tags, webformatURL, largeImageURL }) => ({
          id,
          tags,
          webformatURL,
          largeImageURL,
        })
      );

      return {
        images: modifiedHits,
        totalHits,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default pixabayService;
