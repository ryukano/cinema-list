export const GetMovieDetail = (movieID) =>
   fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=819410248794bdbe3831b84d02afd0c0&language=ru`)
