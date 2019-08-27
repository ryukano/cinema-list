import { movieListIsLoading, movieListFetchDataSuccess, movieListHasErrored } from './movieList';

export const GetMovieList = () => {
   return dispatch => {
      dispatch(movieListIsLoading(true));

      fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=819410248794bdbe3831b84d02afd0c0&language=ru`)
         .then(response => {
            if (!response.ok) {
               throw Error(response.statusText);
            }
            dispatch(movieListIsLoading(false));

            return response;
         })
         .then((response) => response.json())
         .then((movieList) => movieList.results)
         .then((movieList) => dispatch(movieListFetchDataSuccess(movieList)))
         .catch(() => dispatch(movieListHasErrored(true)));
   }
}
