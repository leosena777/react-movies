import { screen, render } from "@testing-library/react";
import Home from "./index";

import MockAdapter from "axios-mock-adapter";
import api from "../../config/api";

var mockAxios = new MockAdapter(api);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Home", () => {
  it("should render correctly when not has movies", async () => {
    mockAxios
      .onGet(
        "/3/movie/popular?language=pt-BR&api_key=571b04398934c6b609af0820fb3f1122"
      )
      .reply(200, {
        results: [],
      });

    render(<Home />);
    const notFoundMovies = await screen.findByText("Não há filmes");
    expect(notFoundMovies).toBeInTheDocument();
  });

  it("should render correctly when load movies", async () => {
    mockAxios
      .onGet(
        "/3/movie/popular?language=pt-BR&api_key=571b04398934c6b609af0820fb3f1122"
      )
      .reply(200, {
        results: mockMovies,
      });

    render(<Home />);

    const movie1 = await screen.findByText("Homem-Aranha: Sem Volta Para Casa");
    expect(movie1).toBeInTheDocument();

    const movie2 = await screen.findByText("Red: Crescer é Uma Fera");
    expect(movie2).toBeInTheDocument();
  });
});

const mockMovies = [
  {
    title: "Homem-Aranha: Sem Volta Para Casa",
    adult: false,
    backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    genre_ids: [28, 12, 878],
    id: 634649,
    original_language: "en",
    original_title: "Spider-Man: No Way Home",
    overview:
      "Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha.",
    popularity: 8426.2,
    poster_path: "/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
    release_date: "2021-12-15",
    video: false,
    vote_average: 8.2,
    vote_count: 10923,
  },
  {
    title: "Red: Crescer é Uma Fera",
    adult: false,
    backdrop_path: "/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg",
    genre_ids: [16, 10751, 35, 14],
    id: 508947,
    original_language: "en",
    original_title: "Turning Red",
    overview:
      "Mei, de treze anos, está experimentando a estranheza de ser uma adolescente com uma reviravolta – quando ela fica muito animada, ela se transforma em um panda vermelho gigante.",
    popularity: 8326.002,
    poster_path: "/725WE0Qb1BbUF7aGvjiQqzzffpg.jpg",
    release_date: "2022-03-01",
    video: false,
    vote_average: 7.5,
    vote_count: 1374,
  },
];
