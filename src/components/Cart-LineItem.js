import { useContext, useEffect } from "react"
import { ProductContext } from "../ProductProvider"
import { UserContext } from "../userDetails"
import { getLocalStorage, setLocalStorage } from "../Util"

import {stringToDollar} from "../Util"

const LineItem = (props) => {

    const {product} = useContext(ProductContext);
    const {cartItems, setCartItems} = useContext(UserContext);
    const { cartItemCount, setCartItemCount } = useContext(UserContext);

    const increment = () => {
        const index = cartItems.findIndex(item => item.name === props.name);
        const local = JSON.parse(localStorage.getItem("cartItems"))
        if (index !== -1) {
            const newCartItems = [...cartItems];
            newCartItems[index].num += 1;
            local[index].num += 1

            setCartItems(newCartItems);
            localStorage.setItem("cartItems", JSON.stringify(local));
        }
    }

    const decrement = () => {
        const index = cartItems.findIndex(item => item.name === props.name);

        if (index !== -1) {
          const newCartItems = [...cartItems];
          if (newCartItems[index].num > 1) {
            newCartItems[index].num -= 1;
          } else {
            newCartItems.splice(index, 1);
            setLocalStorage("cartItemCount", cartItemCount - 1)
            setCartItemCount(cartItemCount - 1);
          }
          setCartItems(newCartItems);
          setLocalStorage("cartItems", [...newCartItems]);
        }
    }

    const getImage = () => {
        let imageLink;
        product.forEach(i => (i.name === props.name) ? imageLink = i.src : {})
        return imageLink
    }


    return (
        <tr id={props.index}>
            <td className="Name">
                <div className="Img-Name-Container">
                    <img id="test" src={getImage()}></img>
                    <p id="line-title">{props.name}</p>
                </div>
            </td>
            <td className="Cost">
                <p>{stringToDollar(props.cost)}</p>
            </td>
            <td className="Qty">
                <div>
                    <p>{props.qty}</p>
                </div>
            </td>
            <td className="Total">
                <p>{stringToDollar(props.cost * props.qty)}</p> {/* stringToDollar(props.cost * props.qty) */} {/* updateTotal() */}
            </td>
            <td>
                <div className="Inc-Dec">
                    <button onClick={decrement}>-</button>
                    <button onClick={increment}>+</button>
                </div>
            </td>
        </tr> 
    )
}


export default LineItem