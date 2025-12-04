import { render, screen } from "@testing-library/react";
import BookingForm from "../BookingForm";

const mockAvailableTimes = ["12:00 PM", "1:00 PM"];
const mockUpdateTimes = jest.fn();
const mockSubmitForm = jest.fn();

describe("BookingForm Component", () => {
  test("renders static text correctly", () => {
    const mockTimes = ["12:00 PM", "1:00 PM"];
    render(
      <BookingForm
        availableTimes={mockTimes}
        onDateChange={() => {}}
        onSubmit={() => {}}
      />
    );

 // NAME FIELD
  test("Name input has correct HTML validation attributes", () => {
    const input = screen.getByLabelText(/full name/i);

    expect(input).toBeRequired();
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("minlength", "2");
    expect(input).toHaveAttribute("maxlength", "40");
    expect(input).toHaveAttribute("pattern", "^[A-Za-z\\s]+$");
  });

  // DATE FIELD
  test("Date input has correct HTML validation attributes", () => {
    const input = screen.getByLabelText(/choose date/i);

    expect(input).toBeRequired();
    expect(input).toHaveAttribute("type", "date");
  });

  // TIME FIELD
  test("Time dropdown has correct HTML validation", () => {
    const select = screen.getByLabelText(/choose time/i);

    expect(select).toBeRequired();

    // Options were passed as props
    const option1 = screen.getByRole("option", { name: "12:00 PM" });
    const option2 = screen.getByRole("option", { name: "1:00 PM" });

    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
  });

  // GUESTS FIELD
  test("Guests input has number validation attributes", () => {
    const input = screen.getByLabelText(/number of guests/i);

    expect(input).toBeRequired();
    expect(input).toHaveAttribute("type", "number");
    expect(input).toHaveAttribute("min", "1");
    expect(input).toHaveAttribute("max", "20");
  });

  // OCCASION FIELD
  test("Occasion dropdown has required attribute", () => {
    const select = screen.getByLabelText(/occasion/i);

    expect(select).toBeRequired();
    expect(select).toHaveDisplayValue("Select an occasion");
  });


    // Check heading
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/date/i)).toBeInTheDocument();
    expect(screen.getByText(/time/i)).toBeInTheDocument();
    expect(screen.getByText(/guests/i)).toBeInTheDocument();

    // Check button
    expect(screen.getByRole("button", { name: /book now/i })).toBeInTheDocument();
  });
});
