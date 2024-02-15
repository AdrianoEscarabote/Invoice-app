import { fireEvent, render, screen } from "@testing-library/react";
import MobileInvoiceCard from ".";

describe("MobileInvoiceCard", () => {
  it("should render correctly", () => {
    render(
      <MobileInvoiceCard
        status="Pending"
        navigateToViewInvoice={() => {}}
        paymentDue="2021-02-20"
        total={20000}
        clientName="Adriano"
        id="4G2H90"
      />
    );
  });

  it("should pass and call props correctly ", () => {
    const mockNavigate = jest.fn();
    render(
      <MobileInvoiceCard
        clientName="Adriano"
        id="5JH2K1"
        navigateToViewInvoice={mockNavigate}
        paymentDue="2021-01-01"
        status="Pending"
        total={2000}
      />
    );

    const nameElement = screen.getByText("Adriano");

    const buttonElement = screen.getByTestId("button");

    fireEvent.click(buttonElement);

    expect(mockNavigate).toHaveBeenCalled();
    expect(nameElement).toBeInTheDocument();
  });
});
