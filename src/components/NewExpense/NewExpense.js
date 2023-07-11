import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [insertingExpense, setInsertingExpense] = useState(false)
    const eventHandlerTrue = () => setInsertingExpense(true)
    const eventHandlerFalse = () => setInsertingExpense(false)
    const getExpenseData = (Data) => {
        const ExpenseData = {
            ...Data,
        }
        // console.log(ExpenseData)
        props.getExpenseData(ExpenseData)
        eventHandlerFalse()
    }

    if (insertingExpense){
        return(
            <div className="new-expense">
                <ExpenseForm onSubmitFrom={getExpenseData} onCancel={eventHandlerFalse}/>
            </div>
        )
    }
    return(
        <div className="new-expense">
            <button onClick={eventHandlerTrue}>Add New Expense</button>
        </div>
    )
}


export default NewExpense