import React, {Component} from 'react';
import { connect } from 'react-redux';

import Movie from '../Movie';
import {GetMovieList} from '../../store/actions/getMovieList'


class MovieData extends Component {

   componentDidMount() {
      this.props.onGetMovieList();
   }

   render() {
      console.log(this.props)
      let movieList = this.props.movieList;
      console.log(movieList);

      if (this.props.hasErrored) {
         return <p>Sorry! There was an error loading the items</p>;
     }

     if (this.props.isLoading) {
         return <p>Loading…</p>;
     }
      return(
         <div className="movie-list">

            {/* {movieList && movieList.map((item, key) =>
               <Movie key={item.id}
                      title={item.title}
                      imgSRC = {`https://image.tmdb.org/t/p/w200${item.poster_path}`}
               ></Movie>
            )} */}
         </div>
         )
   }
}

let mapStateToProps = state => {
   return {
      movieList: state.movieList,
      isLoading: state.isLoading,
      hasErrored: state.hasErrored
   }
};

let mapDispatchToProps = (dispatch) => {
   return {
      onGetMovieList: () => {dispatch(GetMovieList());
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieData);
