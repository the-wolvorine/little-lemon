import React from 'react';
import "../styles/bookingList.css";

const BookingList = ({ bookings }) => {
    return (
        <div className='booking-card-container'>
            <div className='booking-card'>
                <h2>Booking Confirmed:</h2>
                <p>Date: {bookings.date}</p>
                <p>Time: {bookings.reservationTime}</p>
                <p>Number of Guests: {bookings.guestsCount}</p>
                <p>Occassion: {bookings.occassion}</p>
            </div>
            
        </div>
    );
};

export default BookingList;
