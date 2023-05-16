import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import axios from 'axios'

function UserPage() {
    const {user,setUser}=useContext(UserContext)
    const logout=async()=>{
        await axios.post('logout')
        window.open('/')
        setUser(null)
    }
  return (
    <div style={{textAlign:'center',padding:'3rem'}}>
        <h1 style={{fontFamily:"monospace",marginBottom:'1rem'}}> Logged in as {user.name}</h1>
        <button  onClick={logout}>Logout</button>
    </div>
  )
}

export default UserPage