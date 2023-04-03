import React from 'react';
import { render, screen, waitFor} from '@testing-library/react';
import { UserContext } from '../userDetails';
import { MemoryRouter, renderMatches } from 'react-router-dom';
import Card from '../components/Store-Card';

import Store from "../Store";
import userEvent from '@testing-library/user-event';

const setCartItemsMock = jest.fn();
const setCartItemCountMock = jest.fn();

const mockProducts = {
    src: "image.svg", 
    name: "Minecraft", 
    desc: "this is minecraft", 
    cost: 3, 
    index: 1
}

const mockUser = {
    first: "bob",
    last: "bill",
}

let component;
beforeEach(() => {
    component = render(
        <UserContext.Provider value={{
                                    username: mockUser, 
                                    setCartItems: setCartItemsMock, 
                                    setCartItemCount: setCartItemCountMock}}>
            <MemoryRouter initialEntries={["/store"]}>
                <Card src={mockProducts.src} name={mockProducts.name} desc={mockProducts.desc} cost={mockProducts.cost} index={mockProducts.index}/>
            </MemoryRouter>
        </UserContext.Provider>
    )
})

describe("test product cards", () => {
    test("all card items render", () => {
        const name = screen.getByRole("heading", {name: "Minecraft"})
        const desc = screen.getByTestId("desc");
        const src = screen.getByTestId("src")
        const cost = screen.getByTestId("cost");
        const button = screen.getByRole("button", {name: "Add To Cart"})

        expect(name).toBeInTheDocument();
        expect(desc).toBeInTheDocument();
        expect(src).toBeInTheDocument();
        expect(cost).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    })
    test("correct value for cost", () => {
        const cost = screen.getByTestId("cost");

        expect(cost.textContent).toEqual(`$${mockProducts.cost}.00`);        
    })
    test("button click updates setCardItemCount", () => {
        const button = screen.getByRole("button", {name: "Add To Cart"})
        userEvent.click(button);
        waitFor(() => {
            expect(setCartItemCountMock).toHaveBeenCalledWith(1);
        })
    }) 
    test("button click updates setCartItems", () => {
        const button = screen.getByRole("button", { name: "Add To Cart" });
        userEvent.click(button);
        expect(setCartItemsMock).toHaveBeenCalledWith([
          {name: mockProducts.name, cost: mockProducts.cost, num: 2},
        ]);
      });
})