import React from "react";
import './cards.css'

const Cards = (props) => {

    return(
        <div className="input_container">       
       <input className="data" placeholder="Expense name" value={props.expense} onChange={(e) => { props.setExpense(e.target.value) }}></input><br></br>
        <input className="description" placeholder="Amount Spent" value={props.amount} onChange={(e) => { props.setAmount(e.target.value) }}></input><br></br>
        <textarea className="textarea" placeholder="Addnotes to your Expense" value={props.notes} onChange={(e) => {props.setNotes(e.target.value) }}></textarea><br></br>
        </div>
 );
}
export default Cards;