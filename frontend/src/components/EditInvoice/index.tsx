import { useEffect, useRef, useState } from "react";
import CancelButton from "../CancelButton";
import DatePickerComponent from "../DatePickerComponent";
import Dropdown from "../Dropdown";
import InputForm from "../InputForm";
import SaveButton from "../SaveButton";
import { EditInvoiceProps, FormTypes } from "./EditInvoiceProps";
import useModalFocus from "@/hooks/useModalFocus";
import { useForm } from "react-hook-form";
import { rootState } from "@/redux/root-reducer-types";
import { useSelector } from "react-redux";
import ItemList from "../ItemList";
import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { cleanItems } from "@/redux/items/reducer";
import useEditInvoice from "@/hooks/useEditInvoice";

const EditInvoice = ({ closeEditInvoice }: EditInvoiceProps) => {
  const dispatch = useDispatch();
  const { width } = useWindowSize();
  const { handleCallApi } = useEditInvoice();

  const modalRef = useRef(null);
  useModalFocus(modalRef, closeEditInvoice);

  const { selectedInvoice } = useSelector(
    (rootReducer: rootState) => rootReducer.invoiceSlice
  );

  const [paymentDueData, setPaymentDueData] = useState<string>(
    selectedInvoice.paymentDue
  );

  useEffect(() => {
    setValue("clientAddress.city", selectedInvoice.clientAddress.city);
    setValue("clientAddress.country", selectedInvoice.clientAddress.country);
    setValue("clientAddress.postCode", selectedInvoice.clientAddress.postCode);
    setValue("clientAddress.street", selectedInvoice.clientAddress.street);
    setValue("clientEmail", selectedInvoice.clientEmail);
    setValue("clientName", selectedInvoice.clientName);
    setValue("createdAt", selectedInvoice.createdAt);
    setValue("description", selectedInvoice.description);
    setValue("paymentDue", selectedInvoice.paymentDue);
    setValue("paymentTerms", selectedInvoice.paymentTerms);
    setValue("senderAddress.city", selectedInvoice.senderAddress.city);
    setValue("senderAddress.country", selectedInvoice.senderAddress.country);
    setValue("senderAddress.postCode", selectedInvoice.senderAddress.postCode);
    setValue("senderAddress.street", selectedInvoice.senderAddress.street);
  }, []);

  const {
    formState: { errors },
    register,
    handleSubmit,
    setValue,
  } = useForm<FormTypes>();

  const onSubmit = handleSubmit(async (data) => {
    await handleCallApi({
      id: selectedInvoice.id,
      status: selectedInvoice.status,
      ...data,
    });
    dispatch(cleanItems());
    closeEditInvoice();
  });

  return (
    <div className="w-full" id="modal-overlay">
      <section
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        tabIndex={0}
        className={`${style.container} max-w-[38.5625rem] absolute max-h-screen overflow-y-scroll left-0 top-0 bottom-0 bg-1 rounded-se-[20px] rounded-ee-[20px] px-14 pt-14 z-50 custom_scrollbar`}
      >
        {width < 768 ? (
          <button
            onClick={closeEditInvoice}
            className="HeadingSVariant mb-4 text-color2 flex items-center gap-6 py-2 max-w-[97px] hover:text-[#888EB0]"
          >
            <Image
              alt="icon arrow"
              width={8}
              height={4}
              src={"/assets/icon-arrow-left.svg"}
            />
            Go Back
          </button>
        ) : null}

        <h2 className="HeadingM text-color2 mb-11">
          Edit <span className="text-color3">#</span> {selectedInvoice.id}
        </h2>

        <form onSubmit={onSubmit}>
          <fieldset>
            <legend className="sr-only">Enter edit information</legend>

            <h3 className="text-dark_purple HeadingSVariant mb-6">Bill From</h3>

            <div className="flex flex-col gap-6">
              <InputForm
                labelText="Street Address"
                className="w-full"
                style={{ maxWidth: "unset" }}
                id="first_element"
                {...register("senderAddress.street", {
                  required: "Can’t be empty",
                })}
                error={errors.senderAddress?.street ? true : false}
                errorMessage={errors.senderAddress?.street?.message}
              />

              <div className={`${style.container_grid} grid grid-cols-3 gap-6`}>
                <InputForm
                  labelText="City"
                  className="w-full"
                  style={{ maxWidth: "unset" }}
                  {...register("senderAddress.city", {
                    required: "Can’t be empty",
                  })}
                  error={errors.senderAddress?.city ? true : false}
                  errorMessage={errors.senderAddress?.city?.message}
                />
                <InputForm
                  labelText="Post Code"
                  className="w-full"
                  style={{ maxWidth: "unset" }}
                  {...register("senderAddress.postCode", {
                    required: "Can’t be empty",
                  })}
                  error={errors.senderAddress?.postCode ? true : false}
                  errorMessage={errors.senderAddress?.postCode?.message}
                />
                <InputForm
                  labelText="Country"
                  className="w-full"
                  style={{ maxWidth: "unset" }}
                  {...register("senderAddress.country", {
                    required: "Can’t be empty",
                  })}
                  error={errors.senderAddress?.country ? true : false}
                  errorMessage={errors.senderAddress?.country?.message}
                />
              </div>
            </div>

            <h3 className="mt-12 text-dark_purple HeadingSVariant mb-6">
              Bill To
            </h3>

            <div className="flex flex-col gap-6">
              <InputForm
                labelText="Client’s Name"
                className="w-full"
                style={{ maxWidth: "unset" }}
                {...register("clientName", {
                  required: "Can’t be empty",
                })}
                error={errors.clientName ? true : false}
                errorMessage={errors.clientName?.message}
              />
              <InputForm
                labelText="Client’s Email"
                className="w-full"
                style={{ maxWidth: "unset" }}
                {...register("clientEmail", {
                  required: "Can’t be empty",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email!",
                  },
                })}
                error={errors.clientEmail ? true : false}
                errorMessage={errors.clientEmail?.message}
              />

              <InputForm
                labelText="Street Address"
                className="w-full"
                style={{ maxWidth: "unset" }}
                {...register("clientAddress.street", {
                  required: "Can’t be empty",
                })}
                error={errors.clientAddress?.street ? true : false}
                errorMessage={errors.clientAddress?.street?.message}
              />

              <div className={`${style.container_grid} grid grid-cols-3 gap-6`}>
                <InputForm
                  labelText="City"
                  className="w-full"
                  style={{ maxWidth: "unset" }}
                  {...register("clientAddress.city", {
                    required: "Can’t be empty",
                  })}
                  error={errors.clientAddress?.city ? true : false}
                  errorMessage={errors.clientAddress?.city?.message}
                />
                <InputForm
                  labelText="Post Code"
                  className="w-full"
                  style={{ maxWidth: "unset" }}
                  {...register("clientAddress.postCode", {
                    required: "Can’t be empty",
                  })}
                  error={errors.clientAddress?.postCode ? true : false}
                  errorMessage={errors.clientAddress?.postCode?.message}
                />
                <InputForm
                  labelText="Country"
                  className="w-full"
                  style={{ maxWidth: "unset" }}
                  {...register("clientAddress.country", {
                    required: "Can’t be empty",
                  })}
                  error={errors.clientAddress?.country ? true : false}
                  errorMessage={errors.clientAddress?.country?.message}
                />
              </div>
            </div>

            <div
              className={`${style.container_datepicker} grid grid-cols-2 gap-6 mt-7`}
            >
              <DatePickerComponent
                disabled={true}
                label="Invoice Date"
                isOpen={false}
                date={paymentDueData}
                onDatePick={setPaymentDueData}
              />
              <Dropdown
                day={selectedInvoice.paymentTerms}
                setValue={() => {}}
              />
            </div>

            <div className="mt-8">
              <InputForm
                labelText="Project Description"
                className="w-full"
                style={{ maxWidth: "unset" }}
                {...register("description", {
                  required: "Can’t be empty",
                })}
                error={errors.description ? true : false}
                errorMessage={errors.description?.message}
              />
            </div>

            <div>
              <ItemList renderEditItems={true} />
            </div>

            <div className="w-full flex gap-2 mt-10 justify-end">
              <CancelButton CancelFn={closeEditInvoice} />
              <SaveButton onClick={onSubmit} />
            </div>
          </fieldset>
        </form>
      </section>
      {width > 768 ? (
        <div
          id="modal-overlay"
          tabIndex={-1}
          className="absolute top-0 right-0 h-screen w-[100%] flex items-center justify-center bg-[#1d1d1d93]"
          onClick={closeEditInvoice}
        ></div>
      ) : null}
    </div>
  );
};

export default EditInvoice;
