import React from 'react';
import { render, screen} from '@testing-library/react';
import { UserContext } from '../userDetails';
import { ProductContext } from '../ProductProvider';
import { MemoryRouter, renderMatches } from 'react-router-dom';

import Store from "../Store";


const mockProducts = [
    {src: "image.svg", name: "Minecraft", desc: "this is minecraft", cost: 3, index: 1}
]

const mockUser = {
    first: "bob",
    last: "bill",
}

let component;
let runBeforeEach = true;

beforeEach(() => {
    if(runBeforeEach) {
        component = render(
            <ProductContext.Provider value={{products: mockProducts, product: mockProducts[0]}}>
                <UserContext.Provider value={{username: mockUser}}>
                    <MemoryRouter initialEntries={["/store"]}>
                        <Store />
                    </MemoryRouter>
                </UserContext.Provider>
            </ProductContext.Provider>
        )
    }
})

describe("Test Store page", () => {
    it("renders all components", () => {
        const navbar = screen.getByRole("link", {name: "Store Store"});
        // renders card
        const card = screen.getAllByTestId("card")[0]
        const footer = screen.getByTestId("footer")
        
        expect(navbar).toBeInTheDocument()
        expect(card).toBeInTheDocument();
        expect(footer).toBeInTheDocument();
    });
    it("test username is being used in header", () => {
        const header = screen.getByRole("heading", {name: "Welcome, bob bill"});
    })
    it("test heading without username", () => {
        runBeforeEach = false;

        render(
            <ProductContext.Provider value={{products: mockProducts, product: mockProducts[0]}}>
                <UserContext.Provider value={{}}>
                    <MemoryRouter initialEntries={["/store"]}>
                        <Store />
                    </MemoryRouter>
                </UserContext.Provider>
            </ProductContext.Provider>
        )
        const header = screen.getByRole("heading", {name: "Products"});
        expect(header).toBeInTheDocument();
    })
})