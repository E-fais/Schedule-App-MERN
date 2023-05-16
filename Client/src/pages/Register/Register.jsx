import { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import axios from "axios";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registerUser=async(e)=>{
    e.preventDefault()
    try {
    await axios.post('/register',{
      name,email,password
    })
    alert('Registration success, you can now login')
    window.open('/login')
    } catch (error) {
      alert('Registration failed')
    }
   
  }
  return (
    <div className="register-page">
      <form onSubmit={registerUser}>
        <h1 className="register-header">Register</h1>
        <div className="form-container">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /> 
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
          <button>Register</button>
          <span className="login-link">
            Already have an account?
            <Link className="link" to="/login">
              Login
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Register;
