import React from 'react';
import Movie from './Movie'

class MovieList extends React.Component {

   state = {
      list: null
   }

   gettingData = async () => {
      let response = await
      fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=819410248794bdbe3831b84d02afd0c0&language=ru`)
      if (response.ok) {
         const allData = await response.json();
         const array = allData.results.map(arr => {return arr});
         this.setState({list: array});
        }
      }

   componentDidMount() {
      this.gettingData();
   }

   render() {
      let list = this.state.list;
      return(
         <div>
            {list && list.map((item, key) =>
               <Movie key={item.id}
                      title={item.title}
                      imgSRC = {`https://image.tmdb.org/t/p/w200${item.poster_path}`}
               ></Movie>
            )}
         </div> )
   }
}

export default MovieList;
