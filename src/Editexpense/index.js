import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
 import { useNavigate } from "react-router-dom";
 import DatePicker from "react-datepicker";
 import './../Editexpense/index.css'
import Header from "../header";
 import Cards from "../cards";
function Editexpense(props) {
 let navigate= useNavigate();

    let { id } = useParams();


    const [expense, setExpense] = useState()
    const [amount, setAmount] = useState()
    const [notes, setNotes] = useState()
    const [date, setDate] = useState()


    let arr = JSON.parse(localStorage.getItem("expenses"))

    let valId = `${id}`
    console.log("valid", valId)

    useEffect(() => {

        arr.map((item, index) => {
            if (item.idd === id) {

                setExpense(item.expense)
                setAmount(item.amount)
                setNotes(item.notes)
                setDate(item.date)
            }
            else {
                console.log("item not found")
            }
        })
    }, [])




   

    const editexpense = (e) => {
        const moment = require('moment');
        let momentDate = moment(date).valueOf()
        const updatedExpense = {expense:expense, amount:amount, notes:notes, date:momentDate, idd:id}
        let objIndex = arr.findIndex((obj => obj.idd == id));
        console.log(arr)
         arr[objIndex] = updatedExpense
         console.log("updated expense",arr)
         localStorage.setItem("expenses",JSON.stringify(arr))
         navigate("/dashboard")
    }
    const [startDate, setStartDate] = useState(new Date());

    const removeExpense = (e) => {
        let objIndex = arr.findIndex((obj => obj.idd == id));
        arr.splice(objIndex, 1)
         localStorage.setItem("expenses",JSON.stringify(arr))
        navigate("/dashboard")

    }

    return (
        <div>
              <Header expence="Expensify" logout="Logout" />

            <Cards expense={expense} amount={amount} notes={notes} date={date}
             setExpense={setExpense} setAmount={setAmount} setNotes={setNotes}  />
            <DatePicker className="edit_calender" selected={date} onChange={(date) => setDate(date)} /> <br></br>
            <button className="edit_butn" type="editexpense" onClick={(e) => { editexpense(e) }}>Save Expense</button><br></br>
            <button className="edit_butn" type="Remove" onClick={(e) => {  removeExpense(e)}}>Remove Expense</button>
        </div>
    );

}

export default Editexpense;