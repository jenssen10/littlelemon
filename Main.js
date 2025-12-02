 // src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

 import { fetchData } from "./api";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
/* -------------------------------------------
   Reducer Functions
------------------------------------------- */

// Called at app start — returns today's available times
export function initializeTimes() {
  const today = new Date().toISOString().split("T")[0];
  return fetchData(today); // API call for today
}

// Called when a user selects a new date
export function updateTimes(state, action) {
  switch (action.type) {
    case "update_times":
      return fetchData(action.date); // Fetch new times based on date

    default:
      return state;
  }
}

function Main() {
  // LIFTED STATE (belongs here!)
  
  function updateTimes(date) {
    const day = new Date(date).getDate();

    if (isNaN(day)) return [];

    return day % 2 === 0
      ? ["12:00 PM", "1:30 PM", "3:00 PM", "6:00 PM"]
      : ["11:00 AM", "2:00 PM", "4:00 PM"];
  }

  function timesReducer(state, action) {
    switch (action.type) {
      case "UPDATE_TIMES":
        return updateTimes(action.date);

      default:
        return state;
    }
  }

  function initializeTimes() {
    return ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"];
  }

  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );

  function handleDateChange(date) {
    dispatch({ type: "UPDATE_TIMES", date });
  }

  const navigate = useNavigate();

  function handleBookingSubmit(formData) {
    navigate("/confirmed", { state: { booking: formData } });

  }

  const [isLoading, setIsLoading] = useState(false);

  function submitForm(formData) {
    setIsLoading(true); // show spinner
    const success = submitAPI(formData); // call provided API
 setIsLoading(false); // hide spinner
    
 if (success) {
      navigate("/confirmed", {
        state: { booking: formData },
      });
    } else {
      console.error("Form submission failed.");
    }
  }

  return (
    <main>
      <h2>Book a Table</h2>

      <BookingForm
        availableTimes={availableTimes}
        onDateChange={handleDateChange}
        onSubmit={handleBookingSubmit}
        isLoading={isLoading}
      />
    </main>
  );
}

export default Main;

