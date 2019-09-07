import React, {Component} from 'react';
import { connect } from 'react-redux';

import {fetchMovieList} from '../../store/actions/movieList';
import {changeSelectedButton} from '../../modules/changeSelectedButton'


class Button extends Component {

   componentDidMount() {
      const defaultCheckedButton = document.getElementById(1);
      defaultCheckedButton.classList.add('b-selected');
   }

   render() {
      const buttonText = this.props.buttonName;
      const type = this.props.type;
      const id = this.props.id;
      return (
         <button  className="my-button"
                  id={id}
                  onClick={(e) => {
                     if (!e.target.classList.contains('b-selected')) {
                        this.props.onFetchMovieList(type);
                        changeSelectedButton(id);
                     } else e.preventDefault();

                  }
         }>{buttonText}</button>
      )
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      onFetchMovieList: (type) => dispatch(fetchMovieList(type))
   }
}

export default connect(null, mapDispatchToProps)(Button);
