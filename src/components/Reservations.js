import React, { useState } from 'react';
import "../styles/reservations.css";
import Button from './Button/Button';

export default function Reservations() {
  // Define state variables
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('17:00');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [selectedOccasion, setSelectedOccasion] = useState('Birthday');

  // State variable for available times
  const [availableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);

  return (
    <div className='form-container'>
        <form className="booking-form">
            <label htmlFor="res-date"><p className='form-label'>Choose date</p></label>
            <input
                type="date"
                id="res-date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
            />

            <label htmlFor="res-time"><p className='form-label'>Choose time</p></label>
            <select
                id="res-time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
            >
                {availableTimes.map((time) => (
                <option key={time} value={time}>
                    {time}
                </option>
                ))}
            </select>

            <label htmlFor="guests"><p className='form-label'>Number of guests</p></label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={numberOfGuests}
                onChange={(e) => setNumberOfGuests(parseInt(e.target.value, 10))}
            />

            <label htmlFor="occasion"><p className='form-label'>Occasion</p></label>
            <select
                id="occasion"
                value={selectedOccasion}
                onChange={(e) => setSelectedOccasion(e.target.value)}
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Engagement">Engagement</option>
            </select>
            <Button type="submit">Make Your Reservation</Button>
            {/* <button type="submit" value="Make Your reservation">Make Your Reservations </button> */}
        </form>
    </div>
  );
}
