import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const {user,setUser}=useContext(UserContext)
  const loginUSer = async (e) => {
    e.preventDefault();
    try {
     const res= axios.post("/login", { email, password });
     setUser(res.data)
     
      setRedirect(true);
    } catch (error) {
      console.log(error);
    }
  };
  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="register-page">
        <form onSubmit={loginUSer}>
          <h1 className="register-header">Login</h1>
          <div className="form-container">
            <input
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            <span className="login-link">
              {" "}
              Don't have an account? <Link to="/register">Register</Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};
