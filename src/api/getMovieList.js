import {API_KEY} from './config';

export const GetMovieList = (moviesType, page) =>
   fetch(`https://api.themoviedb.org/3/movie/${moviesType}?api_key=${API_KEY}&language=en-US&page=${page}`)
