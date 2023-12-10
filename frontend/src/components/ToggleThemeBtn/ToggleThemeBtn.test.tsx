import { fireEvent, render, screen } from "@testing-library/react";
import ToggleThemeBtn from ".";

describe("ToggleThemeBtn", () => {
  it("should render correctly", () => {
    render(<ToggleThemeBtn />);
  });

  it("should change theme correctly", () => {
    render(<ToggleThemeBtn />);

    const btn = screen.getByRole("button");

    fireEvent.click(btn);

    const img = screen.getByRole("img");
  });
});
