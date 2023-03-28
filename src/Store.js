import React, { useEffect, useState, useContext } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./assets/styles/Store.css"

const Store = () => {
    // const [product, setProduct] = useState([])
    // const products = require("./products/products.json").products;

    // useEffect(() => {
    //     const importImages = async () => {
    //         const imports = products.map(i => import(`./assets/images/${i.src}`))
    //         const sources = await Promise.all(
    //             imports.map(async (importedModule, index) => ({
    //                 src: (await importedModule).default,
    //                 name: products[index].name,
    //                 desc: products[index].description,
    //                 cost: products[index].cost
    //             }))
    //         )

    //         setProduct(...sources)
    //     }

    //     importImages();
    // }, [product])


    return (
        <div className="Store">
            <Navbar />
            <div className="Store-Body">
                <header>
                    {/* {user && (
                        Object.keys(user).map(i => {
                            return <p>{user[i]}</p>
                        })
                    )} */}
                    <div className="Featured">
                        <h1>Featured</h1>
                        <ul>
                            <li>one</li>
                            <li>two</li>
                            <li>three</li>
                        </ul>
                    </div>
                </header>
                <div className="Store-Main"></div>
            </div>
            <Footer />
        </div>
    )
}

export default Store