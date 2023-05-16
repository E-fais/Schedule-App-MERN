import { useState, createContext, useEffect } from 'react'
import axios from 'axios'
export const UserContext = createContext({})
export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [userReady, setUserReady] = useState(false)
    useEffect(()=>{
        if(!user){
            axios.get('/profile').then(({data})=>{
                setUser(data)
                setUserReady(true)
            })
        }
    },[])
    return (
        <UserContext.Provider value={{ user, setUser,userReady }}>
            {children}
        </UserContext.Provider>)
}