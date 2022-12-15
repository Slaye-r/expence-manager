import Expenses from "./Components/Expenses/Expenses.js";
import NewExpense from "./Components/Inputs/NewExpense.js";
import { useState } from "react";

const DUMMY__EXPENSES = [
  {
    id: "e1",
    title: "Books",
    amount: 394.12,
    date: new Date(2022, 7, 14),
  },
  { id: "e2", title: "Laptop", amount: 57799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Mess Fess",
    amount: 12294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 750,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY__EXPENSES);

  const addExpenseHandeler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandeler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
