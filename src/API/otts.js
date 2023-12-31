export async function otts(ottId) {
  return await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko&sort_by=first_air_date.desc&page=1&timezone=Asia%2FSeoul&include_null_first_air_dates=false&with_watch_providers=${ottId}&watch_region=KR&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
  ).then((res) => res.json());
}
