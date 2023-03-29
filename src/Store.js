import React, { useEffect, useState, useContext } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./assets/styles/Store.css"
import { UserContext } from "./userDetails"


const Store = () => {
    const { username } = useContext(UserContext);
    const localUser = JSON.parse(localStorage.getItem("user"))
    // const { first, last, email } = username ? localUser : !localUser ? username : null;
    const { first, last, email } = username 
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
                <header>
                    <div className="Featured">
                        <h1>Featured</h1>
                        <ul>
                            <li>one</li>
                            <li>two</li>
                            <li>three</li>
                        </ul>
                    </div>
                </header>
                <div className="Store-Main">
                    <div className="Main-Item">
                        <p>name</p>
                        <p>desc</p>
                    </div>
                    <div className="Main-Item">
                        <p>name</p>
                        <p>desc</p>
                    </div>
                    <div className="Main-Item">
                        <p>name</p>
                        <p>desc</p>
                    </div>
                    <div className="Main-Item">
                        <p>name</p>
                        <p>desc</p>
                    </div>
                    <div className="Main-Item">
                        <p>name</p>
                        <p>desc</p>
                    </div>
                    <div className="Main-Item">
                        <p>name</p>
                        <p>desc</p>
                    </div>
                    <div className="Main-Item">
                        <p>name</p>
                        <p>desc</p>
                    </div>
                    <div className="Main-Item">
                        <p>name</p>
                        <p>desc</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

// const Store = () => {
//     const [product, setProduct] = useState([])
//     const products = require("./products/products.json").products;

//     useEffect(() => {
//         const importImages = async () => {
//             const imports = products.map(i => import(`./assets/images/${i.src}`))
//             const sources = await Promise.all(
//                 imports.map(async (importedModule, index) => ({
//                     src: (await importedModule).default,
//                     name: products[index].name,
//                     desc: products[index].description,
//                     cost: products[index].cost
//                 }))
//             )

//             setProduct(...sources)
//         }

//         importImages();
//     }, [product])


//     return (
//         <div className="Store">
//             <Navbar />
//             <div className="Store-Body">
//                 <header>
//                     {user && (
//                         Object.keys(user).map(i => {
//                             return <p>{user[i]}</p>
//                         })
//                     )}
//                     <div className="Featured">
//                         <h1>Featured</h1>
//                         <ul>
//                             <li>one</li>
//                             <li>two</li>
//                             <li>three</li>
//                         </ul>
//                     </div>
//                 </header>
//                 <div className="Store-Main"></div>
//             </div>
//             <Footer />
//         </div>
//     )
// }

export default Store