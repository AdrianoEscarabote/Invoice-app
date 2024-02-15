import { fireEvent, render, screen } from "@testing-library/react";
import DesktopInvoiceCard from ".";

describe("DesktopInvoiceCard", () => {
  it("should render correctly", () => {
    render(
      <DesktopInvoiceCard
        clientName="Adriano"
        id="5JH2K1"
        navigateToViewInvoice={() => {}}
        paymentDue="2021-01-01"
        status="Pending"
        total={2000}
      />
    );
  });

  it("should pass and call props correctly ", () => {
    const mockNavigate = jest.fn();
    render(
      <DesktopInvoiceCard
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
