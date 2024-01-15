import CancelButton from "../CancelButton";
import DatePickerComponent from "../DatePickerComponent";
import Dropdown from "../Dropdown";
import InputForm from "../InputForm";
import SaveButton from "../SaveButton";
import { EditInvoiceProps } from "./EditInvoiceProps";

const EditInvoice = ({ data }: EditInvoiceProps) => {
  return (
    <section className="bg-2 rounded-se-[20px] rounded-ee-[20px] px-14 pb-8 pt-14">
      <h2 className="HeadingM text-color2 mb-11">
        Edit <span className="text-color3">#</span> {data.id}
      </h2>

      <form>
        <fieldset>
          <legend className="sr-only">Enter edit information</legend>

          <h3 className="text-dark_purple HeadingSVariant mb-6">Bill From</h3>

          <div className="flex flex-col gap-6">
            <InputForm
              labelText="Street Address"
              className="w-full"
              style={{ maxWidth: "unset" }}
            />

            <div className="grid grid-cols-3 gap-6">
              <InputForm
                labelText="City"
                className="w-full"
                style={{ maxWidth: "unset" }}
              />
              <InputForm
                labelText="Post Code"
                className="w-full"
                style={{ maxWidth: "unset" }}
              />
              <InputForm
                labelText="Country"
                className="w-full"
                style={{ maxWidth: "unset" }}
              />
            </div>
          </div>

          <h3 className="mt-12 text-dark_purple HeadingSVariant mb-6">
            Bill To
          </h3>

          <div className="flex flex-col gap-6">
            <InputForm
              labelText="Client’s Email"
              className="w-full"
              style={{ maxWidth: "unset" }}
            />

            <InputForm
              labelText="Street Address"
              className="w-full"
              style={{ maxWidth: "unset" }}
            />

            <div className="grid grid-cols-3 gap-6">
              <InputForm
                labelText="City"
                className="w-full"
                style={{ maxWidth: "unset" }}
              />
              <InputForm
                labelText="Post Code"
                className="w-full"
                style={{ maxWidth: "unset" }}
              />
              <InputForm
                labelText="Country"
                className="w-full"
                style={{ maxWidth: "unset" }}
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
            />
          </div>

          <div className="w-full flex gap-2 mt-10 justify-end">
            <CancelButton />
            <SaveButton />
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default EditInvoice;
