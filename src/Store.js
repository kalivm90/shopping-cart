import React, { useEffect, useState, useContext } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Store-Card"
import "./assets/styles/Store.css"
import { UserContext } from "./userDetails"
import { ProductContext } from "./ProductProvider"


const Store = () => {
    const { username } = useContext(UserContext);
    const { product } = useContext(ProductContext);
    const localUser = JSON.parse(localStorage.getItem("user"))

    const { first, last } = username 
    ? username 
    : localUser 
        ? localUser 
        : { first: "", last: "", email: "" };


    return (
        <div className="Store">
            <Navbar />
            <div className="Store-Body">
                {first && last ?
                        <h1>Welcome, {first} {last}</h1>
                        : <h1>Products</h1>
                }
                <div className="Store-Main">                        
                    <div className="Card-Container">
                        {Object.keys(product).map(i => {
                        return <Card 
                                    src={product[i].src} 
                                    name={product[i].name} 
                                    desc={product[i].desc} 
                                    cost={product[i].cost}
                                    index={product[i].index}/>
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}


export default Store




