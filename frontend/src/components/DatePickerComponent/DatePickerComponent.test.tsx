import { fireEvent, render, screen } from "@testing-library/react";
import DatePicker from ".";

describe("DatePickerComponent", () => {
  it("should render correctly", () => {
    render(
      <DatePicker
        label="Invoice Date"
        isOpen={false}
        date=""
        onDatePick={() => {}}
      />
    );
  });

  it("should call the onDatePick when a day in the calendar is clicked", () => {
    const fn = jest.fn();

    render(
      <DatePicker label="Invoice Date" isOpen={false} date="" onDatePick={fn} />
    );

    const calendarDay = screen.getByTestId("calendarday-1");
    fireEvent.click(calendarDay);

    expect(fn).toHaveBeenCalled();
  });
});
