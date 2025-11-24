import { useState } from "react";
import "./booking.css";
import BookingForm from "./BookingForm.JS";

function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState([
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
  ]);

  function handleBooking(data) {
    console.log("Booking submitted:", data);
  }

  return (
    <div className="booking-page">
      <h1>Book a Table</h1>

      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
        onSubmit={handleBooking}
      />
    </div>
  );
}

function BookingPage() {
  const [bookingDetails, setBookingDetails] = useState(null);

  function handleBooking(data) {
    setBookingDetails(data);
  }

  return (
    <div className="booking-page">
      <h1>Book a Table</h1>

      <div className="form-area">
        {!bookingDetails ? (
          <BookingForm onSubmit={handleBooking} />
        ) : (
          <div className="confirmation">
            <h2>Booking Confirmed!</h2>
            <p><strong>Name:</strong> {bookingDetails.name}</p>
            <p><strong>Date:</strong> {bookingDetails.date}</p>
            <p><strong>Time:</strong> {bookingDetails.time}</p>
            <p><strong>Guests:</strong> {bookingDetails.guests}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingPage;
