import { useState } from "react";

function BookingForm({ availableTimes,onDateChange,onSubmit, isLoading }) {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });

// No more availableTimes state here!

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();   // stop page reload
    onSubmit(formData);  // ✅ pass form data up to Main.js
  }

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          required
          minLength="2"
          maxLength="40"
          pattern="^[A-Za-z\s]+$"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          required
          value={formData.date}
          onChange={(e) => {
    handleChange(e);
    onDateChange(e.target.value); // ⬅ notify Main.jsx
  }}
        />
      </div>

      <div>
        <label>Time:</label>
        <select
          name="time"
          required
          value={formData.time}
          onChange={handleChange}
        >
          <option value="">Select a time</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Guests:</label>
        <input
          type="number"
          name="guests"
          min="1"
          max="20"
          required
          value={formData.guests}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="occasion">Occasion:</label>
        <select
          id="occasion"
          name="occasion"
          required
          value={formData.occasion}
          onChange={handleChange}
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Business">Business</option>
          <option value="Casual">Casual</option>
        </select>
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Processing..." : "Book Now"}
      </button>

      {isLoading && <div className="spinner"></div>}
    </form>
  );
}

export default BookingForm;
