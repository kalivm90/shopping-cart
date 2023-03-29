import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./userDetails";
import App from "./App"
import Store from "./Store";
import Cart from "./Cart";



export const RouteSwitch = () => {
    return (
        <UserProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" exact element={<App />} />
                <Route
                   path="/store"
                   exact
                   element={<Store />} />
                <Route path="/cart" element={<Cart />}></Route>
              </Routes>
            </BrowserRouter>
          </UserProvider>
       )
}
