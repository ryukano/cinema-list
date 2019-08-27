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

export const movieListFetchDataSuccess = movieList => {
   return {
      type: 'MOVIELIST_FETCH_DATA_SUCCESS',
      movieList
   }
}
