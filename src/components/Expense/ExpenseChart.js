import Chart from "../Chart/Chart";

const ExpenseChart = ({expenses}) => {

  const dataPoint = [
    {label:'Jan',value:0},
    {label:'Feb',value:0},
    {label:'Mar',value:0},
    {label:'Apr',value:0},
    {label:'May',value:0},
    {label:'Jun',value:0},
    {label:'Jul',value:0},
    {label:'Aug',value:0},
    {label:'Sep',value:0},
    {label:'Oct',value:0},
    {label:'Nov',value:0},
    {label:'Dec',value:0},

];
let maxValue = 0
for (let expense in expenses){
    

    let expense_month = expenses[expense].date.getMonth()
    dataPoint[expense_month].value += expenses[expense].amount
    // console.log(expense_month)

    maxValue+=expenses[expense].amount
}
    // console.log(dataPoint)

  return <Chart dataPoint={dataPoint} maxValue={maxValue}/>;
};

export default ExpenseChart;
