import { useEffect, useState } from "react";
import { MoviesService } from "../services/MoviesService";
import { useParams } from "react-router-dom";

export const MovieDetail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);

  const fetchMovie = async () => {
    const { data } = await MoviesService.getMovieById(id);
    setMovie(data);
    console.log(data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <h1>{movie.title}</h1>
      <article>{movie.overview}</article>
    </>
  );
};


