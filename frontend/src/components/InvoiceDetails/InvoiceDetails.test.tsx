import { render, screen } from "@testing-library/react";
import InvoiceDetails from ".";
import { InvoiceDataMock } from "@/utils/mock";

describe("Invoice Details", () => {
  it("should render correctly", () => {
    render(<InvoiceDetails data={InvoiceDataMock.data} />);
  });

  it("should pass props correctly", () => {
    render(<InvoiceDetails data={InvoiceDataMock.data} />);

    const clientName = screen.getByText("Alex Grim");
    const clientEmail = screen.getByText("alexgrim@mail.com");

    expect(clientName).toBeInTheDocument();
    expect(clientEmail).toBeInTheDocument();
  });
});
