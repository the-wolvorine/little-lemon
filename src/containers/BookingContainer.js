import React, { useState, useReducer, useRef } from 'react';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingsList';

// Initial state for availableTimes
const initialTimes = [
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
];

// Reducer function for updating availableTimes based on the selected date
const timesReducer = (state, action) => {
  // For now, just return the same available times regardless of the date
  return initialTimes;
};


const BookingContainer = () => {
  const [submittedData, setsubmittedData] = useState(null);
  // State and dispatch for availableTimes
  const [availableTimes, dispatch] = useReducer(timesReducer, initialTimes);

  // Function to initialize availableTimes based on the selected date
  const initializeTimes = () => {
    // For now, just return the same available times regardless of the date
    return initialTimes;
  };

  // Function to update availableTimes based on the selected date
  const updateTimes = (selectedDate) => {
    // For now, just dispatch the state change with the same available times
    dispatch({ type: 'UPDATE_TIMES', payload: initializeTimes(selectedDate) });
  };

  const handleBookingSubmit = (formData) => {
    // Add the new booking to the list of bookings
    setsubmittedData(formData);
  };

  const containerRef = useRef(null);

  return (
    <div ref={containerRef}>
      <BookingForm onSubmit={handleBookingSubmit} updateTimes={updateTimes} availableTimes={availableTimes} />
      {submittedData && <BookingList bookings={submittedData} />}
    </div>
  );
}

export default BookingContainer;