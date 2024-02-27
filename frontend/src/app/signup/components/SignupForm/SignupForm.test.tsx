import { RenderResult, render } from "@testing-library/react";
import SignupForm from ".";
import useUserAuthenticated from "@/hooks/useUserAuthenticated";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

jest.mock("../../../../hooks/useUserAuthenticated", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("SignupForm", () => {
  let wrapper: RenderResult;

  beforeEach(async () => {
    (useUserAuthenticated as jest.Mock).mockImplementation(() => {});
    wrapper = render(<SignupForm />);
  });

  it("should render correctly", () => {
    render(<SignupForm />);
  });
});
