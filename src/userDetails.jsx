import { useState, createContext, useMemo, useEffect } from 'react';

const UserContext = createContext(); 

const UserProvider = (props) => {
    // the state that we'll be storing the username into
    const [username, setUsername] = useState('');
    const [cartItemCount, setCartItemCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {
        const localCartCount = JSON.parse(localStorage.getItem("cartItemCount"));
        const localCartItems = JSON.parse(localStorage.getItem("cartItems"))

        if (localCartCount) {
            setCartItemCount(localCartCount);
        } 

        if (localCartItems && Array.isArray(localCartItems)) {
            setCartItems([...localCartItems]);
        }

    }, []);


    /* because we will be providing an object to the provider, it is better to put the value inside a useMemo so that the component will only re-render when there's a change in the value. */
    const value = useMemo(
        () => ({ 
            username,
            setUsername,
            cartItemCount,
            setCartItemCount,
            cartItems,
            setCartItems
        }),
        [username, cartItemCount, cartItems]
    );

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };


// import { useState, createContext, useMemo } from 'react';

// const UserContext = createContext(); 

// const UserProvider = (props) => {
//     // the state that we'll be storing the username into
//     const [username, setUsername] = useState('');

// /* because we will be providing an object to the provider, it is better to put the value inside a useMemo so that the component will only re-render when there's a change in the value. */
// const value = useMemo(
//    () => ({username, setUsername}),[username])


//     return (
//         <UserContext.Provider
//             value={value}
//         >
//             {props.children}
//         </UserContext.Provider>
//     );
// }
// export { UserContext, UserProvider };