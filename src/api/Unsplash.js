import axios from 'axios';

export default axios.create({

  baseURL :'https://api.unsplash.com',
  headers: {
  Authorization :
  'Client-ID c24a057551fb0696570dfd767edfe9416930a4deff7fb4baa27683ef42e29b59'
   }
});
