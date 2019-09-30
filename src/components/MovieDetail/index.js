import React, {PureComponent} from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { fetchMovieDetail } from '../../store/actions/movieDetail';

import transformDate from '../../modules/transform_date';

class MovieDetail extends PureComponent {

   componentDidMount() {
      this.props.onFetchMovieDetail(this.props.match.params.movieID);
   }

   render() {
      const movieDetail = this.props.movieDetail;

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

               <div className="movie-detail-first-block">

                  <img className="movie-detail-poster" src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`} alt={movieDetail.title}></img>

                  <div className="movie-detail-info">

                     <p className="movie-detail-title">{movieDetail.title.toUpperCase()}</p>

                     <div className="movie-detail-production-counties">
                        <p>PRODUCTION COUNTRIES: </p>
                        {movieDetail.production_countries.map(country => (
                           <p className="movie-detail-production-counties-country" key={country.iso_3166_1}>{country.name}</p>
                        ))}
                     </div>

                     <p className="movie-detail-release-date">RELEASE DATE: {transformDate(movieDetail.release_date)}</p>
                     <p className="movie-detail-average">AVARAGE RATING: {movieDetail.vote_average}/10</p>

                     <div className="movie-detail-genres">
                        <p>GENRES: </p>
                        {movieDetail.genres.map(genre => (
                           <p className="movie-detail-genres-genre" key={genre.id}>{genre.name}</p>
                        ))}
                     </div>

                     <p className="movie-detail-tagline">&#xab;{movieDetail.tagline}&#xbb;</p>
                     <p className="movie-detail-overview">{movieDetail.overview}</p>
                     <Link className="my-button movie-link-to-list" to={`/${this.props.currentMoviesType}/${this.props.currentPage}`}>&#xab; Movie List</Link>

                  </div>
               </div>
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
