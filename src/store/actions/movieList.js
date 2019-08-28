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

export const fetchMovieList = () => {
   return dispatch => {
      dispatch(movieListIsLoading(true));
      GetMovieList()
         .then(response => {
            if (!response.ok) {
               throw Error(response.statusText);
            }
            response.json()
         })
         .then((movieList) => {
            dispatch(movieListFetchDataSuccess(movieList))
            })
         .catch(() => dispatch(movieListHasErrored(true)))
         .finally(() => dispatch(movieListIsLoading(false)))
   }
}


export const movieListFetchDataSuccess = movieList => {
   return {
      type: 'MOVIELIST_FETCH_DATA_SUCCESS',
      movieList
   }
}
