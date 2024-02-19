import { rootState } from "@/redux/root-reducer-types";
import { useSelector } from "react-redux";

const generateUniqueID = (length: 6) => {
  const invoices = useSelector(
    (rootReducer: rootState) => rootReducer.invoiceSlice.invoices
  );

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  const existingIDs = new Set(invoices.map((invoice) => invoice.id));

  if (existingIDs.has(result)) {
    return generateUniqueID(length);
  }

  return result;
};

export default generateUniqueID;
