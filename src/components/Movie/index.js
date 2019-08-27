import React from 'react';

function Movie(props) {
   return(
      <div className="movie-box">
         <p>{props.title}</p>
         <img src={props.imgSRC} alt={props.title}></img>
      </div>
   )
}

export default Movie;
