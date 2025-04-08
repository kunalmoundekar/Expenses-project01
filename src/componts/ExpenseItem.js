

import './Expenseitem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
// import React, { useState } from 'react';




const ExpenseItem = (props) => {

  // const [title, setTitle] = useState("")
  // const [newtitle, setnewTitle] = useState("")

  // const clickHadler = () => {
  //   setTitle(newtitle)
  // }

  // const changeHandler = (event) => {
  //   setnewTitle(event.target.value)
  // }


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <input type='text' value={newtitle} onChange={changeHandler}></input>
      <button onClick={clickHadler}>change title</button> */}
    </Card>
  );
};

export default ExpenseItem;
