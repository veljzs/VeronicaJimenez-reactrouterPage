//import react
import React from "react";
//import link
import { Link } from "react-router-dom";
//component
const Main = () => {
	return (
        <div className="container main">
            <h1>Welcome to my SPA</h1>
            <div>
                <img src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg"/>
                <img src="https://images.pexels.com/photos/355904/pexels-photo-355904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                <img src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </div>
            <Link to={"/login"} >Iniciar Sesion</Link>
        </div>
    );
};

export default Main