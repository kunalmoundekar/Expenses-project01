
import React from 'react';
import Expenses from './componts/Expense';
import ExpensesData from './componts/ExpensesData';
import './App.css'

import  { useState } from 'react';

import NewExpenses from './componts/NewExpenses/NewExpenses';


const App = (props) => {

  const [expenses, setExpenses] = useState(ExpensesData);
 
  const AppsaveExpensesHandler = (expenseData) => {
    setExpenses((prevExpenses) => [expenseData, ...prevExpenses]);
    
  };

  
  return (
    <div>
      <h1 className='heading1'>My Expense ! </h1>
      <NewExpenses AppsaveExpensesHandler={AppsaveExpensesHandler} />
      <Expenses item={expenses} />
    </div>
  );
}; 

export default App;


