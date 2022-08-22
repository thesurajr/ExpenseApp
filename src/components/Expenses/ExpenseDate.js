import React from 'react';
import './ExpenseDate.css';


const ExpenseDate = ({date}) => {

    const date1= new Date(date)
    const year = date1.getFullYear()
    const month =date1.toLocaleString('en-US',{month: 'long'})
    const day = date1.toLocaleString('en-US',{day: '2-digit'})
    console.log(date1.getMonth())
    console.log(date1.getFullYear())

    
    // const month = props.date.toLocaleString('en-US',{month: 'long'});
    // // const year = props.date.getFullYear();
    // const day = props.date.toLocaleString('en-US',{day: '2-digit'});

    return(
    <div className="expense-date">
           <div className="expense-date__month">{ month }</div>
           <div className="expense-date__year">{ year }</div>
           <div className="expense-date__day">{ day }</div>
    </div>
    )
}

export default ExpenseDate;