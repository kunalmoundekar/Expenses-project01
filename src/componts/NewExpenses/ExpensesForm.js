

import React, { useState } from 'react';
// import './ExpensesFrom.css'

import './ExpensesForm.css';





const ExpensesForm = (props) => {

    const [EntertTitle, setEntertTitle] = useState("")
    const [EntertAmount, setEntertAmount] = useState("")
    const [EntertDate, setEntertDate] = useState("")

    const titleChangeHandler = (e) => {
        setEntertTitle(e.target.value)

    }
    const amountChangeHandler = (e) => {
        setEntertAmount(e.target.value)

    }
    const dateChangeHandler = (e) => {
        setEntertDate(e.target.value)

    }

    const SubmitHandler = (e) => {
      
        e.preventDefault();

        const expenseData = {
            title: EntertTitle,
            amount: EntertAmount,
            date: EntertDate
        }

       
        props.onsaveExpensesHandler(expenseData);

        console.log(expenseData)


        setEntertTitle("");
        setEntertAmount("");
        setEntertDate("");


    }


    return (
        <form onSubmit={SubmitHandler} className='expense-form'>
            <div>
                <div>
                    <label>Title</label>
                    <input type="text" value={EntertTitle} onChange={titleChangeHandler} />
                </div>

                <div>
                    <label>Amount</label>
                    <input type="number" value={EntertAmount} onChange={amountChangeHandler} />
                </div>

                <div>
                    <label>Date</label>
                    <input type="date" value={EntertDate} onChange={dateChangeHandler} />
                </div>

                <div>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpensesForm;
