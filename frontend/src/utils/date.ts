const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const date = () => {
  let day: number | string = "";
  let month: number | string = "";
  let year: number | string = "";

  return {
    getFullDate: (): string => {
      return `${year}-${(month as number) + 1}-${day}`;
    },
    getCurrentMonthAndYear: (): string => {
      return `${months[month]} ${year}`;
    },
    getDaysOfCurrentMonth: (): number[] => {
      let days: number[] = [];
      const numOfDays: number = new Date(
        Number(year),
        Number(month) + 1,
        0
      ).getDate();

      for (let i = 0; i < numOfDays; i++) {
        days.push(i + 1);
      }

      return days;
    },
    getDay: (): number | string => {
      return day;
    },
    getMonth: (): number | string => {
      return month;
    },
    getYear: (): number | string => {
      return year;
    },
    getTodaysDate: (): string => {
      const today = new Date();

      day = today.getDate();
      month = today.getMonth();
      year = today.getFullYear();

      return `${year}-${month + 1}-${day}`;
    },
    setDay: (d: number | string): void => {
      day = d;
    },
    setMonth: (m: number | string): void => {
      month = m;
    },
    setYear: (y: number | string): void => {
      year = y;
    },
    setLastMonth: (): void => {
      if (Number(month) - 1 < 0) {
        month = 11;
        year = Number(year) - 1;
      } else {
        month = Number(month) - 1;
      }
    },
    setNextMonth: (): void => {
      if (Number(month) === 11) {
        month = 0;
        year = Number(year) + 1;
      } else {
        month = Number(month) + 1;
      }
    },
    setTodaysDate: (): void => {
      const today = new Date();

      day = today.getDate();
      month = today.getMonth();
      year = today.getFullYear();
    },
    setDate: (date: string): void => {
      const newDate = date.split("-");
      day = Number(newDate[2]);
      month = Number(newDate[1]) - 1;
      year = Number(newDate[0]);
    },
  };
};

const calendar = date();

export default calendar;
