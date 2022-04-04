import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./";

describe("Button", () => {
  it("should render correctly", () => {
    render(<Button>Clique-me</Button>);
    const button = screen.getByRole("button", { name: "Clique-me" });
    expect(button).toBeInTheDocument();
  });

  it("should call action when clicked", () => {
    const onClickMock = jest.fn();
    render(<Button onClick={() => onClickMock("test", 2)}>Clique-me</Button>);
    const button = screen.getByRole("button", { name: "Clique-me" });

    fireEvent.click(button);

    expect(onClickMock).toBeCalled();
  });
});
