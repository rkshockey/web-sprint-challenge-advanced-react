import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    function input (label, value) {
        const inputField = screen.getByLabelText(label);
        userEvent.type(inputField, value);
        return value;
    }
    function output (value){
        const returnTxt = screen.queryByText(value)
        expect(returnTxt).toBeInTheDocument
    }

    const fName = input(/first name/i, 'Romy');
    const lname = input(/last name/i, 'Shockey');
    const address = input(/address/i, '123 Some Rd');
    const city = input(/city/i, 'Townsville');
    const state = input(/state/i, 'PA');
    const zip = input (/zip/i, '12345');
    const submitBtn = screen.getByRole('button')
    userEvent.click(submitBtn)
    output(fName)
    output(lname)
    output(address)
    output(city)
    output(state)
    output(zip)
    const success = screen.queryByTestId('successMessage')
    expect(success).toBeInTheDocument
});
