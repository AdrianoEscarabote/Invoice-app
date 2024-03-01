import { InvoiceTypes } from "@/redux/invoice/InvoiceDataTypes";
import { editSelectedInvoice, setInvoices } from "@/redux/invoice/reducer";
import { rootState } from "@/redux/root-reducer-types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

interface useCreateInvoiceProps {
  id: string;
  clientName: string;
  clientEmail: string;
  description: string;
  createdAt: string;
  paymentTerms: 1 | 7 | 14 | 30;
  status: "Pending" | "Paid" | "Draft";
  paymentDue: string;
  senderAddress: {
    city: string;
    postCode: string;
    street: string;
    country: string;
  };
  clientAddress: {
    city: string;
    postCode: string;
    street: string;
    country: string;
  };
}

const useEditInvoice = () => {
  const dispatch = useDispatch();
  const items = useSelector((rootReducer: rootState) => rootReducer.itemsSlice);

  const [shouldCallApi, setShouldCallApi] = useState<boolean>(false);
  const url = process.env.NEXT_PUBLIC_API_URL;

  const [state, setState] = useState<InvoiceTypes>();

  const handleCallApi = async ({ ...props }: useCreateInvoiceProps) => {
    const data = {
      items: items,
      total: items.reduce((accum, curr) => accum + curr.total, 0),
      ...props,
    };
    setState(data);
    dispatch(editSelectedInvoice(data));
    setShouldCallApi(true);
  };

  useEffect(() => {
    const callApi = async () => {
      const response = await fetch(`${url}/invoice/edit-invoice`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ invoice: state }),
      });

      const responseGetInvoices = await fetch(`${url}/invoice/get-invoices`, {
        method: "GET",
        credentials: "include",
      });

      if (responseGetInvoices.status === 200) {
        const data: InvoiceTypes[] = await response.json();

        dispatch(setInvoices(data));
      }
    };

    try {
      if (shouldCallApi) {
        callApi();
      }
    } catch (error) {
      console.error(error);
    }
  }, [shouldCallApi]);

  return {
    handleCallApi,
  };
};

export default useEditInvoice;
