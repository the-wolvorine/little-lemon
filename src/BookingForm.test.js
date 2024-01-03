import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import BookingForm from './components/BookingForm';

describe('BookingForm component', () => {
    test('Renders the BookingForm heading', () => {
        render(<BookingForm />);
        const headingElement = screen.getByText("Book Your Table");
        expect(headingElement).toBeInTheDocument();
    });
    test('renders form with correct attributes', () => {
        render(<BookingForm />);
        
        // Check form elements and attributes
        expect(screen.getByLabelText("choose a date")).toHaveAttribute('type', 'date');
        expect(screen.getByLabelText("choose time")).toHaveAttribute('name', 'reservationTime');
        expect(screen.getByLabelText("number of guests")).toHaveAttribute('type', 'number');
        expect(screen.getByLabelText("occasion")).toHaveAttribute('name', 'occasion');
        expect(screen.getByText("make a reservation")).toHaveAttribute('type', 'submit');
    });

    test('displays error messages for invalid input', async () => {
        render(<BookingForm />);
        
        // Trigger form submission without filling in required fields
        fireEvent.click(screen.getByText("make a reservation"));
        
        // Check for error messages
        await waitFor(() => {
        expect(screen.getByText("please choose a date")).toBeInTheDocument();
        expect(screen.getByText("please choose a time")).toBeInTheDocument();
        expect(screen.getByText("please enter the number of guests")).toBeInTheDocument();
        expect(screen.getByText("please select an occasion")).toBeInTheDocument();
        });
    });

    test('submits form with valid input', async () => {
        const onSubmitMock = jest.fn();
        render(<BookingForm onSubmit={onSubmitMock} />);
        
        // Fill in valid input
        fireEvent.change(screen.getByLabelText("choose a date"), { target: { value: '2024-01-01' } });
        fireEvent.change(screen.getByLabelText("choose time"), { target: { value: '18:00' } });
        fireEvent.change(screen.getByLabelText("number of guests"), { target: { value: '5' } });
        fireEvent.change(screen.getByLabelText("occasion"), { target: { value: 'Birthday' } });
        
        // Submit the form
        fireEvent.click(screen.getByText("make a reservation"));
        
        // Check that the form was submitted
        await waitFor(() => {
        expect(onSubmitMock).toHaveBeenCalledWith({
            date: '2024-01-01',
            reservationTime: '18:00',
            guestsCount: 5,
            occasion: 'Birthday',
        });
        });
    });
});

