import axios from 'axios';

class APIService {
  baseUrl = "https://youtube-data8.p.rapidapi.com/channel";
  apiKey = 'SIGN-UP-FOR-KEY'; // Replace with your RapidAPI key

  async get(endpoint, params = {}) {
    try {
      const response = await axios.get(`${this.baseUrl}/${endpoint}`, {
        headers: {
          'X-RapidAPI-Key': this.apiKey,
          'X-RapidAPI-Host': 'youtube-data8.p.rapidapi.com',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        params: params,
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        // Request was made and server responded with a status code
        console.error(`Error ${error.response.status}: ${error.response.data}`);
      } else if (error.request) {
        // Request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request
        console.error('Error setting up request:', error.message);
      }
      throw error;
    }
  }
}

export default APIService;
