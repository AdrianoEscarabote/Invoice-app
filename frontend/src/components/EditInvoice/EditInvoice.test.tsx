import { render } from "@testing-library/react";
import EditInvoice from ".";
import configureMockStore from "redux-mock-store";
import getMockState from "@/utils/getMockState";
import { Provider } from "react-redux";

const mockStore = configureMockStore();

describe("EditInvoice", () => {
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
        <EditInvoice closeEditInvoice={() => {}} />
      </Provider>
    );
  });
});
