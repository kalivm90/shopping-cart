import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import Content from '../components/App-Content';
import { MemoryRouter } from 'react-router-dom';

let component;

beforeEach(() => {
    component = render (
        <MemoryRouter initialEntries={["/"]}>
            <Content/>
        </MemoryRouter>
    )
})


describe("Test Content Component", () => {
    it("makes sure component renders", () => {
        const header = screen.getByRole("heading", {name: "Sideload apps for IOS and Android"})
        const button = screen.getByRole("button", {name: "Go To Store"});
        expect(header).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    })

    it('should navigate to the store page when the button is clicked', async () => {
        const button = screen.getByRole("button", {name: "Go To Store"});
        userEvent.click(button)
        waitFor(() => {
            expect(window.location.pathname).toEqual('/store');
        })
    })
})