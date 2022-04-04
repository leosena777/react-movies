import { screen, render, fireEvent } from "@testing-library/react";
import Card from "./";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("Card", () => {
  it("should render correctly", () => {
    render(<Card id={101} title="card test" imageUrl="foo" />);
    const card = screen.getByText("card test");
    expect(card).toBeInTheDocument();
  });

  it("should navigate when clicked in details", () => {
    const id = 101;
    render(<Card id={id} title="card test" imageUrl="foo" />);
    const button = screen.getByRole("button", { name: "Detalhes" });

    fireEvent.click(button);

    expect(mockedNavigate).toBeCalledWith(`details/${id}`);
  });
});
