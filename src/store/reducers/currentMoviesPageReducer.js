const initialState = {
   currentPage: "1"
}

export default function currentMoviesPageReducer(state = initialState, action) {
   switch (action.type) {
      case 'CURRENT_MOVIES_PAGE':
         return {...state, currentPage: action.currentPage}
      default: return state
   }
}
