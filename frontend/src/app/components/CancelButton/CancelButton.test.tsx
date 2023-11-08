import { fireEvent, render, screen } from "@testing-library/react";
import CancelButton from ".";

describe("CancelButton", () => {
  it("should render correctly", () => {
    render(<CancelButton />);
  });

  it("should call the cancel function correctly", () => {
    const fn = jest.fn();
    render(<CancelButton CancelFn={fn} />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(fn).toHaveBeenCalled();
  });
});
