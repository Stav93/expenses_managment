import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterExpensesHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteresExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear)
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterExpenses={filterExpensesHandler}
        />
        <ExpensesList expenses={filteresExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
