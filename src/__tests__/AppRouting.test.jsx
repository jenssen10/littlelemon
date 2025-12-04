import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

test("renders HomePage on default route (/)", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  // Something from your home page — modify if needed
  expect(screen.getByText(/Little Lemon/i)).toBeInTheDocument();
});
