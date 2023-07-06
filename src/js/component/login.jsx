import React from "react";

//import link
import { Link } from "react-router-dom";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your component
const Login = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
	  <br/><br/>
	  <label>Enter your email:
        <input
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
	  <br/><br/>
	  <Link to={"/form"} >Registrarse</Link>
    </form>
  )
};

export default Login;
