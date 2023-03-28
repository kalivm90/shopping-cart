import {createContext, useContext, useState} from "react";


const UserContext = createContext(null)

export const UserProvider = ({children}) => {
    const [user, setUser] = useState()
    return (
        <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
    )
}


export const useUser = () => {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error('useUserContext must be used within a UserContext')
    }
    return context
}