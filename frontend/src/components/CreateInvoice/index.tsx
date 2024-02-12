import { useSelector } from "react-redux";
import DatePickerComponent from "../DatePickerComponent";
import DraftButton from "../DraftButton";
import Dropdown from "../Dropdown";
import InputForm from "../InputForm";
import SaveButton from "../SaveButton";
import { CreateInvoiceData, CreateInvoiceProps } from "./CreateInvoiceProps";
import { rootState } from "@/redux/root-reducer-types";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import useModalFocus from "@/hooks/useModalFocus";
import ItemList from "../ItemList";
import { cleanItems } from "@/redux/items/reducer";
import useCreateInvoice from "@/hooks/useCreateInvoice";

const CreateInvoice = ({ closeCreateInvoice }: CreateInvoiceProps) => {
  const modalRef = useRef(null);
  useModalFocus(modalRef, closeCreateInvoice);
  const { handleCallApi } = useCreateInvoice();
  const dispatch = useDispatch();
  const items = useSelector((rootReducer: rootState) => rootReducer.itemsSlice);

  const [paymentDueData, setPaymentDueData] = useState<string>("");

  const {
    register,
    formState: { errors },
    getValues,
    setValue,
    handleSubmit,
  } = useForm<CreateInvoiceData>();

  const handleSaveDraft = async () => {
    const draftData = {
      clientName: getValues("clientName"),
      clientEmail: getValues("clientEmail"),
      description: getValues("description"),
      paymentTerms: getValues("paymentTerms"),
      paymentDue: paymentDueData,
      senderAddress: {
        city: getValues("senderAddress.city"),
        postCode: getValues("senderAddress.postCode"),
        street: getValues("senderAddress.street"),
        country: getValues("senderAddress.country"),
      },
      clientAddress: {
        city: getValues("clientAddress.city"),
        postCode: getValues("clientAddress.postCode"),
        street: getValues("clientAddress.street"),
        country: getValues("clientAddress.country"),
      },
      items: items,
      total: 0,
    };
    await handleCallApi({
      status: "Draft",
      ...draftData,
    });
    closeCreateInvoice();
  };

  const onSubmit = handleSubmit(async (data) => {
    await handleCallApi({
      status: "Pending",
      paymentDue: paymentDueData,
      ...data,
    });
    dispatch(cleanItems());
    closeCreateInvoice();
  });

  return (
    <div className="w-full">
      <section
        ref={modalRef}
        tabIndex={0}
        onClick={(e) => e.stopPropagation()}
        className="max-w-[38.5625rem] absolute max-h-screen overflow-y-scroll left-0 top-0 bottom-0 bg-1 rounded-se-[20px] rounded-ee-[20px] px-14 pt-14 z-50 custom_scrollbar"
      >
        <h2 className="HeadingM text-color2 mb-11">New Invoice</h2>

        <form onSubmit={onSubmit}>
          <fieldset>
            <legend className="sr-only">Enter edit information</legend>

            <h3 className="text-dark_purple HeadingSVariant mb-6">Bill From</h3>

            <div className="flex flex-col gap-6">
              <InputForm
                labelText="Street Address"
                type="string"
                error={errors.senderAddress?.street?.message ? true : false}
                className="w-full"
                style={{ maxWidth: "unset" }}
                id="first_element"
                {...register("senderAddress.street", {
                  required: "Can’t be empty",
                })}
                errorMessage={errors.senderAddress?.street?.message}
              />

              <div className="grid grid-cols-3 gap-6">
                <InputForm
                  labelText="City"
                  className="w-full"
                  style={{ maxWidth: "unset" }}
                  error={errors.senderAddress?.city?.message ? true : false}
                  errorMessage={errors.senderAddress?.city?.message}
                  {...register("senderAddress.city", {
                    required: "Can’t be empty",
                  })}
                />
                <InputForm
                  labelText="Post Code"
                  className="w-full"
                  style={{ maxWidth: "unset" }}
                  type="string"
                  {...register("senderAddress.postCode", {
                    required: "Can’t be empty",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "only numbers",
                    },
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
                error={errors?.clientName ? true : false}
                errorMessage={errors?.clientName?.message}
              />

              <InputForm
                labelText="Client’s Email"
                className="w-full"
                style={{ maxWidth: "unset" }}
                placeholder="e.g. email@example.com"
                {...register("clientEmail", {
                  required: "Can’t be empty",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email!",
                  },
                })}
                error={errors?.clientEmail ? true : false}
                errorMessage={errors?.clientEmail?.message}
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
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "only numbers",
                    },
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

            <div className="grid grid-cols-2 gap-6 mt-7">
              <DatePickerComponent
                disabled={false}
                label="Invoice Date"
                isOpen={false}
                date={paymentDueData}
                onDatePick={setPaymentDueData}
              />
              <Dropdown
                day={"1"}
                setValue={setValue}
                {...register("paymentTerms")}
              />
            </div>

            <div className="mt-8">
              <InputForm
                labelText="Project Description"
                className="w-full"
                placeholder="e.g. Graphic Design Service"
                style={{ maxWidth: "unset" }}
                {...register("description", {
                  required: "Can’t be empty",
                })}
                error={errors.description ? true : false}
                errorMessage={errors.description?.message}
              />
            </div>

            <div>
              <ItemList renderList={false} />
            </div>

            <div className="w-full flex mt-10 mb-6">
              <button
                className="w-full max-w-[96px] h-12 rounded-3xl bg-[#f9fafe] HeadingSVariant text-[#7e88c3]"
                type="button"
                onClick={closeCreateInvoice}
              >
                Discard
              </button>
              <div className="flex gap-2 w-full justify-end">
                <DraftButton
                  aria-label="draft button"
                  onClick={handleSaveDraft}
                  type="button"
                />
                <SaveButton label="Save & Send" type="submit" />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
      <div
        id="modal-overlay"
        tabIndex={-1}
        className="absolute top-0 right-0 h-screen w-[100%] flex items-center justify-center bg-[#1d1d1d93]"
        onClick={closeCreateInvoice}
      ></div>
    </div>
  );
};

export default CreateInvoice;
