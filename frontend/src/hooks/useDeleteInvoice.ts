import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { rootState } from "@/redux/root-reducer-types";

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
    if (!response.ok) {
      console.error("Failed to delete invoice");
    }
  };

  useEffect(() => {
    if (callDeleteApi) {
      handleDeleteInvoice();
      setCallDeleteApi(false);
    }
  }, [callDeleteApi]);

  return {
    handleDeleteInvoice,
    setCallDeleteApi,
  };
};

export default useDeleteInvoice;
