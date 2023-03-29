import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Links from "./Nav-Links";

import "../assets/styles/Navbar.css"

import Home from "../assets/images/home-circle.svg"
import Store from "../assets/images/store.svg"
import Cart from "../assets/images/cart.svg"
import Search from "../assets/images/magnify.svg"
import Phone from "../assets/images/phone.png"


const Navbar = () => {

    const location = useLocation();

    const images = [
        {"name": Home, alt: "Home", "path": "/"},
        {"name": Store, alt: "Store", "path": "/store"},
        {"name": Cart, alt: "Cart", "path": "/cart"}
    ]

    const randColor = () => {
        const letters = '0123456789ABCDEF';
        let newColor = "#";

        Array.from({length: 6}, (_, i) => {
            const rand = Math.floor(Math.random() * letters.length);
            newColor += letters.charAt(rand);
        })

        return newColor
    }

    useEffect(() => {   
        const letters = document.querySelectorAll("#rand");
        letters.forEach(i => {
            console.log(i)
            i.style.color = randColor();
        })
    }, []);

    return (
        <nav className="Navbar">
            <div className="Navbar-Title">
                <img className="svg" src={Phone} alt="Phone"></img>
                <h1>
                    <span>App </span><span>Store</span>
                </h1>
            </div>
            <div className="Navbar-Links">
                {images.map((i) => {
                    return <Links 
                            id={location.pathname === i.path ? "active" : ""} 
                            name={i.name} 
                            alt={i.alt} 
                            path={i.path}/>
                })}
                <div className="Links-Search">
                    <input type="text" className="glow" placeholder="Search"></input>
                    <img className="svg" id="searchButton" src={Search} alt="Search" placeholder="Search"></img>
                </div>

                <div className="Hamburger" style={{
                    visibility: "hidden",
                    display: "none",
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar