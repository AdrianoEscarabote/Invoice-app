import { useRef } from "react";
import CancelButton from "../CancelButton";
import DatePickerComponent from "../DatePickerComponent";
import Dropdown from "../Dropdown";
import InputForm from "../InputForm";
import SaveButton from "../SaveButton";
import { EditInvoiceProps } from "./EditInvoiceProps";
import useModalFocus from "@/hooks/useModalFocus";
import { useForm } from "react-hook-form";

const EditInvoice = ({ data, closeEditInvoice }: EditInvoiceProps) => {
  const modalRef = useRef(null);
  useModalFocus(modalRef, closeEditInvoice);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<EditInvoiceProps>();

  const onSubmit = handleSubmit(async (data) => {});

  return (
    <div className="w-full" id="modal-overlay">
      <section
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        tabIndex={0}
        className="max-w-[38.5625rem] absolute max-h-screen overflow-y-scroll left-0 top-0 bottom-0 bg-1 rounded-se-[20px] rounded-ee-[20px] px-14 pt-14 z-50 custom_scrollbar"
      >
        <h2 className="HeadingM text-color2 mb-11">
          Edit <span className="text-color3">#</span> {data.id}
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

              <div className="grid grid-cols-3 gap-6">
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

              <div className="grid grid-cols-3 gap-6">
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

            <div className="grid grid-cols-2 gap-6">
              <DatePickerComponent
                disabled={false}
                label="Invoice Date"
                isOpen={false}
                date=""
                onDatePick={() => {}}
              />
              <Dropdown day="1" />
            </div>

            <div>
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

            <div className="w-full flex gap-2 mt-10 justify-end">
              <CancelButton />
              <SaveButton />
            </div>
          </fieldset>
        </form>
      </section>
      <div
        id="modal-overlay"
        tabIndex={-1}
        className="absolute top-0 right-0 h-screen w-[100%] flex items-center justify-center bg-[#1d1d1d93]"
        onClick={closeEditInvoice}
      ></div>
    </div>
  );
};

export default EditInvoice;
