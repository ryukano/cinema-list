import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MovieDetail from '../MovieDetail';

function Movie(props) {
   return(
      <div className="movie-box">
         <p>{props.title}</p>
         <img className="title-img" src={props.imgSRC} alt={props.title}></img>
         <Link to={`/${props.currentMoviesType}/${props.currentPage}/${props.movieID}`}>
            <p>Подробнее</p>
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

export default connect(mapStateToProps, null)(Movie);
