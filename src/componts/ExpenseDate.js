import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = (props) => {


  const date2=new Date(props.date)

  const month = date2.getMonth();
  const day = date2.getFullYear();
  const year =date2.getDate() ;



  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
