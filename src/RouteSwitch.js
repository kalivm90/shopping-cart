import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./userDetails";
import { ProductProvider } from "./ProductProvider";
import App from "./App"
import Store from "./Store";
import Cart from "./Cart";


export const RouteSwitch = () => {
  return (
      <UserProvider>
          <ProductProvider>
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
          </ProductProvider>
        </UserProvider>
     )
}

