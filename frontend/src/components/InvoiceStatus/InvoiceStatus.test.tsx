import { render, screen } from "@testing-library/react";
import InvoiceStatus from ".";
import getMockState from "@/utils/getMockState";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore();

describe("InvoiceStatus", () => {
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
        <InvoiceStatus statusProp="Paid" />
      </Provider>
    );
  });

  it("should render with the correct props", () => {
    render(
      <Provider store={store}>
        <InvoiceStatus statusProp="Pending" />
      </Provider>
    );

    const element = screen.getByTestId("pendingButton");
    expect(element).toBeInTheDocument();
  });
});
