import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingForm from "./components/BookingForm";

describe('BookingForm', () => {
    test('Renders the BookingForm heading', () => {
        render(<BookingForm />);
        const headingElement = screen.getByText("Book Your Table");
        expect(headingElement).toBeInTheDocument();
    });
});
