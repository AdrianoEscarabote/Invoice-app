import { render, screen } from "@testing-library/react";
import InvoiceDetails from ".";
import getMockState from "@/utils/getMockState";

describe("Invoice Details", () => {
  it("should render correctly", () => {
    render(
      <InvoiceDetails data={getMockState().invoiceSlice.selectedInvoice} />
    );
  });

  it("should pass props correctly", () => {
    render(
      <InvoiceDetails data={getMockState().invoiceSlice.selectedInvoice} />
    );

    const clientName = screen.getByText("Jensen Huang");
    const clientEmail = screen.getByText("jensenh@mail.com");

    expect(clientName).toBeInTheDocument();
    expect(clientEmail).toBeInTheDocument();
  });
});
