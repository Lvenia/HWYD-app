import axios from 'axios';

//create and export the axios instance:

export default axios.create({
  baseURL: 'https://quote-garden.herokuapp.com/api/v2/'
});