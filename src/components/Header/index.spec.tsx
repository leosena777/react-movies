import { screen, render } from "@testing-library/react";
import Header from "./";

describe("Header", () => {
  it("should render correctly", () => {
    render(<Header title="Teste title" />);
    const result = screen.getByText("Teste title");
    expect(result).toBeInTheDocument();
  });
});
