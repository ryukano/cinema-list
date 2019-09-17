const initialState = {
   movieDetail: null,
   isLoading: false,
   hasErrored: false
}

export default function fetchMovieDetail(state = initialState, action) {
   switch (action.type) {
      case 'MOVIE_DETAIL_HAS_ERRORED':
         return {...state, isError: action.hasErrored}
      case 'MOVIE_DETAIL_IS_LOADING':
         return {...state, isLoading: action.isLoading}
      case 'MOVIE_DETAIL_FETCH_DATA_SUCCESS':
         return {...state, movieDetail: action.movieDetail}
      default: return state
   }
}
