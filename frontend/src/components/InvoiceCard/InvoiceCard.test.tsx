import { render, screen } from "@testing-library/react";
import InvoiceCard from ".";

describe("InvoiceCard", () => {
  it("should render correctly", () => {
    render(
      <InvoiceCard
        paymentDue="2021-09-20"
        total="556.0"
        clientName="Alex Grim"
        status="Paid"
        id="JG8767"
      />
    );
  });

  it("should pass props correctly", () => {
    render(
      <InvoiceCard
        paymentDue="2021-09-20"
        total="556.0"
        clientName="Alex Grim"
        status="Paid"
        id="JG8767"
      />
    );

    const clientName = screen.getByText("Alex Grim");

    expect(clientName).toBeInTheDocument();
  });
});
