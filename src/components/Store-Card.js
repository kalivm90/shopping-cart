import React, { useContext, useEffect, useState } from "react"
import "../assets/styles/Card.css"
import { UserContext } from "../userDetails"
import { stringToDollar, getLocalStorage, setLocalStorage } from "../Util"

const Card = (props) => {

  const { cartItemCount, setCartItemCount } = useContext(UserContext);
  const { cardItems, setCartItems } = useContext(UserContext)


  const checkDuplicates = (localCart, obj) => {
    if (localCart) {
      const exists = localCart.some((item) => item.name === obj.name);
      if (exists) {
        const index = localCart.findIndex(item => item.name === obj.name);
        localCart[index].num += 1
        localStorage.setItem("cartItems", JSON.stringify(localCart));
        setCartItems(localCart)
      } else {
        localStorage.setItem("cartItems", JSON.stringify([...localCart, obj]));
        setCartItems([...localCart, obj]);
      }
    }
  }

  const setLocalCart = () => {
    const localCart = JSON.parse(localStorage.getItem("cartItems"))
    const obj = { "name": props.name, "cost": props.cost, "num": 1 };
    if (localCart) {
      checkDuplicates(localCart, obj);
    } else {
      localStorage.setItem("cartItems", JSON.stringify([obj]));
      setCartItems([obj])
    }
  }

  const handleClick = () => {
    setCartItemCount(cartItemCount + 1)
    localStorage.setItem("cartItemCount", cartItemCount + 1);
    setLocalCart();
  }

  return (
    <div className="Card" id={props.index}>
      <div className="Card-Image">
        <img className="prod-img" src={props.src} alt={props.name} />
      </div>
      <div className="Card-Details">
        <h2 className="Card-Name">{props.name}</h2>
        <p className="Card-Desc">{props.desc}</p>
        <div className="Price-Container">
          <p className="Card-Price">{stringToDollar(props.cost)}</p>
          <button className="Card-Add" onClick={handleClick}>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Card