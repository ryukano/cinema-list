import React, {Component} from 'react';
import { connect } from 'react-redux';

import Movie from '../Movie';
import {fetchMovieList} from '../../store/actions/movieList'


class MovieData extends Component {

   componentDidMount() {
      this.props.onFetchMovieList();
   }

   render() {
      let movieList = this.props.movieList;

      if (this.props.hasErrored) {
         return <p className="error-message">Sorry! There was an error loading the items</p>;
     }

     if (this.props.isLoading) {
         return <p className="loading-message">Loading…</p>;
     }
      return(
         <div className="movie-list">

            {movieList && movieList.map((item, key) =>
               <Movie key={item.id}
                      title={item.title}
                      imgSRC = {`https://image.tmdb.org/t/p/w200${item.poster_path}`}
               ></Movie>
            )}
         </div>
         )
   }
}

let mapStateToProps = state => {
   return {
      movieList: state.getMovieListReducer.movieList,
      isLoading: state.getMovieListReducer.isLoading,
      hasErrored: state.getMovieListReducer.hasErrored
   }
};

let mapDispatchToProps = (dispatch) => {
   return {
      onFetchMovieList: (type) => dispatch(fetchMovieList(type))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieData);
