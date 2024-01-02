import React, { useState } from 'react';
import "../styles/bookingForm.css";
import Button from './Button/Button';

const BookingForm = ({ onSubmit }) => {
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
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                        <option value="21:00">21:00</option>
                        <option value="22:00">22:00</option>
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
                    <p className="form-label">Occassion:</p>
                    <select
                        name="occassion"
                        value={formData.occassion}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Occassion</option>
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
