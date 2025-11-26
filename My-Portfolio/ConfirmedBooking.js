import { useLocation } from "react-router-dom";

function ConfirmedBooking() {
  const { state } = useLocation();
  const booking = state?.booking;

  return (
    <main className="confirmation-page">
      <h1>Booking Confirmed 🎉</h1>

      {booking ? (
        <>
          <h3>Reservation Details</h3>
          <ul>
            <li><strong>Name:</strong> {booking.name}</li>
            <li><strong>Date:</strong> {booking.date}</li>
            <li><strong>Time:</strong> {booking.time}</li>
            <li><strong>Guests:</strong> {booking.guests}</li>
          </ul>
        </>
      ) : (
        <p>No booking details found.</p>
      )}

      <a href="/" className="back-home">Return Home</a>
    </main>
  );
}

export default ConfirmedBooking;

