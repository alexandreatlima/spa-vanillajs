export async function fetchDataFromTMDB(id) {
  if (id) {
    return await fetchMovieDetails(id);
  }
  return await fetchMovies();
}

async function fetchMovieDetails(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=78052325e6ebff41070ea5416ffd646d`
  );
  const data = await response.json();
  return data;
}

async function fetchMovies() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=78052325e6ebff41070ea5416ffd646d"
  );
  const data = await response.json();
  return data.results;
}
