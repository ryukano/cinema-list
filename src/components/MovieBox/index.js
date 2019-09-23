import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import transformDate from '../../modules/transform_date';

function Movie(props) {
   return(
      <div className="movie-box">

         <img className="title-img" src={props.imgSRC} alt={props.title}></img>
         <p className="movie-title">{props.title.toUpperCase()}</p>

         <div>
            <p className="movie-releaseDate">RELEASE DATE: {transformDate(props.releaseDate)} </p>
            <Link className="link-to-movie-info" to={`/${props.currentMoviesType}/${props.currentPage}/${props.movieID}`}>
               <p>READ MORE &#187;</p>
            </Link>
         </div>

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
