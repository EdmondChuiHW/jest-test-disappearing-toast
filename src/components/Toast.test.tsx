import Toast from "./Toast";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";

beforeEach(() => jest.useFakeTimers());
afterEach(() => jest.useRealTimers());

it("disappears after 5 seconds", () => {
  render(<Toast />);

  const textElement = screen.queryByText(
    "We have been trying to reach out about your extended warranty"
  );

  expect(textElement).toBeInTheDocument();

  act(() => jest.advanceTimersByTime(4.9 * 1000));
  expect(textElement).toBeInTheDocument();

  act(() => jest.advanceTimersByTime(150));
  expect(textElement).not.toBeInTheDocument();
});
