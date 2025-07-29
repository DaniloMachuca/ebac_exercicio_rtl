import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("Deve adicionar 2 comentários", () => {
    render(<PostComment />);
    fireEvent.change(screen.getByTestId("textarea-test"), {
      target: {
        value: "teste 1",
      },
    });
    fireEvent.click(screen.getByTestId("btn-test"));

    fireEvent.change(screen.getByTestId("textarea-test"), {
      target: {
        value: "teste 2",
      },
    });
    fireEvent.click(screen.getByTestId("btn-test"));

    expect(screen.getAllByTestId("list-test")).toHaveLength(2);
  });
});
