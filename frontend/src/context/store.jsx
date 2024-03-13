import {createContext, useContext, useState} from 'react'

const myContext = createContext()

const Context = ({children}) => {
    const [accounts, setAccounts] = useState([])
    return (
        <myContext.Provider value={{accounts,setAccounts}}>
            {children}
        </myContext.Provider>
    )
}

export const accountState = () =>{
    return useContext(myContext)
}

export default Context