import React from 'react';
import { render, screen, userEvent } from '@testing-library/react';
import App from "../App"
import SignUp from '../components/App-SignUp';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../userDetails';

let component;

beforeEach(() => {
    component = render (
        <UserProvider>
          <MemoryRouter initialEntries={["/"]}>
              <App />
          </MemoryRouter>
      </UserProvider>
    )
})

describe("Renders App", () => {

  test('renders the navbar', () => {
    expect(screen.getByRole("navigation"))
  });

  test('renders App-Content', () => {
    expect(screen.getByRole("heading", {name: "Sideload apps for IOS and Android"}))
  })

  test("renders App-SignUp", () => {
    expect(screen.getByRole("heading", {name: "Sign Up!"}));
  })

  test("renders Footer", () => {
    expect(screen.getByRole("contentinfo"))
  })

});
