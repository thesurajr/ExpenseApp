
import React, {useEffect, useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';

import Expenses from './components/Expenses/Expenses';


let DUMMY_EXPENSE = []; 


const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE)
  const fetchApp =()=>{
    fetch("https://firstexpenseapp.herokuapp.com/taskget").then(
      response =>{
        return response.json();
      }
    ).then(
      data =>{
         setExpenses(data); 
      }    
    );
  }
  useEffect(()=>{
    fetchApp()
  },[]);

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses]
    setExpenses(updatedExpense)
    fetch('https://firstexpenseapp.herokuapp.com/task',{
      method: 'POST',
      body: JSON.stringify(expense),
      headers: {
          'content-Type': 'application/json'
      }
    }).then(
      response => {
        fetchApp();
      }
    );
};

    return (
      <div>
           <NewExpense onAddExpense={addExpenseHandler} />
           <Expenses item={expenses} />
           
         
      </div>
     
        );

}

export default App;