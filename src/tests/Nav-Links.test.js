import React from 'react';
import { render, screen} from '@testing-library/react';
import { UserContext } from '../userDetails';
import { MemoryRouter, renderMatches } from 'react-router-dom';

import Links from '../components/Nav-Links';

let cartItemCount = 1;

const loadComponent = (name, alt, path, id) => {
    let component = render(
        <MemoryRouter basename="/">
          <Links name={name} alt={alt} path={path} id={id} />
        </MemoryRouter>,
        {
          wrapper: ({ children }) => (
            <UserContext.Provider value={{ cartItemCount }}>
              {children}
            </UserContext.Provider>
          ),
        }
      );
    return component
}

describe("test Nav links", () => {
    it('renders link without cart count when alt is not "Cart"', () => {
        let component = loadComponent("store.svg", "Store", "/store", "store");
        const linkElement = screen.getByText('Store');
        expect(linkElement).toBeInTheDocument();
    });
    
    it("cart matches cartItemCount", () => {
        let component = loadComponent("cart.svg", "Cart", "/cart", "cart");
        const cartCountElement = screen.getByTestId('cartNum');
        expect(cartCountElement).toHaveTextContent(`${cartItemCount}`);
    })
});

