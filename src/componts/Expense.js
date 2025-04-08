import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';




const Expenses = (props) => {
  let git= "virson contero sys is a tool that help to change to code -------github is a website that allwoed devper to stored and manages of code change  ------- some git sesuts -git status 1 untract  new file cann n0t tracts  modiflyed ---- changes in ablevale files   "
  return (

    <div className="expenses">
      {props.item.map((ExpensesData,index) => (
        <ExpenseItem
        key={index}
          date={ExpensesData.date}
          title={ExpensesData.title}
          amount={ExpensesData.amount}
        />
      ))}
    </div>
  );
};

export default Expenses;
