import React from 'react';

function Movie(props) {
   return(
      <div className="movie-box">
         <p>{props.title}</p>
         <img className="title-img" src={props.imgSRC} alt={props.title}></img>
      </div>
   )
}

export default Movie;
