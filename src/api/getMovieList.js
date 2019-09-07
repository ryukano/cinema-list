export const GetMovieList = (type, page) =>
   fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=819410248794bdbe3831b84d02afd0c0&language=ru&page=${page}`)
