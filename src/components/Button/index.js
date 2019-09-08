import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchMovieList } from '../../store/actions/movieList';
import { changeSelectedButton } from '../../modules/changeSelectedButton';
import { currentMoviesType } from '../../store/actions/currentMoviesType';
import { currentMoviesPage } from '../../store/actions/currentMoviesPage';


class Button extends Component {

   componentDidMount() {
      const defaultCheckedButton = document.getElementById(1);
      defaultCheckedButton.classList.add('b-selected');
   }

   render() {
      const buttonText = this.props.buttonName;
      const moviesType = this.props.moviesType;
      const id = this.props.id;
      return (
         <button  className="my-button"
                  id={id}
                  onClick={(e) => {
                     if (!e.target.classList.contains('b-selected')) {
                        this.props.onFetchMovieList(moviesType);
                        this.props.onCurrentMoviesType(moviesType);
                        this.props.onCurrentMoviesPage('1');
                        changeSelectedButton(id);
                     } else e.preventDefault();
                  }
         }>{buttonText}</button>
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
