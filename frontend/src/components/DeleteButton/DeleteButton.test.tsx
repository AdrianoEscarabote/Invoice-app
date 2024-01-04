import { fireEvent, render, screen } from "@testing-library/react";
import DeleteButton from ".";

describe("DeleteButton", () => {
  it("should render correctly", () => {
    render(<DeleteButton onClick={() => {}} />);
  });

  it("should call the onclick prop when the button is clicked", () => {
    const mockFn = jest.fn();

    render(<DeleteButton onClick={mockFn} />);

    const button = screen.getByText("Delete");

    fireEvent.click(button);

    expect(mockFn).toHaveBeenCalled();
  });
});
