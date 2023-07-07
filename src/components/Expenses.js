import ExpenseItem from "./ExpenseItems";
import Card from "./Card";
import './Expenses.css';
const Expenses = ({expense}) => {
  
  return (
    <Card className="expenses">
      {expense.map((items) => (
        <ExpenseItem
          title={items.title}
          date={items.date}
          amount={items.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses