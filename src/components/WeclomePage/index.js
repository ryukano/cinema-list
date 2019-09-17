import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function WelcomePage(props) {
   return(
      <div>
         <p>Hello world</p>
         <Link to={`/${props.currentMoviesType}/${props.currentPage}`}>
            <p>Перейти к списку фильмов</p>
         </Link>
      </div>
   )
}

let mapStateToProps = state => {
   return {
      currentMoviesType: state.currentMoviesTypeReducer.currentMoviesType,
      currentPage: state.currentMoviesPageReducer.currentPage
   }
};

export default connect(mapStateToProps, null)(WelcomePage);
