import React from "react";
import { useNavigate } from "react-router-dom";
import './../header/index.css'
function Header (props){
    let navigate = useNavigate();
    return(

        <div>
        <div className="header">
            <a className="headtitle" href="#">{props.expence}</a> 
        <button className="logout" onClick={() => { 
          navigate("/");
        }}>{props.logout}</button>
        </div>



        <div className="sub-header">
        {props.addexpense ?
        <button className="btn" onClick={() => {
          navigate("/Addexpense");}}>{props.addexpense}</button>
        :
        <div className="expense_page">Edit Page</div>
        }
        </div>

        </div>
    );
}

export default Header;