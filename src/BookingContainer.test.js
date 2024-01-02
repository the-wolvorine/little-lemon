import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingContainer from './containers/BookingContainer';

describe('BookingContainer', () => {
  it('should initialize times correctly', () => {
    const { result } = render(<BookingContainer />);
    const initializeTimesResult = result.current.initializeTimes();
    // Update this with the expected initial times based on your implementation
    expect(initializeTimesResult).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  });

  it('should update times correctly', () => {
    const { result } = render(<BookingContainer />);
    const selectedDate = new Date('2024-01-02'); // Replace with the desired date
    result.current.updateTimes(selectedDate);
    const updatedTimes = result.current.availableTimes;
    // Update this with the expected updated times based on your implementation
    expect(updatedTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  });
});
