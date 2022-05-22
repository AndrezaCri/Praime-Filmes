import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=d4731f525a4f66b129a5e4c237aa579c&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3//movie/now_playing?api_key=d4731f525a4f66b129a5e4c237aa579c&language=pt-BR'
});

export default api;