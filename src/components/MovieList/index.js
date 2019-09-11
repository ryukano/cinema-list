import React, {Component} from 'react';

import MovieData from '../MovieData';
import MovieTypesButtons from '../MoviesTypeButtons';
import NavArrow from '../NavArrow';
import CurrentPage from '../CurrentPage';

class MovieList extends Component {

   render() {

      return(

         <div className="content">

            <MovieTypesButtons/>

            <MovieData/>

            <div className="naw-arrows">
               <NavArrow navArrowText="previus page" navDirection="previus"></NavArrow>
               <CurrentPage/>
               <NavArrow navArrowText="next page" navDirection="next"></NavArrow>
            </div>

         </div>

      )
   }
}

export default MovieList;
