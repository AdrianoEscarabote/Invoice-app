import { fireEvent, render, screen } from "@testing-library/react";
import ButtonForm from ".";

describe("ButtonForm", () => {
  it("should render correctly with props being passed", () => {
    const onClickFn = jest.fn();

    render(
      <ButtonForm
        showLoadingComponent={false}
        disabled={false}
        label="Click"
        type="button"
        data-testid="button-id"
        onClick={onClickFn}
      />
    );

    const button = screen.getByTestId("button-id");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type");
    fireEvent.click(button);
    expect(onClickFn).toHaveBeenCalled();
  });
});
