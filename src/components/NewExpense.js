import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = (event) => {
    setIsEditing(true);
  };

  const stopEditingHandler = (event) => {
    setIsEditing(false);
  };

  //   let addExpense = <button onClick={startEditingHandler}>Add New Expense</button>;

  //   if (isEditing) {
  //     addExpense = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />;
  //   }

  return (
    <div className="new-expense">
      {/* {addExpense} */}
      {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
