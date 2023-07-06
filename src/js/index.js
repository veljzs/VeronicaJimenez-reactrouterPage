//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Login from "./component/login.jsx";
import Main from "./component/main.jsx";
import Form from "./component/form";
//create the routes
const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/form",
        element: <Form/>
    }
  ])
  const App = () => {
    return (
    <React.StrictMode>
        <RouterProvider router={routes} />
    </React.StrictMode>
  )}

  
//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));