import React from "react";

import { useNavigate } from "react-router-dom";
 import './index.css';



function Login () {
    let navigate= useNavigate();
    return(
           <div className="container">
            
            <div className="login">
                   <h1 className="title"> Expensify</h1>
                   <p>Its time to get your expenses under control</p>

            <button className="login_btn1" onClick={() => { 
               navigate("/dashboard");
        }}
        >
       LOGIN
        </button>
        </div>
           </div>
    );
}

export default Login;