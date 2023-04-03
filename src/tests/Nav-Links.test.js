import React from 'react';
import { render, screen} from '@testing-library/react';
import { UserProvider } from '../userDetails';
import { MemoryRouter } from 'react-router-dom';

import Links from '../components/Nav-Links';


const mockProps = {name: "#", alt: "Cart", path: "/cart"}
const mockCartItemCount = 1

let component;

beforeEach(() => {

    component = render (
    <UserProvider value={{cartItemCount: mockCartItemCount}}>
        <MemoryRouter initialEntries={["/"]}>
            <Links name={mockProps.name} alt={mockProps.alt} path={mockProps.path} />
        </MemoryRouter>
    </UserProvider>
    )
})

describe("test Nav links", () => {
    it("cart matches cartItemCount", () => {
        console.log(mockCartItemCount)
        const cartCount = screen.getByTestId("cartNum");
        expect(cartCount.textContent).toBe(`${mockCartItemCount}`)
    })
})