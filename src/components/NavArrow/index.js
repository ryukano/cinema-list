import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchMovieList } from '../../store/actions/movieList';
import { currentMoviesPage } from '../../store/actions/currentMoviesPage';

class NavArrow extends Component {

   render() {
      const {navArrowText, navDirection, currentMoviesType} = this.props;
      let {currentPage} = this.props;

      return(
         <button className="arrow"
                  onClick={(e) => {
                     if (navDirection === 'next') {
                        ++currentPage;
                        this.props.onCurrentMoviesPage(currentPage);
                        this.props.onFetchMovieList(currentMoviesType, currentPage);
                        } else if (currentPage > 1) {
                           --currentPage;
                           this.props.onCurrentMoviesPage(currentPage);
                           this.props.onFetchMovieList(currentMoviesType, currentPage);
                           } else {e.preventDefault()}
                        }
         }>{navArrowText}</button>
      )
   }
}

let mapStateToProps = state => {
   return {
      currentMoviesType: state.currentMoviesTypeReducer.currentMoviesType,
      currentPage: state.currentMoviesPageReducer.currentPage
   }
};

let mapDispatchToProps = (dispatch) => {
   return {
      onFetchMovieList: (moviesType, page) => dispatch(fetchMovieList(moviesType, page)),
      onCurrentMoviesPage: (currentPage) => dispatch(currentMoviesPage(currentPage))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavArrow);
