
import { useState } from "react";
import "./Login.css";
import {Link} from 'react-router-dom';

export  function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div className="LoginCard">
      <h2>Log in to Asset Allocation Game</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        class="primaryInput focus"
        placeholder="E-Mail"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="primaryInput focus"
        placeholder="Password"
      />
      <button
        class="primary-button blue"
      >
        Login
      </button>
      <Link to={'/register'}><small className="do-not-have-an-account"> Don't have an account? Sign up now!</small></Link>
    </div>
  );
}
