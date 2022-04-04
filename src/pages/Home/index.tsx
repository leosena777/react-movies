import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { getMovies, Movie } from "../../services/movies";
import { Grid } from "./styles";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies().then((response) => {
      setMovies(response.data.results);
    });
    return () => setMovies([]);
  }, []);

  return (
    <>
      <Header title="React Movies" />
      <Grid>
        {movies.map((movie) => (
          <Card
            key={movie.id}
            id={movie.id}
            title={movie.title}
            imageUrl={movie.poster_path}
          />
        ))}
        {movies.length === 0 && <h1>Não há filmes</h1>}
      </Grid>
    </>
  );
}
