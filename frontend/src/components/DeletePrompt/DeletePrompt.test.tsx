import { render } from "@testing-library/react";
import DeletePrompt from ".";
import getMockState from "@/utils/getMockState";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore();

describe("DeletePrompt", () => {
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
        <DeletePrompt closePrompt={() => {}} />
      </Provider>
    );
  });
});
