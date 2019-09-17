import { combineReducers } from 'redux';

import getMovieListReducer from './getMovieListReducer';
import getMovieDetailReducer from './getMovieDetailReducer'
import currentMoviesTypeReducer from './currentMoviesTypeReducer';
import currentMoviesPageReducer from './currentMoviesPageReducer';

export default combineReducers({
   getMovieListReducer,
   getMovieDetailReducer,
   currentMoviesTypeReducer,
   currentMoviesPageReducer
});
