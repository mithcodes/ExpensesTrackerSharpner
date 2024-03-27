import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase";
import styles from "./Signup.module.css";



const Signup = ({auth}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert('Email created successfully');
      })
      .catch((error) => {
        alert('Error creating email:', error.message);
      });
  };

  return (
  
    <div className={styles.signupContainer}>
      <div className={styles.signup}>
        <div className="row m-3">
          <h3>Sign up</h3>
        </div>
        <div className="row m-3">
          <div className="col-md-4">
            <label>Email:</label>
          </div>
          <div className="col-md-8">
            <input 
              type="email" required
              placeholder="Enter your email"  
              onChange={(e) => setEmail(e.target.value)}  
              value={email}
            />
          </div>
        </div>
        <div className="row m-3">
          <div className="col-md-4">
            <label>Password:</label>
          </div>
          <div className="col-md-8">
            <input 
              type="password" 
              placeholder="Enter your password"  required
              onChange={(e) => setPassword(e.target.value)} 
              value={password}
            />
          </div>
        </div>
        <div className="row m-3">
          <div className="col-md-1"></div>
          <div className="col-md-11">
            <button type="button" className="btn btn-secondary" style={{widht:"100%"}} onClick={createUser}>Sign up</button>
          </div>
        </div>
        <hr style={{ borderTop: "2px solid red", width: "80%" }} />
        <div className="row m-3">
          <p>Already have an account? <Link to="/signin">
            Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
