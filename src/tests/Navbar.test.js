import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import { UserProvider } from '../userDetails';
import { MemoryRouter } from 'react-router-dom';

import Navbar from "../components/Navbar"

let component;
beforeEach(() => {
    component = render (
    <UserProvider>
        <MemoryRouter initialEntries={["/"]}>
            <Navbar/>
        </MemoryRouter>
    </UserProvider>
    )
})

const userClick = (link, path) => {
    userEvent.click(link)
    waitFor(() => expect(window.location.pathname).toBe(path));
}


describe("Navbar test", () => {
    it("Make sure it renders", () => {
        const app = screen.getByText("App");
        expect(app).toBeInTheDocument();
    })
    it("Test that links work", () => {
        const links = screen.getAllByRole("link")

        links.find(i => {
            if (i.textContent === "Home") {
                userClick(i, "/");
            } else if (i.textContent === "Store") {
                userClick(i, "/store")
            } else {
                userClick(i, "/cart")
            }
        })
    })
})