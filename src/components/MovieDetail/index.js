import React, {PureComponent} from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { fetchMovieDetail } from '../../store/actions/movieDetail';

class MovieDetail extends PureComponent {

   componentDidMount() {
      console.log('movieID', this.props.match.params.movieID);
      this.props.onFetchMovieDetail(this.props.match.params.movieID);
   }

      render() {
         let movieDetail = this.props.movieDetail;
         console.log(movieDetail);
         console.log('this movie detail', this.props.movieDetail);

         if (this.props.isLoading || movieDetail == null) {
               return <p className="loading-message">Loading…</p>;
         }

         if (this.props.hasErrored) {
            return <p className="error-message">Sorry! There was an error loading the movie</p>;
      }

         if (movieDetail.status_code === 34) {
            return <p className="error-message">Sorry! There was an error loading the movie - movie wasn't found</p>;
      }

         if (movieDetail) {
            return (
               <div className="movie-detail">

                  <p className="movie-title">{movieDetail.title}</p>
                  <p>{movieDetail.vote_average}</p>
                  <img className="movie-image" src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`} alt={movieDetail.title}></img>
                  {/* <img className="image-details" src={`https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}`} alt={movieInfo.title}></img> */}
                  <Link to={`/${this.props.currentMoviesType}/${this.props.currentPage}`}>Назад</Link>
                  <p>{movieDetail.overview}</p>

               </div>
            )
         }
      }
   }

let mapStateToProps = state => {
   return {
      movieDetail: state.getMovieDetailReducer.movieDetail,
      isLoading: state.getMovieDetailReducer.isLoading,
      hasErrored: state.getMovieDetailReducer.hasErrored
   }
};

let mapDispatchToProps = (dispatch) => {
   return {
      onFetchMovieDetail: (movieID) => dispatch(fetchMovieDetail(movieID))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
