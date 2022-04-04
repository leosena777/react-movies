import api from "../config/api";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
}

export const getMovies = async (): Promise<any> => {
  const response = await api.get<Movie>(
    "/3/movie/popular?language=pt-BR&api_key=571b04398934c6b609af0820fb3f1122"
  );
  return response;
};

export const getMovieDetails = async (id: number): Promise<any> => {
  const response = await api.get<Movie>(
    `3/movie/${id}?language=pt-BR&api_key=571b04398934c6b609af0820fb3f1122`
  );
  return response;
};
