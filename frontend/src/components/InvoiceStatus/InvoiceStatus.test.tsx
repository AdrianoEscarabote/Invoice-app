import { render, screen } from "@testing-library/react";
import InvoiceStatus from ".";

describe("InvoiceStatus", () => {
  it("should render correctly", () => {
    render(<InvoiceStatus status="Paid" />);
  });

  it("should render with the correct props", () => {
    render(<InvoiceStatus status="Pending" />);

    const element = screen.getByTestId("pendingButton");
    expect(element).toBeInTheDocument();
  });
});
