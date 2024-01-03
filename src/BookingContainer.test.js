import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingContainer from './containers/BookingContainer';
import * as api from './api';

jest.mock('./api');

describe('BookingContainer', () => {
  it('should initialize times correctly', async () => {
    // Mock the fetchAPI function to return the expected initial times
    api.fetchAPI.mockResolvedValue(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);

    const { result } = render(<BookingContainer />);
    await waitFor(() => {
      // Access the initializeTimes function and get the result
      const initializeTimesResult = result.current.initializeTimes;
      // Expect the result to match the mocked initial times
      expect(initializeTimesResult).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
    });
  });

  it('should update times correctly', async () => {
    // Mock the fetchAPI function to return the expected updated times
    api.fetchAPI.mockResolvedValue(['18:00', '19:00', '20:00', '21:00', '22:00', '23:00']);

    const { result } = render(<BookingContainer />);
    const selectedDate = new Date('2024-01-02'); // Replace with the desired date

    await waitFor(() => {
      // Access the updateTimes function and update the times
      const updatedTimeResults = result.current.updateTimes(selectedDate);
      // Expect the availableTimes to match the mocked updated times
      expect(updatedTimeResults).toEqual(['18:00', '19:00', '20:00', '21:00', '22:00', '23:00']);
    });
  });
});
