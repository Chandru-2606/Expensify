import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../header";
import moment from "moment"
import './index.css';
import {DateRangePicker } from "react-dates"
import 'react-dates/lib/css/_datepicker.css';



function Dashboard() {

  let navigate = useNavigate();
  const [expenses, setExpenses] = useState([])
  const [copyExpenses, setcopyExpenses] = useState([])
  const [searchText, setSearchText] = useState("")
  const [startDate, setStartDate] = useState(moment().startOf("month"));
  const [endDate, setEndDate] = useState(moment().endOf("month"));
  const [focusedInput, setfocusedInput] = useState(null);
 
  useEffect(() => {
    let a = JSON.parse(localStorage.getItem("expenses"))
    console.log("from use effects", JSON.parse(localStorage.getItem("expenses")));
    setExpenses(a)
    setcopyExpenses(a)
    document.querySelectorAll(".DateInput--open-down")[0].addEventListener("click",()=>{setfocusedInput("startDate");})
    document.querySelectorAll(".DateInput--open-down")[1].addEventListener("click",()=>{setfocusedInput("endDate");})

  }, [])

  const onDelete = (item, id) => {
    console.log("Button Clicked:", item)
    console.log("Button Clicked:", id)
    console.log(expenses)
    let updatedText = expenses.filter((text, index) => text.idd !== id);
    console.log(updatedText)
    localStorage.setItem("expenses", JSON.stringify(updatedText));
    setExpenses(updatedText);
  }

  const searchFunc = (e) => {
    console.log("Inside search function", e)
    setSearchText(e)
    console.log("search text", searchText) 
    const filteredArray = copyExpenses.filter((items) => {
      return ((items.expense).toLowerCase()).includes(e.toLowerCase())
    })

    const filterArray = copyExpenses.filter((items) => {
      return (items.expense.toLowerCase().includes(e.toLowerCase()))
    })
    console.log("filtered array")
    console.log(filteredArray)
    setExpenses(filterArray)
  }

  // const searchDate = (e) =>{
  //   console.log("Inside search date")
  //   const filterDate = copyExpenses.filter((items) => {
  //     return((item.date))

  //   })
  //   console.log("filterDate")
  // }

  const datechange =({startDate,endDate}) =>{
    console.log("Triggered")
    setStartDate(startDate)
    setEndDate(endDate)
  }

  const focusechange =(focusedInput) =>{
    console.log("change",focusedInput)
    setfocusedInput(focusedInput)
  }



  return (
    <div className="container-dashboard">
        
          <Header expence="Expensify" logout="Logout" addexpense="AddExpense"/>
          {/* <button onClick={() => { 
               navigate("/Store"); */}
        {/* }}>Store</button> */}

      <div className="expensefilter">
        <div>
          <input className="searchbox" placeholder="Search text" onChange={(e) => { searchFunc(e.target.value) }}></input>
        </div>

        <div className="dash_calender">

              <DateRangePicker 
                   startDate={startDate}
                   endDate = {endDate}
                   onDatesChange = {datechange}
                   focusedInput ={focusedInput}
                   onFocusChange = {focusechange}
                   showClearDates={true}
                   numberOfMonths={1}
                   isOutsideRange={()=>false}

        />
  </div>

         
         <div>
            <select>
              <option>Date</option>
              <option>Amount</option>
            </select>
          
        </div> 
      </div> 
      <div className="box">
        <div className="listheading">
          <div className="listheading1">
            <p>Expense</p>
          </div>
          <div className="listheading2">
            <p> Amount</p>
          </div>
          <div className="listheading3">
            <p>Notes</p>
          </div>
        </div>
      </div>


      {expenses && expenses.map((item, index) => {
        return (

          <div className='result'>
            <div className="result1">
              <div className="item1">
                <button onClick={() => {
                  navigate(`/editexpense/${item.idd}`)
                }} >
                  <div>
                    <li > {item.expense}</li>
                    <li>{moment(item.date).format("MMM Do YY")}</li>
                  </div>
                </button>
              </div>
              <div className="item2">
                <li>{item.amount}</li>
              </div>

              <div className="item3">
                <li>{item.notes}</li>
              </div>
              <button type="delete" onClick={() => onDelete(item, item.idd)}>Delete</button>
               </div>


          </div>
        )
      })}

    </div>

  );
}


export default Dashboard;