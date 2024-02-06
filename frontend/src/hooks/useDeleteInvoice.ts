import { rootState } from "@/redux/root-reducer-types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useDeleteInvoice = () => {
  const { id } = useSelector(
    (rootReducer: rootState) => rootReducer.invoiceSlice.selectedInvoice
  );
  const url = process.env.NEXT_PUBLIC_API_URL;
  const [callDeleteApi, setCallDeleteApi] = useState<boolean>(false);

  const handleDeleteInvoice = async () => {
    const response = await fetch(`${url}/invoice/delete-invoice`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        invoiceId: id,
      }),
    });
  };

  useEffect(() => {
    if (callDeleteApi) handleDeleteInvoice();
  }, [callDeleteApi]);

  return {
    setCallDeleteApi,
  };
};

export default useDeleteInvoice;
