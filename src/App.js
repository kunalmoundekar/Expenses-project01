
import React from 'react';
import Expenses from './componts/Expense';
import ExpensesData from './componts/ExpensesData';
import './App.css'

// import React, { useState } from 'react';

import NewExpenses from './componts/NewExpenses/NewExpenses';


const App = () => {

  const AppsaveExpensesHandler = (expenseData) => {
    const AppupdatedExpenseData = {
      ...expenseData,
    };

    console.log(AppupdatedExpenseData)
  }

  return (
    <div>
      <h1 className='heading1'>My Expense ! </h1>
      <NewExpenses AppsaveExpensesHandler={AppsaveExpensesHandler} />
      <Expenses item={ExpensesData} />
    </div>
  );
}; 

export default App;
