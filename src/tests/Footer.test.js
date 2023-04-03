import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from 'react-router-dom';

import Footer from "../components/Footer"

let component;

beforeEach(() => {
    component = render (
        <MemoryRouter initialEntries={["/"]}>
            <Footer />
        </MemoryRouter>
    )
})

describe("Footer Test", () => {
    it("Makes sure footer renders", () => {
        const name = screen.getByText("Kalivm90 © 2023")
        expect(name).toBeInTheDocument();
    })
    
    it("Redirects to github", () => {
        const link = screen.getByRole("link")
        userEvent.click(link)
        waitFor(() => {
            expect(window.location.pathname).toBe("https://github.com/kalivm90?tab=repositories")
        })
    })
})