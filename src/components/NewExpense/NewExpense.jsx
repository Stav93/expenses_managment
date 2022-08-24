import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense({ onAddExpense }) {
  const [addingExpense, setAddingExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setAddingExpense(false);
  };

  const addingExpenseHansler = () => {
    setAddingExpense(true);
  };

  const closeFormHandler = () => {
    setAddingExpense(false);
  }

  return (
    <div className="new-expense">
      {addingExpense ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancleAdding={closeFormHandler} />
      ) : (
        <button onClick={addingExpenseHansler}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
