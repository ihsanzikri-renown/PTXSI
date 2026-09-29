import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders company wordmark without crashing", () => {
  render(<App />);
  expect(screen.getAllByText(/Xinsheng Steel/i)[0]).toBeInTheDocument();
});
