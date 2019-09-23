import {API_KEY} from './config';

export const GetMovieDetail = (movieID) =>
   fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`)
