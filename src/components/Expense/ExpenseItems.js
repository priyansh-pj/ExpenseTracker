

import "./ExpenseItems.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (item) => {
  // useState(item.title);
  // let [title, setTitle] = useState(item.title);
  // const clickHander= () =>{
  //   setTitle(prompt("Enter Title to be updated!!"))

  // }

  return (
    <li>
    <Card className="expense-item">

      <ExpenseDate date={item.date}/>
      <div className="expense-item__description">
        <h2>{item.title}</h2>
        <div className="expense-item__price">₹ {item.amount}</div>
        {/* <button onClick={clickHander}>Edit</button> */}
      </div>
    </Card>
    </li>
  );
};

export default ExpenseItem;
