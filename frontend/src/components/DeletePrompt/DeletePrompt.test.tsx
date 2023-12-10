import { render } from "@testing-library/react";
import DeletePrompt from ".";

describe("DeletePrompt", () => {
  it("should render correctly", () => {
    render(<DeletePrompt closePrompt={() => {}} invoice={"#XM9141?"} />);
  });
});
