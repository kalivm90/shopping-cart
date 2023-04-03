import { UserContext } from "./userDetails"
import { useContext, useEffect, useState } from "react"
import { stringToDollar } from "./Util"
import "./assets/styles/Cart.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import LineItem from "./components/Cart-LineItem"

const Cart = () => {
    const {cartItems} = useContext(UserContext)
    const local = JSON.parse(localStorage.getItem("cartItems"))
    const [total, setTotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);

    // in percent
    const generalTax = 10

    useEffect(() => {
        let newTotal = 0;
        cartItems.forEach(i => {
            newTotal += i.cost * i.num 
        })

        setTotal(newTotal);
        setTax(generalTax / 100 * total);
        setGrandTotal(total + tax)
    }, [cartItems]);

    return (
        <div className="Cart">
            <Navbar />
            <div className="Cart-Body">
                <div className="Body-Container">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Cost</th>
                                <th>Qty</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {cartItems ? cartItems.map(item => {
                            return <LineItem 
                                    name={item.name} 
                                    cost={item.cost} 
                                    qty={item.num} 
                                    index={item.index}/>
                        }) : null}
                        </tbody>
                    </table>
                    <div className="Grand-Total">
                        <div className="Grand-Container">
                            <div className="Grand-Item">
                                <p>Total: </p>
                                <p id="total">{stringToDollar(total)}</p>
                            </div>
                            <div className="Grand-Item">
                                <p>Tax: </p>
                                <p>{stringToDollar(tax)}</p>
                            </div>
                            <div className="Grand-Item">
                                <p>Discount: </p>
                                <p>{stringToDollar(discount)}</p>
                            </div>
                            <div className="Grand-Item">
                                <p>Grand Total: </p>
                                <p>{stringToDollar(grandTotal)}</p>
                            </div>
                            <div className="Grand-Pay">
                                <button>Pay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


// {cartItems.length > 1 ? cartItems.map((item, index) => {
//     return <LineItem name={item.name} cost={item.cost} qty={item.num} index={item.index}/>
// }) : local ? local.map((item, index) => {
//     return <LineItem name={item.name} cost={item.cost} qty={item.num} index={item.index}/>
// }) : "Nothin at this time"}

export default Cart
