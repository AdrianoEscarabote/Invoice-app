import { render } from "@testing-library/react";
import InputForm from ".";

describe("InputForm", () => {
  it("should render correctly", () => {
    render(<InputForm labelText="label" />);
  });
});
