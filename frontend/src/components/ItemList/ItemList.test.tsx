import { fireEvent, render, screen } from "@testing-library/react";
import ItemList from ".";
import configureMockStore from "redux-mock-store";
import getMockState from "@/utils/getMockState";
import { Provider } from "react-redux";

const mockStore = configureMockStore();

describe("ItemList", () => {
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
        <ItemList renderEditItems={false} />
      </Provider>
    );
  });

  it("should add a new item when the button is clicked", () => {
    render(
      <Provider store={store}>
        <ItemList renderEditItems={false} />
      </Provider>
    );

    const buttonElement = screen.getByText("+ Add New Item");

    fireEvent.click(buttonElement);

    const actions = store.getActions();

    expect(actions).toEqual([
      {
        payload: undefined,
        type: "itemsSlice/cleanItems",
      },
      {
        payload: {
          name: "New Item",
          price: 0,
          quantity: 0,
          total: 0,
        },
        type: "itemsSlice/addItem",
      },
    ]);
  });

  it("should delete an item when the button is clicked", () => {
    render(
      <Provider store={store}>
        <ItemList renderEditItems={false} />
      </Provider>
    );

    const buttonElement = screen.getByTestId("delete-button-0");

    fireEvent.click(buttonElement);

    const actions = store.getActions();

    expect(actions).toEqual([
      {
        payload: undefined,
        type: "itemsSlice/cleanItems",
      },
      {
        payload: {
          index: 0,
        },
        type: "itemsSlice/removeItem",
      },
    ]);
  });
});
