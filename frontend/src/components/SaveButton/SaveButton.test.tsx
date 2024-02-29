import { fireEvent, render, screen } from "@testing-library/react";
import SaveButton from ".";

describe("SaveButton", () => {
  it("should render correctly", () => {
    render(<SaveButton />);
  });

  it("should call the function passed as prop correctly", () => {
    const mockFn = jest.fn();
    render(<SaveButton onClick={mockFn} />);

    const button = screen.getByText("Save Changes");

    fireEvent.click(button);

    expect(mockFn).toHaveBeenCalled();
  });
});
