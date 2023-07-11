import ExpenseItem from "./ExpenseItems";
import './ExpenseList.css';
const ExpenseList = ({ expenses }) => {

    if(expenses.length === 0){
        return <h2 className="expenses-list__fallback">Expense Not Found</h2>
    }
  return (
    <ul className="expenses-list">
    {expenses.map((items) => (
        <ExpenseItem
          title={items.title}
          date={items.date}
          amount={items.amount}
          key={items.id}
        />
      ))
      }
    </ul>
    )
};

export default ExpenseList;
