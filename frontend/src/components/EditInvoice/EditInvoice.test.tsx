import { render } from "@testing-library/react";
import EditInvoice from ".";
import { InvoiceDataMock } from "@/utils/mock";

describe("EditInvoice", () => {
  it("should render correctly", () => {
    render(<EditInvoice data={InvoiceDataMock.data} />);
  });
});
