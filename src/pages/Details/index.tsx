import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import { getMovieDetails, Movie } from "../../services/movies";
import {
  Container,
  Content,
  Image,
  Description,
  Title,
  BoxImage,
  Vote,
} from "./styles";

export default function Details() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      getMovieDetails(Number(params.id)).then((response) => {
        setMovie(response.data);
      });
    }
  }, [params]);

  return (
    <Container>
      {movie && (
        <>
          <BoxImage>
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            />
            <Title>{movie.title}</Title>
            <Vote> Nota: {movie.vote_average}</Vote>
          </BoxImage>
          <Content>
            <Description>{movie.overview}</Description>
            <br />
            <Button onClick={() => navigate(`/`)}>Voltar</Button>
          </Content>
        </>
      )}
    </Container>
  );
}
