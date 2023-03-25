import React, { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App"
import Store from "./Store";


const RouteSwitch = () => {

    const [user, setUser] = useState(null);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App user={user} setUser={setUser} />} />
                <Route path="/store" element={<Store />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch