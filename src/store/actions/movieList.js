import { GetMovieList } from "../../api/getMovieList";

export const movieListHasErrored = bool => {
   return {
      type: 'MOVIELIST_HAS_ERRORED',
      hasErrored: bool
   }
}

export const movieListIsLoading = bool => {
   return {
      type: 'MOVIELIST_IS_LOADING',
      isLoading: bool
   }
}

export const fetchMovieList = (moviesType = 'now_playing', page = '1') => {
   return async dispatch => {
      try {
         dispatch(movieListIsLoading(true));
         const response = await GetMovieList(moviesType, page);
         const movieList = await response.json();

         console.log('movieList.results', movieList.results);
         dispatch(movieListFetchDataSuccess(movieList.results));
      }
      catch(error) {
         dispatch(movieListHasErrored(true))
      }
      finally {
         dispatch(movieListIsLoading(false))
      }
   }
}

export const movieListFetchDataSuccess = movieList => {
   return {
      type: 'MOVIELIST_FETCH_DATA_SUCCESS',
      movieList
   }
}
