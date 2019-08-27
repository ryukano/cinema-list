const initialState = {
   movieList: null,
   isLoading: false,
   hasErrored: false
}

export default function fetchMovieList(state = initialState, action) {
   switch (action.type) {
      case 'ITEMS_HAS_ERRORED':
         return {...state, isError: action.hasErrored}
      case 'MOVIELIST_IS_LOADING':
         return {...state, isLoading: action.isLoading}
      case 'MOVIELIST_FETCH_DATA_SUCCESS':
         return {...state, movieList: action.movieList}
      default: return state
   }
}
