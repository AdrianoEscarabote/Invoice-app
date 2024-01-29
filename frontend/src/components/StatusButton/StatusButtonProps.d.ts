export interface StatusButtonProps {
  statusProp?: "Draft" | "Pending" | "Paid";
  setStatus: Dispatch<SetStateAction<statusType | undefined>>;
}
