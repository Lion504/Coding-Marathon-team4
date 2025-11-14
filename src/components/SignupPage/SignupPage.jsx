import React, { useState } from "react";
import "./SignupPage.css";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("en");

  //email & password format
  const emailValid = /^[^\s@]+@[^\s@]+\.com$/i.test(email);
  const passwordValid =/^(?=.*[A-Z])(?=.*\d).{10,}$/.test(password);

  //Function to handle the Signup Functionality
  const SignUpFunc= (e) => {
    e.preventDefault();
    if (!emailValid){
      alert("Enter a Valid Email Address");
      return;
    }
    if (!passwordValid){
      alert("Password must follow the instructions")
      return;
    }
    alert("Signed up Successfully")

  // Clear the form after submission
  setEmail("");
  setPassword("");
  setNationality("en");
  }

  const greeting = {
    fi: "Hei",
    en: "Hello",
    de: "Hallo", //Germany
    fr: "Bonjour"
  };

  return (
    //have seperate div blocks to align the components of signup
    <div>
      <h1>SignupPage</h1>
      <div className= "signup-components">
        <label>Email: </label>
        <p>* This format is valid: john@doe.com</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={email ? (emailValid ? "valid" : "invalid") : ""}
          placeholder="Enter your email"
        />
        </div>

        <div className="signup-components">
        <label>Password: </label>
        <p>* Password length must me 10 character, and atleast 1 number and 1 uppercase (A-Z)</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={password ? (passwordValid ? "valid" : "invalid") : ""}
          placeholder="Enter your password"
        />
        </div>

        <div className="signup-components">
        <label>Nationality:</label>
        <select value={nationality} onChange={(e) => setNationality(e.target.value)}>
          <option value="fi">Finnish</option>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
      </div>

      <button className="signup-button" onClick={SignUpFunc}>Sign Up</button>
      <p>{greeting[nationality]}</p>
      <p>Your email is {email || "john@doe.com"}</p>

      </div>

  )
}

export default SignupPage
 