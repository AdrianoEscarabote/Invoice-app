import {
  Control,
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { CreateInvoiceData } from "../CreateInvoice/CreateInvoiceProps";
import { ItemTypes } from "@/redux/redux-types";

export interface ItemListProps {
  renderEditItems: boolean;
}

interface ItemType {
  name: string;
  quantity: number;
  price: number;
  total: number;
}
