import { rootState } from "@/redux/root-reducer-types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useMarkAsPaidInvoice = () => {
  const { id } = useSelector(
    (rootReducer: rootState) => rootReducer.invoiceSlice.selectedInvoice
  );
  const url = process.env.NEXT_PUBLIC_API_URL;
  const [callMarkApi, setCallMarkApi] = useState<boolean>(false);

  const handleMarkAsPaidInvoice = async () => {
    const response = await fetch(`${url}/invoice/mark-as-paid-invoice`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        invoiceId: id,
      }),
    });
  };

  useEffect(() => {
    if (callMarkApi) handleMarkAsPaidInvoice();
  }, [callMarkApi]);

  return {
    setCallMarkApi,
  };
};

export default useMarkAsPaidInvoice;
