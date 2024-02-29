import { fireEvent, render, screen } from "@testing-library/react";
import MobileInvoiceCard from ".";
import getMockState from "@/utils/getMockState";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore();

describe("MobileInvoiceCard", () => {
  let store;

  beforeEach(() => {
    const mockState = getMockState();
    const state = mockStore(mockState);

    store = state;
  });

  afterAll(() => jest.clearAllMocks());

  it("should render correctly", () => {
    render(
      <Provider store={store}>
        <MobileInvoiceCard
          status="Pending"
          navigateToViewInvoice={() => {}}
          paymentDue="2021-02-20"
          total={20000}
          clientName="Adriano"
          id="4G2H90"
        />
      </Provider>
    );
  });

  it("should pass and call props correctly ", () => {
    const mockNavigate = jest.fn();
    render(
      <Provider store={store}>
        <MobileInvoiceCard
          clientName="Adriano"
          id="5JH2K1"
          navigateToViewInvoice={mockNavigate}
          paymentDue="2021-01-01"
          status="Pending"
          total={2000}
        />
      </Provider>
    );

    const nameElement = screen.getByText("Adriano");

    const buttonElement = screen.getByTestId("button");

    fireEvent.click(buttonElement);

    expect(mockNavigate).toHaveBeenCalled();
    expect(nameElement).toBeInTheDocument();
  });
});
