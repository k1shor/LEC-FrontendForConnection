import React, { createContext } from 'react'

export const MyContext = createContext()

export const MyContextProvider = ({ children }) => {
    return (
        <MyContext.Provider value="HELLO FROM MYCONTEXT">
            {children}
        </MyContext.Provider>
    )
}

