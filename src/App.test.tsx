import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Test <App />", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<App />);
    expect(screen.getByTestId("btn-test")).toBeInTheDocument();
  });
});
