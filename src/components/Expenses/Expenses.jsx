import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

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
        {filteresExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
