import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import MovieData from '../MovieData';
import MovieTypesButtons from '../MoviesTypeButtons';
import NavArrow from '../NavArrow';
import CurrentPage from '../CurrentPage';

class MovieList extends Component {

   render() {
      console.log('currentMoviesType ', this.props.currentMoviesType);
      console.log('currentPage ', this.props.currentPage);

      return(

         <div className="content">

            <MovieTypesButtons/>

            <MovieData/>

            <div className="naw-arrows">
               <div>
                  <NavArrow navArrowText="&#xab; PREVIUS PAGE" navDirection="previus"/>
                  <Redirect to={`/${this.props.currentMoviesType}/${this.props.currentPage}`}/>
               </div>

               <CurrentPage/>

               <div>
                  <NavArrow navArrowText="NEXT PAGE &#xbb;" navDirection="next"/>
                  <Redirect to={`/${this.props.currentMoviesType}/${this.props.currentPage}`}/>
               </div>

            </div>

         </div>

      )
   }
}

let mapStateToProps = state => {
   return {
      currentMoviesType: state.currentMoviesTypeReducer.currentMoviesType,
      currentPage: state.currentMoviesPageReducer.currentPage
   }
};

export default connect(mapStateToProps, null)(MovieList);
