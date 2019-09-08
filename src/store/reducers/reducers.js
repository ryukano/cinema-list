import { combineReducers } from 'redux';

import getMovieListReducer from './getMovieListReducer';
import currentMoviesTypeReducer from './currentMoviesTypeReducer';
import currentMoviesPageReducer from './currentMoviesPageReducer'

export default combineReducers({
   getMovieListReducer,
   currentMoviesTypeReducer,
   currentMoviesPageReducer
});
