import { useState, createContext, useMemo, useEffect } from 'react';

const ProductContext = createContext(); 

const ProductProvider = (props) => {
    const [product, setProduct] = useState([]);
    const products = require("./products/products.json").products;
        
    useEffect(() => {
        const importImages = async () => {
            const imports = products.map(i => import(`./assets/images/${i.src}`))
            const sources = await Promise.all(
                imports.map(async (importedModule, index) => ({
                    src: (await importedModule).default,
                    name: products[index].name,
                    desc: products[index].description,
                    cost: products[index].cost,
                    index: index
                }))
            )

            setProduct(sources)
        }

        importImages();
    }, [])

    const value = useMemo(
        () => ({ 
            product,
            setProduct
        }),
        [product]
    );

    return (
        <ProductContext.Provider value={value}>
            {props.children}
        </ProductContext.Provider>
    );
}

export { ProductContext, ProductProvider };