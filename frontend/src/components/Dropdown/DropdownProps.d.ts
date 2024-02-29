export interface DropdownProps extends ComponentPropsWithoutRef<"button"> {
  setValue: (name: string, value: any) => void;
  day: "1" | "7" | "14" | "30";
}
