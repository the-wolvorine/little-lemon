import React, { useState } from 'react';
import "../styles/bookingForm.css";
import Button from './Button/Button';

const BookingForm = ({ onSubmit, updateTimes, availableTimes }) => {
  const [formData, setFormData] = useState({
    date: '',
    reservationTime: '',
    guestsCount: 1,
    occassion: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Call updateTimes when the date field is changed
    if (name === 'date') {
      updateTimes(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      date: '',
      reservationTime: '',
      guestsCount: 1,
      occassion: ''
    });
  };

  return (
    <div className='form-container'>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          <p className="form-label">Choose a Date:</p>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          <p className="form-label">Choose Time:</p>
          <select
            name="reservationTime"
            value={formData.reservationTime}
            onChange={handleInputChange}
          >
            <option value="">Select Time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          <p className="form-label">Number of Guests:</p>
          <input
            type="number"
            name="guestsCount"
            min="1"
            max="10"
            value={formData.guestsCount}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          <p className="form-label">Occasion:</p>
          <select
            name="occassion"
            value={formData.occassion}
            onChange={handleInputChange}
          >
            <option value="">Select Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Engagement">Engagement</option>
          </select>
        </label>
        <br />
        <Button type="submit">Make a Reservation</Button>
      </form>
    </div>
  );
};

export default BookingForm;
