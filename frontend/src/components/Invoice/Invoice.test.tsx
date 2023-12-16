import { render } from "@testing-library/react";
import Invoice from ".";

describe("InvoiceComponent", () => {
  it("should render correctly", () => {
    render(<Invoice invoiceCount={7} />);
  });
});
