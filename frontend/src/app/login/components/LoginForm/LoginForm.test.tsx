import { RenderResult, render } from "@testing-library/react";
import FormLoginPage from ".";
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

describe("FormLoginPage", () => {
  let wrapper: RenderResult;

  beforeEach(async () => {
    (useUserAuthenticated as jest.Mock).mockImplementation(() => {});
    wrapper = render(<FormLoginPage />);
  });

  it("should render correctly", () => {
    render(<FormLoginPage />);
  });
});
