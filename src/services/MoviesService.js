import axios from "axios";
const API_KEY = 'f0e87f0332764ee09a3976b16c94c83b';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`

export class MoviesService{
    static getMovies(){
        return axios(withBaseUrl('movie/popular'));
    }

    static getMovieById(movie_id){
        return axios(withBaseUrl(`movie/${movie_id}`));
    }
}
  

