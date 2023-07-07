import Expenses from "./components/Expenses";

function App() {
  let expense = [
    {
      id: "1",
      title: "Car Insurance",
      date: new Date(2023, 2, 29),
      amount: 2331.34,
    },
    { id: "2", title: "VR", date: new Date(2023, 3, 3), amount: 31124.12 },
    { id: "3", title: "Mobile", date: new Date(2023, 0, 12), amount: 1341.0 },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <Expenses expense={expense}/>
    </div>
  );
}

export default App;
