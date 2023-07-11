import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [ExpenseValue,SetExpenseValue]= useState('')
  const [DateValue,SetDateValue]= useState('')
  const [AmountValue,SetAmountValue]= useState('')

  const updateValue = (target, value) =>{
    if((target) === 'Expense'){
      SetExpenseValue(value)
    }
    else if ((target) === 'Amount') {
      SetAmountValue(value)
    } else {
      SetDateValue(value)

    }
  }

  const submitHandler = (event) =>{
    event.preventDefault()
    const ExpanseData = {
      title: ExpenseValue,
      date: new Date(DateValue),
      amount: AmountValue
    }
    // console.log(ExpanseData)
    props.onSubmitFrom(ExpanseData)
    SetExpenseValue('')
    SetAmountValue('')
    SetDateValue('')
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="Expense">Expense</label>
          <input
            type="text"
            placeholder="Enter New Expense"
            id="Expense"
            value={ExpenseValue}
            onChange={(event)=> updateValue('Expense', event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="ExpenseAmount">Expense Amount</label>
          <input
            type="number"
            placeholder="₹ 00.00"
            step=".01"
            value={AmountValue}
            id="ExpenseAmount"
            onChange={(event)=> updateValue('Amount', event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="ExpenseDate">Expense Date</label>
          <input type="date" id="ExpenseDate" value={DateValue} onChange={(event)=> updateValue('Date', event.target.value)}
 />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>

        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
