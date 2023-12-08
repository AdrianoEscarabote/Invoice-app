import { fireEvent, render, screen } from "@testing-library/react";
import TextField from ".";

describe("Text Field", () => {
  it("should render correctly", () => {
    render(
      <TextField
        type="text"
        data-testid="input"
        labelText={"Lorem ipsum Dolor"}
      />
    );

    const textField = screen.getByTestId("input");

    expect(textField).toBeInTheDocument();
  });

  it("should change value correctly", () => {
    render(
      <TextField
        type="text"
        data-testid="input"
        labelText="Lorem ipsum Dolor"
      />
    );

    const textField = screen.getByTestId("input");

    fireEvent.change(textField, { target: { textContent: "New value" } });

    expect(textField.textContent).toBe("New value");
  });

  it("should pass the props correctly", () => {
    render(
      <TextField
        type="text"
        data-testid="input"
        style={{ backgroundColor: "black" }}
        aria-label="input text"
      />
    );

    const input = screen.getByTestId("input");

    expect(input).toHaveStyle("background-color: black");
    expect(input).toHaveAttribute("aria-label");
  });
});
