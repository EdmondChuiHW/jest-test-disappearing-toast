import Toast from "./Toast";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";

beforeEach(() => jest.useFakeTimers());
afterEach(() => jest.useRealTimers());

it("disappears after 5 seconds", async () => {
  render(<Toast />);

  const textElement = await screen.findByText(
    "We have been trying to reach out about your extended warranty"
  );

  expect(textElement).toBeInTheDocument();

  await act(async () => {
    await jest.advanceTimersByTimeAsync(4.9 * 1000);
  });
  expect(textElement).toBeInTheDocument();

  await act(async () => {
    await jest.advanceTimersByTimeAsync(5.1 * 1000);
  });
  expect(textElement).not.toBeInTheDocument();
});
