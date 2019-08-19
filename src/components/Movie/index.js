import React from 'react';

function Movie(props) {
   return(
      <div>
         <p>{props.title}</p>
         <img src={props.imgSRC} alt={props.title}></img>
      </div>
   )
}

export default Movie;
