import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "../styles/bookingForm.css";
import Button from './Button/Button';
import { fetchAPI, submitAPI } from '../api';

const BookingForm = ({ onSubmit, updateTimes, availableTimes = [] }) => {
  const formik = useFormik({
    initialValues: {
      date: '',
      reservationTime: '',
      guestsCount: 1,
      occasion: '',
    },
    validationSchema: Yup.object({
      date: Yup.string().required('Please choose a date'),
      reservationTime: Yup.string().required('Please choose a time'),
      guestsCount: Yup.number().required('Please enter the number of guests').min(1, 'Must be at least 1').max(10, 'Cannot be more than 10'),
      occasion: Yup.string().required('Please select an occasion'),
    }),
    onSubmit: async (values) => {
      const success = await submitAPI(values);

      if (success) {
        onSubmit(values);
        formik.resetForm();
      } else {
        console.error('Unable to submit the form.');
      }
    },
  });

  useEffect(() => {
    const initializeTimes = async () => {
      const today = new Date();
      const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
      const times = await fetchAPI(formattedDate);
      updateTimes(formattedDate);
      return times;
    };

    initializeTimes();
  }, [updateTimes]);

  return (
    <div className='form-container'>
      <h1 id="booking-heading" className='booking-heading'>Book Your Table</h1>
      <form
        className="booking-form"
        onSubmit={formik.handleSubmit}
        aria-labelledby="booking-heading"
      >
        <label>
          <p className="form-label">Choose a Date:</p>
          <input
            type="date"
            name="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-label="Choose a Date"
            aria-required="true"
            aria-invalid={formik.touched.date && !!formik.errors.date}
          />
          {formik.touched.date && formik.errors.date && <div className="error-message">{formik.errors.date}</div>}
        </label>
        <br />
        <label>
          <p className="form-label">Choose Time:</p>
          <select
            name="reservationTime"
            value={formik.values.reservationTime}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-label="Choose Time"
            aria-required="true"
            aria-invalid={formik.touched.reservationTime && !!formik.errors.reservationTime}
          >
            <option value="">Select Time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {formik.touched.reservationTime && formik.errors.reservationTime && <div className="error-message">{formik.errors.reservationTime}</div>}
        </label>
        <br />
        <label>
          <p className="form-label">Number of Guests:</p>
          <input
            type="number"
            name="guestsCount"
            min="1"
            max="10"
            value={formik.values.guestsCount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-label="Number of Guests"
            aria-required="true"
            aria-invalid={formik.touched.guestsCount && !!formik.errors.guestsCount}
          />
          {formik.touched.guestsCount && formik.errors.guestsCount && <div className="error-message">{formik.errors.guestsCount}</div>}
        </label>
        <br />
        <label>
          <p className="form-label">Occasion:</p>
          <select
            name="occasion"
            value={formik.values.occasion}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-label="Occasion"
            aria-required="true"
            aria-invalid={formik.touched.occasion && !!formik.errors.occasion}
          >
            <option value="">Select Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Engagement">Engagement</option>
          </select>
          {formik.touched.occasion && formik.errors.occasion && <div className="error-message">{formik.errors.occasion}</div>}
        </label>
        <br />
        <Button
          type="submit"
          disabled={formik.isSubmitting || !formik.isValid}
          aria-label="Make a Reservation"
        >
          Make a Reservation
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
