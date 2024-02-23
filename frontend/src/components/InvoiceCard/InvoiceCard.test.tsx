import { render, screen } from "@testing-library/react";
import InvoiceCard from ".";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import getMockState from "@/utils/getMockState";

const mockStore = configureMockStore();

describe("InvoiceCard", () => {
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
        <InvoiceCard
          paymentDue="2021-09-20"
          total={556}
          clientName="Alex Grim"
          status="Paid"
          id="JG8767"
          navigateToViewInvoice={() => {}}
        />
      </Provider>
    );
  });

  it("should pass props correctly", () => {
    render(
      <Provider store={store}>
        <InvoiceCard
          paymentDue="2021-09-20"
          total={556}
          clientName="Alex Grim"
          status="Paid"
          id="JG8767"
          navigateToViewInvoice={() => {}}
        />
      </Provider>
    );

    const clientName = screen.getByText("Alex Grim");

    expect(clientName).toBeInTheDocument();
  });
});
