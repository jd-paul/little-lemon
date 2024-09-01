// OrderingForm.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for extended matchers
import OrderingForm from './OrderingForm'; // Adjust the path as necessary

describe('OrderingForm', () => {
  test('renders the form with all fields and buttons', () => {
    render(<OrderingForm onClose={() => {}} />);
    
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of people/i)).toBeInTheDocument();
    expect(screen.getByText(/cancel/i)).toBeInTheDocument();
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
  });

  test('validates required fields and shows error messages', () => {
    render(<OrderingForm onClose={() => {}} />);

    fireEvent.click(screen.getByText(/submit/i));

    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/valid email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/date is required/i)).toBeInTheDocument();
    expect(screen.getByText(/time is required/i)).toBeInTheDocument();
    expect(screen.getByText(/number of people must be at least 1/i)).toBeInTheDocument();
  });

  test('submits the form with valid input', () => {
    const mockOnClose = jest.fn();
    render(<OrderingForm onClose={mockOnClose} />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2024-09-01' } });
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/number of people/i), { target: { value: '2' } });

    fireEvent.click(screen.getByText(/submit/i));

    // Check if form submission logic (or close function) is called
    expect(mockOnClose).toHaveBeenCalled();
  });

  test('cancel button closes the form', () => {
    const mockOnClose = jest.fn();
    render(<OrderingForm onClose={mockOnClose} />);

    fireEvent.click(screen.getByText(/cancel/i));

    // Check if the onClose function is called
    expect(mockOnClose).toHaveBeenCalled();
  });
});
