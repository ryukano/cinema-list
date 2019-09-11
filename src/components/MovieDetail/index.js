import React, {Component} from 'react';

import { connect } from 'react-redux';

function MovieDetail( {match} ) {
   console.log(this.props.movieList);

   let movieInfo = this.props.movieList.find((movie) => movie.id === match.params.movieID);
   console.log(movieInfo);


      return(
         <div className="movie-box">
            {/* <p>{this.props.title}</p>
            <img className="title-img" src={this.props.imgSRC} alt={this.props.title}></img> */}

         </div>
      )
   }

let mapStateToProps = state => {
   return {
      movieList: state.getMovieListReducer.movieList
   }
}

export default connect(mapStateToProps, null)(MovieDetail);
