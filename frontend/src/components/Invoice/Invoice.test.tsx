import { RenderResult, render } from "@testing-library/react";
import Invoice from ".";
import configureMockStore from "redux-mock-store";
import getMockState from "@/utils/getMockState";
import { Provider } from "react-redux";
import useUserAuthenticated from "@/hooks/useUserAuthenticated";
import useInvoices from "@/hooks/useInvoices";

const mockStore = configureMockStore();

jest.mock("../../hooks/useUserAuthenticated", () => ({
  __esModule: true,
  default: jest.fn(),
}));
jest.mock("../../hooks/useInvoices", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("InvoiceComponent", () => {
  let store;
  let wrapper: RenderResult;

  beforeEach(async () => {
    const mockState = getMockState();
    const state = mockStore(mockState);

    store = state;

    (useUserAuthenticated as jest.Mock).mockImplementation(() => {});
    (useInvoices as jest.Mock).mockImplementation(() => {});
    wrapper = render(
      <Provider store={store}>
        <Invoice />
      </Provider>
    );
  });

  afterAll(() => jest.clearAllMocks());

  it("should render correctly", () => {
    render(
      <Provider store={store}>
        <Invoice />
      </Provider>
    );
  });
});
