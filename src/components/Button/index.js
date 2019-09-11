import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchMovieList } from '../../store/actions/movieList';
import { currentMoviesType } from '../../store/actions/currentMoviesType';
import { currentMoviesPage } from '../../store/actions/currentMoviesPage';


class Button extends Component {

   render() {

      return (
         <button
                  className={this.props.className}
                  onClick={(e) => {
                     if (!e.target.classList.contains('b-selected')) {
                        this.props.onFetchMovieList(this.props.moviesType);
                        this.props.onCurrentMoviesType(this.props.moviesType);
                        this.props.onCurrentMoviesPage('1');
                     } else e.preventDefault();
                  }
         }>{this.props.buttonName}</button>
      )
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      onFetchMovieList: (moviesType) => dispatch(fetchMovieList(moviesType)),
      onCurrentMoviesType: (moviesType) => dispatch(currentMoviesType(moviesType)),
      onCurrentMoviesPage: (currentPage) => dispatch(currentMoviesPage(currentPage))
   }
}

export default connect(null, mapDispatchToProps)(Button);
