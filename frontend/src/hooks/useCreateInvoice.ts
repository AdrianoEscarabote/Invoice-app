import { InvoiceTypes } from "@/redux/invoice/InvoiceDataTypes";
import { createInvoice } from "@/redux/invoice/reducer";
import { ItemTypes } from "@/redux/redux-types";
import { rootState } from "@/redux/root-reducer-types";
import generateUniqueID from "@/utils/generateUniqueID";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

interface useCreateInvoiceProps {
  clientName: string;
  clientEmail: string;
  description: string;
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

const useCreateInvoice = () => {
  const dispatch = useDispatch();
  const [shouldCallApi, setShouldCallApi] = useState<boolean>(false);
  const url = process.env.NEXT_PUBLIC_API_URL;
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const createdAt = `${year}-${month}-${day}`;
  const uniqueID = generateUniqueID(6);
  const items = useSelector((rootReducer: rootState) => rootReducer.itemsSlice);

  const [state, setState] = useState<InvoiceTypes>();

  const handleCallApi = async ({ ...props }: useCreateInvoiceProps) => {
    const data = {
      id: uniqueID,
      createdAt,
      items,
      total: items.reduce((accum, curr) => accum + curr.total, 0),
      ...props,
    };
    setState(data);
    setShouldCallApi(true);
  };

  useEffect(() => {
    const callApi = async () => {
      const response = await fetch(`${url}/invoice/create-invoice`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ invoice: state }),
      });

      if (response.status === 200) {
        dispatch(createInvoice(state!));
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

export default useCreateInvoice;
