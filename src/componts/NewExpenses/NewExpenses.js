import React from 'react'
import ExpensesForm from './ExpensesForm'


const NewExpenses = (props) => {

  const saveExpensesHandler = (expenseData) => {
    const updatedExpenseData = {
      ...expenseData,
    };

    props.AppsaveExpensesHandler(expenseData);

    console.log(updatedExpenseData)
  }


  return (
    <div>
      <ExpensesForm onsaveExpensesHandler={saveExpensesHandler} />

    </div>
  )
}

export default NewExpenses
