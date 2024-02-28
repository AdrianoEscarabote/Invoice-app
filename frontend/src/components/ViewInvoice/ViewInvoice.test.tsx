import { render } from "@testing-library/react";
import ViewInvoice from ".";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import getMockState from "@/utils/getMockState";

const mockStore = configureMockStore();

describe("ViewInvoice", () => {
  let store;

  beforeEach(() => {
    const mockState = getMockState();
    const state = mockStore(mockState);

    store = state;
  });

  afterAll(() => jest.clearAllMocks());

  it("should render correclty", () => {
    render(
      <Provider store={store}>
        <ViewInvoice navigateToInvoice={() => {}} />
      </Provider>
    );
  });
});
