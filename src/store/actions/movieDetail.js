import { GetMovieDetail } from "../../api/getMovieDetail";

export const movieDetailHasErrored = bool => {
   return {
      type: 'MOVIE_DETAIL_HAS_ERRORED',
      hasErrored: bool
   }
}

export const movieDetailIsLoading = bool => {
   return {
      type: 'MOVIE_DETAIL_IS_LOADING',
      isLoading: bool
   }
}

export const fetchMovieDetail = (movieID) => {
   return async dispatch => {
      try {
         dispatch(movieDetailIsLoading(true));
         const response = await GetMovieDetail(movieID);
         const movieDetail = await response.json();

         // console.log('movieDetail', movieDetail);
         dispatch(movieDetailFetchDataSuccess(movieDetail));
      }
      catch(error) {
         dispatch(movieDetailHasErrored(true))
      }
      finally {
         dispatch(movieDetailIsLoading(false))
      }
   }
}

export const movieDetailFetchDataSuccess = movieDetail => {
   return {
      type: 'MOVIE_DETAIL_FETCH_DATA_SUCCESS',
      movieDetail
   }
}
