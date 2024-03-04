import { fireEvent, render, screen } from "@testing-library/react";
import Dropdown from ".";

describe("Dropdown", () => {
  it("should render correctly", () => {
    render(<Dropdown setValue={() => {}} day={14} />);
  });

  it("should open more options when the button is clicked", () => {
    render(<Dropdown setValue={() => {}} day={1} />);

    const button = screen.getByText("Net 1 Day");

    fireEvent.click(button);

    const elementThatIsOpen = screen.getByText("Net 30 Days");

    expect(elementThatIsOpen).toBeInTheDocument();
  });
});
