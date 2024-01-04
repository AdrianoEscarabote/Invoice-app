import { fireEvent, render, screen } from "@testing-library/react";
import PaidButton from ".";

describe("PaidButton", () => {
  it("should render correctly", () => {
    render(<PaidButton onClick={() => {}} />);
  });

  it("should call the onclick prop when the button is clicked", () => {
    const mockFn = jest.fn();

    render(<PaidButton onClick={mockFn} />);

    const button = screen.getByText("Mark as Paid");

    fireEvent.click(button);

    expect(mockFn).toHaveBeenCalled();
  });
});
