import React, { useEffect, useState } from "react";
import calendar from "@/utils/date";
import style from "./DatePickerComponent.module.css";
import { DatePickerProps } from "./DatePickerProps";

const DatePickerComponent: React.FC<DatePickerProps> = ({
  date,
  onDatePick,
  isOpen,
  label,
  disabled,
}) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [currentMonthAndYear, setCurrentMonthAndYear] = useState("");
  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);

  useEffect(() => {
    if (date) {
      calendar.setDate(date);
    } else {
      calendar.setTodaysDate();
    }

    setSelectedDate(
      `${calendar.getDay()} ${calendar.getCurrentMonthAndYear()}`
    );
    setCurrentMonthAndYear(calendar.getCurrentMonthAndYear());
    setDaysInMonth(calendar.getDaysOfCurrentMonth());
    setIsCalendarOpen(false);
  }, [isOpen]);

  const handleCalendarClick = () => {
    if (!disabled) {
      setIsCalendarOpen(!isCalendarOpen);
    }
  };

  const handleLastMonthClick = () => {
    calendar.setLastMonth();
    setCurrentMonthAndYear(calendar.getCurrentMonthAndYear());
    setDaysInMonth(calendar.getDaysOfCurrentMonth());
  };

  const handleNextMonthClick = () => {
    calendar.setNextMonth();
    setCurrentMonthAndYear(calendar.getCurrentMonthAndYear());
    setDaysInMonth(calendar.getDaysOfCurrentMonth());
  };

  const handleDatePick = (day: number) => {
    calendar.setDay(day);
    setSelectedDate(
      `${calendar.getDay()} ${calendar.getCurrentMonthAndYear()}`
    );
    onDatePick(calendar.getFullDate());
    setIsCalendarOpen(false);
  };

  return (
    <div
      className={`flex flex-col ${
        disabled ? "opacity-70 pointer-events-none" : ""
      }`}
    >
      <p className="BodyVariant label-text-color mb-2">{label}</p>
      <div
        className={`${style.calendar} flex items-center justify-between p-4 bg-2 rounded max-w-[240px] datepicker_border hover:cursor-pointer`}
        onClick={handleCalendarClick}
      >
        <p
          className={`${style.calendar__current_date} HeadingSVariant text-color2`}
        >
          {selectedDate}
        </p>
        <i className={`${style.calendar__icon} w-4 h-4`}></i>
      </div>

      <div
        className={`${
          style.calendar__calendar
        } max-w-[240px] mt-6 shadow flex-col items-center justify-center gap-8 rounded-lg p-6 bg-2 ${
          isCalendarOpen ? `${style.calendar__calendar_open}` : ""
        }`}
      >
        <div
          className={`${style.calendar__months_container} w-full flex items-center justify-between`}
        >
          <i
            className={`${style.calendar__month_change} cursor-pointer hover:cursor-pointer ${style.calendar__month_change_type_backward}`}
            onClick={handleLastMonthClick}
          ></i>
          <p
            className={`${style.calendar__current_date} datepicker-day-color HeadingSVariant`}
          >
            {currentMonthAndYear}
          </p>
          <i
            className={`${style.calendar__month_change} hover:cursor-pointer ${style.calendar__month_change_type_forward}`}
            onClick={handleNextMonthClick}
          ></i>
        </div>
        <ul
          className={`${style.calendar__days_list} w-full flex items-center justify-between flex-wrap`}
        >
          {daysInMonth.map((day, id) => (
            <li
              className={`${
                style.calendar__day
              } datepicker-day-color HeadingSVariant  hover:text-light_purple hover:cursor-pointer ${
                day === Number(calendar.getDay())
                  ? ` ${style.calendar__day_current}`
                  : ""
              }`}
              key={id}
              data-testid={`calendarday-${day}`}
              onClick={() => handleDatePick(day)}
            >
              {day}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DatePickerComponent;
