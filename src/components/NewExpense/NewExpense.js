import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const getExpenseData = (Data) => {
        const ExpenseData = {
            ...Data,
        }
        // console.log(ExpenseData)
        props.getExpenseData(ExpenseData)
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSubmitFrom={getExpenseData}/>
        </div>
    )
}


export default NewExpense