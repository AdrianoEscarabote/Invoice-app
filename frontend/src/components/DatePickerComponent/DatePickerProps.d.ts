export interface DatePickerProps {
  date: string;
  onDatePick: (date: string) => void;
  isOpen: boolean;
  label: "Invoice Date" | "Issue Date";
}
