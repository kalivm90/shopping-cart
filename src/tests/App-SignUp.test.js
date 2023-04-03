import React from 'react';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import SignUp from '../components/App-SignUp';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../userDetails';

const mockUserContext = {
  username: {},
  setUsername: jest.fn(),
};
const mockLocalStorage = {
    user: [{first: "Jill", last: "Baker", email: "jill@gmail.com"}]
}
let component;

beforeEach(() => {
    component = render (
        <UserProvider>
          <MemoryRouter initialEntries={["/"]}>
              <SignUp />
          </MemoryRouter>
      </UserProvider>
    )
})

describe('Sign up form', () => {

    test('testing to make sure all inputs take correct input', () => {
        // your test code here
        const textboxes = screen.getAllByRole("textbox")
        // const name = textboxes.find(text => text.name === "first")

        textboxes.find(text => {
            userEvent.type(text, "Whale")
            expect(text).toHaveValue("Whale");
        })
    });

    test("field shows invalid with incorrect input", () => {
        const textboxes = screen.getAllByRole("textbox")

        const invalid = textboxes.find(text => {
            if (text.name === "first" || "last") {
                userEvent.type(text, "w23")
                // check to see if invalid has been added to className
                expect(text).toHaveClass('invalid')
            } else {
                userEvent.type("dddc");
                expect(text).toHaveClass("invalid")
            }
        })
    }) 

    test("field shows valid when correct input", () => {
        const textboxes = screen.getAllByRole("textbox")

        const valid = textboxes.find(text => {
            if (text.name === "first" || "last") {
                userEvent.type(text, "bobby")
                waitFor(() => {
                    expect(text).toHaveClass("glow valid")
                })
            } else {
                userEvent.type(text, "bob@gmail.com")
                waitFor(() => {
                    expect(text).toHaveClass("glow valid");
                })
            }
        })
    })

    test("Submit fields with correct info", () => {
        const textboxes = screen.getAllByRole("textbox");
        const local = JSON.parse(localStorage.getItem("user"))

        const valid = textboxes.find(text => {
            if (text.name === "first") {
                userEvent.type(text, "Bob")
            } else if (text.name === "last") {
                userEvent.type(text, "Billy")
            } else {
                userEvent.type(text, "dkd@gmail.com");
            }
        })

        const button = screen.getByRole("button")
        userEvent.click(button)

        waitFor(() => {
            const expectedObj = {first: "Bob", last: "Billy", email: "dkd@gmail.com"}
            expect(mockUserContext.setUsername).toHaveBeenCalled();
            expect(mockUserContext.username).toEqual(expectedObj);
            expect(local).toEqual(expectedObj);
        })
    })

    test("Submit fields with info in localStorage", () => {
        const textboxes = screen.getAllByRole("textbox");
        const button = screen.getByRole("button")
        jest.spyOn(window.localStorage.__proto__, "getItem").mockImplementation(key => {
            if (key === "user") {
                return JSON.stringify(mockLocalStorage.user);
            }
            return null 
        })

        const valid = textboxes.find(text => {
            if (text.name === "first") {
                userEvent.type(text, "Jim")
            } else if (text.name === "last") {
                userEvent.type(text, "Sal")
            } else {
                userEvent.type(text, "jim@gmail.com");
            }
        })

        // 2 button clicks to overwrite username already on file
        userEvent.click(button)
        userEvent.click(button)

        const local = JSON.parse(localStorage.getItem("user"))

        waitFor(() => {
            const expectedObj = {first: "Jim", last: "Sal", email: "jim@gmail.com"};
            expect(local).toEqual(expectedObj);
        })
    })
});

