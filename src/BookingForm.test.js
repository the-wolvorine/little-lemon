import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Your Table");
    expect(headingElement).toBeInTheDocument();
})