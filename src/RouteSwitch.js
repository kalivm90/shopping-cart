import React, { createContext, useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App"
import Store from "./Store";


export const UserContext = createContext();

export const RouteSwitch = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const localUser = localStorage.getItem("user")
        if (localUser) {
            setUser(JSON.parse(localUser));
        }
    }, [])

    console.log("user:", user);

    return (
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/store" element={<Store />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}