const initialState = {
   currentMoviesType: "now_playing"
}

export default function currentMoviesTypeReducer(state = initialState, action) {
   switch (action.type) {
      case 'CURRENT_MOVIES_TYPE':
         return {...state, currentMoviesType: action.currentMoviesType}
      default: return state
   }
}
