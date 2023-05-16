import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navbar.css";
import "../../pages/Login/Login";
import {UserOutlined} from '@ant-design/icons'
import { UserContext } from "../../context/UserContext";
function Navbar() {
  const { user } = useContext(UserContext);
  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="title-logo-container">
          <img class='logo' src="http://www.itl-qatar.com/images/ITL2.png" />
          <h2>Soil and Aggregate Riffle Schedule Updates</h2>
        </div>
        <div className="login-container">
          {user ? (
            <div className="user-avatar">
             <Link to='/user' className="user-name">  <h3><UserOutlined />{user?.name}</h3></Link>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
