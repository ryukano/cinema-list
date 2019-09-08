export const GetMovieList = (moviesType, page) =>
   fetch(`https://api.themoviedb.org/3/movie/${moviesType}?api_key=819410248794bdbe3831b84d02afd0c0&language=ru&page=${page}`)
