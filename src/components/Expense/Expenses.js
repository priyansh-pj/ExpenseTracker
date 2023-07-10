import ExpenseItem from "./ExpenseItems";
import Card from "../UI/Card";
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = ({expense}) => {

  const [yearFilter, setYearFilter] = useState('2023');
  // eslint-disable-next-line
  const expenses = expense.filter((element) => element.date.getFullYear() == yearFilter);

  let excludedYear = "2019,2020,2021,2022";
  
  if(yearFilter === '2021'){
    excludedYear = "2019,2020,2022,2023";
  }else if(yearFilter === '2020'){
    excludedYear = "2019,2021,2022,2023";
  }else if(yearFilter === '2019'){
    excludedYear = "2020,2021,2022,2023";
  }else if(yearFilter === '2022'){
    excludedYear = "2019,2020,2021,2023";
  }
  const ChangingYear=(FilterYear)=>{
    setYearFilter(FilterYear)
  }



  return (
    <Card className="expenses" >
      <ExpenseFilter selected={yearFilter} onYearChange={ChangingYear}/>
      <p>data of {excludedYear} years data will be Expense </p>
      {expenses.length ===0 && <p>Enter Expenses  </p> }
      {expenses.map((items) => (
        <ExpenseItem
          title={items.title}
          date={items.date}
          amount={items.amount}
          key={items.id}
        />
      ))}
    </Card>
  );
};

export default Expenses