import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingsList';

const BookingContainer = () => {
  const [submittedData, setsubmittedData] = useState(null);

  const handleBookingSubmit = (formData) => {
    // Add the new booking to the list of bookings
    setsubmittedData(formData);
  };

  return (
    <div>
      <BookingForm onSubmit={handleBookingSubmit} />
      {submittedData && <BookingList bookings={submittedData} />}
    </div>
  );
}

export default BookingContainer;