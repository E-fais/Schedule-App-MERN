import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import { Login } from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import CreateSchedule from "./pages/Schedule/CreateSchedule"
import axios, { Axios } from "axios"
import { UserContextProvider } from "./context/UserContext"
import { Fragment } from "react"
import UserPage from "./pages/UserPage"
axios.defaults.baseURL="http://localhost:3000"
axios.defaults.withCredentials=true;
function App() {
  return (
    <UserContextProvider>
  <Fragment>
     <Routes>
      <Route  element={<Navbar/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/user' element={<UserPage/>}/>
      <Route path='/newschedule' element={<CreateSchedule/>}/>
      </Route>
     </Routes>
     </Fragment>
    </UserContextProvider>
  )
}

export default App