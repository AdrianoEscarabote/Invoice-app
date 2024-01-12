import { render } from "@testing-library/react";
import ItemList from ".";

describe("ItemList", () => {
  it("should render correctly", () => {
    render(
      <ItemList
        items={[
          {
            name: "Email Design",
            price: 400,
            qty: 2,
          },
        ]}
      />
    );
  });
});
