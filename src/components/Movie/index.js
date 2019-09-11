import React from 'react';
import { Link } from 'react-router-dom';

function Movie(props) {
   return(
      <div className="movie-box">
         <p>{props.title}</p>
         <img className="title-img" src={props.imgSRC} alt={props.title}></img>
         <Link to={`/${props.movieID}`}>
            <p>Подробнее</p>
         </Link>
      </div>
   )
}

export default Movie;
