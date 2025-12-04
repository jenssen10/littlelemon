import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  validateName,
  validateEmail,
  validateGuests,
} from "../validation";

//
// Helper Test Component
//
function TestInput({ label, validator }) {
  const [value, setValue] = React.useState("");
  const [valid, setValid] = React.useState(null);

  const handleChange = (e) => {
    const v = e.target.value;
    setValue(v);
    setValid(validator(v));
  };

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input id={label} value={value} onChange={handleChange} />
      <p data-testid={`${label}-valid`}>
        {valid === null ? "" : valid ? "valid" : "invalid"}
      </p>
    </div>
  );
}

//
// TESTS
//
describe("JavaScript validation function tests", () => {
  test("validateName: valid and invalid states", () => {
    render(<TestInput label="name" validator={validateName} />);
    const input = screen.getByLabelText("name");
    const status = screen.getByTestId("name-valid");

    // invalid
    fireEvent.change(input, { target: { value: "Jo" } });
    expect(status.textContent).toBe("invalid");

    // valid
    fireEvent.change(input, { target: { value: "John" } });
    expect(status.textContent).toBe("valid");
  });

  test("validateEmail: valid and invalid states", () => {
    render(<TestInput label="email" validator={validateEmail} />);
    const input = screen.getByLabelText("email");
    const status = screen.getByTestId("email-valid");

    // invalid
    fireEvent.change(input, { target: { value: "bademail" } });
    expect(status.textContent).toBe("invalid");

    // valid
    fireEvent.change(input, { target: { value: "test@example.com" } });
    expect(status.textContent).toBe("valid");
  });

  test("validateGuests: valid and invalid states", () => {
    render(<TestInput label="guests" validator={validateGuests} />);
    const input = screen.getByLabelText("guests");
    const status = screen.getByTestId("guests-valid");

    // invalid - too low
    fireEvent.change(input, { target: { value: "0" } });
    expect(status.textContent).toBe("invalid");

    // invalid - too high
    fireEvent.change(input, { target: { value: "20" } });
    expect(status.textContent).toBe("invalid");

    // valid
    fireEvent.change(input, { target: { value: "4" } });
    expect(status.textContent).toBe("valid");
  });
});
