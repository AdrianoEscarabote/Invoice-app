import {
  Control,
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { CreateInvoiceData } from "../CreateInvoice/CreateInvoiceProps";
import { ItemTypes } from "@/redux/redux-types";

interface ItemType {
  name: string;
  qty: number;
  price: number;
}
