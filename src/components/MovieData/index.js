import React, {Component} from 'react';
import { connect } from 'react-redux';

import MovieBox from '../MovieBox';
import { fetchMovieList } from '../../store/actions/movieList'

class MovieData extends Component {

   componentDidMount() {
      this.props.onFetchMovieList(this.props.currentMoviesType, this.props.currentPage);
   }

   render() {
      const movieList = this.props.movieList;

      if (this.props.hasErrored) {
         return <p className="error-message">Sorry! There was an error loading the items</p>;
     }

     if (this.props.isLoading) {
         return <p className="loading-message">Loading…</p>;
     }
      return(

         <div className="movie-list">

            {movieList && movieList.map((item, key) =>
               <MovieBox key={item.id}
                      movieID={item.id}
                      releaseDate = {item.release_date}
                      title={item.title}
                      imgSRC = {`https://image.tmdb.org/t/p/w400${item.poster_path}`}
               ></MovieBox>
            )}
         </div>
      )
   }
}

let mapStateToProps = state => {
   return {
      movieList: state.getMovieListReducer.movieList,
      isLoading: state.getMovieListReducer.isLoading,
      hasErrored: state.getMovieListReducer.hasErrored,
      currentMoviesType: state.currentMoviesTypeReducer.currentMoviesType,
      currentPage: state.currentMoviesPageReducer.currentPage
   }
};

let mapDispatchToProps = (dispatch) => {
   return {
      onFetchMovieList: (type, page) => dispatch(fetchMovieList(type, page))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieData);
