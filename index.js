const axios = require('axios');

class LyricsAPI {
  constructor() {
    this.baseURL = 'https://api.zaroffc.xyz/api/search/lyrics';
  }

  /**
   * Search lyrics by title and/or artist
   * @param {Object} options - Search options
   * @param {string} [options.title] - Song title
   * @param {string} [options.artist] - Artist name
   * @returns {Promise<Object>} - API response
   */
  async search({ title = '', artist = '' }) {
    if (!title && !artist) {
      throw new Error('Please provide at least a title or artist');
    }

    try {
      const response = await axios.get(this.baseURL, {
        params: { title, artist },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch lyrics: ${error.message}`);
    }
  }
}

module.exports = new LyricsAPI();
