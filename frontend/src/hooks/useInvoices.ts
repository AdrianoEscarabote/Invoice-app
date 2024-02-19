import { InvoiceTypes } from "@/redux/invoice/InvoiceDataTypes";
import { setInvoices } from "@/redux/invoice/reducer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useInvoices = () => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const dispatch = useDispatch();
  useEffect(() => {
    const callApi = async () => {
      const response = await fetch(`${url}/invoice/get-invoices`, {
        method: "GET",
        credentials: "include",
      });

      if (response.status === 200) {
        const data: InvoiceTypes[] = await response.json();

        dispatch(setInvoices(data));
      }
    };

    callApi();
  }, []);
};

export default useInvoices;
