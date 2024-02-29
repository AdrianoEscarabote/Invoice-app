import { render, screen } from "@testing-library/react";
import LogoutButton from ".";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe("LogoutButton", () => {
  it("should render correctly", () => {
    render(<LogoutButton />);
  });

  it("should pass props correctly", () => {
    render(<LogoutButton data-testid="button" />);

    const element = screen.getByTestId("button");

    expect(element).toBeInTheDocument();
  });
});
