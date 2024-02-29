// StackOverflowAPI.js
import axios from 'axios';

const API_BASE_URL = 'https://api.stackexchange.com/2.3';

const fetchStackOverflowData = async (tag) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/questions`, {
      params: {
        site: 'stackoverflow',
        tagged: tag,
        order: 'desc',
        sort: 'activity',
        filter: 'withbody',
        key: encodeURIComponent('GNskWmZQd9RXACD7bbWjzg(('),
      },
    });

    console.log('Stack Overflow API Response:', response.data); // Log the response for debugging

    return response.data.items; 
  } catch (error) {
    console.error('Error fetching Stack Overflow data:', error);
  
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Error Response Status:', error.response.status);
      console.error('Error Response Data:', error.response.data);
      console.error('Error Response Headers:', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received. Request:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error setting up the request:', error.message);
    }
  
    return [];
  }
};

export default fetchStackOverflowData;
