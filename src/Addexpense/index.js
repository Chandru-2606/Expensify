import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import Moment from "moment";
import { v4 as uuidv4 } from 'uuid';
import Cards from "../cards";

import './index.css'
import Header from "../header";


function Addexpense () {
  let navigate= useNavigate();


    const [expense, setexpense] = useState ()
    const [amount, setamount] = useState ()
    const [notes, setnotes] = useState ()
    const [startDate, setStartDate] = useState(new Date());
    const moment = require('moment');

    // console.log(startDate)
    const submit = (e) =>{
      console.log("submit triggered")
      e.preventDefault();
      console.log("hiiiii")
    
      
     let momentDate = moment(startDate).valueOf()

         const expenses = {expense:expense, amount:amount, notes:notes, date:momentDate, idd:uuidv4()}
        console.log(expenses)
        const expensereceived=localStorage.getItem("expenses")
        console.log(expensereceived);
        if(expensereceived==null){
          localStorage.setItem("expenses",JSON.stringify([expenses]))
        }
        else{
          let arr=JSON.parse(expensereceived);
          console.log(arr);
          arr.push(expenses);
          localStorage.setItem("expenses",JSON.stringify(arr));
    
        }
         navigate("/dashboard")
    }


    return(
      
        <div className="expensecontainer"> 
            <Header expence="Expensify" logout="Logout" addexpense="Expences"/>
          
           <Cards expense={expense} amount={amount} notes={notes} 
                 setExpense={setexpense} setAmount={setamount} setNotes={setnotes} />
              
          

             <button onClick={(e) => {submit(e)}}>Add Expense</button>
              

        </div>

    );
}

export default Addexpense;