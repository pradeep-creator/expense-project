import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = props => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    // console.log(expenseData);

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

//   open form on add new expense btn
  const startEditingHandler = () => {
    setIsEditing(true);
  };

//   close form on cancel btn
  const cancelEditing = () => {
    setIsEditing(false);
  };

  return (
    <>
      <div className="new-expense">
        {!isEditing && (
          <button onClick={startEditingHandler}>Add New Expense</button>
        )}
        {isEditing && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={cancelEditing}
          />
        )}
      </div>
    </>
  );
};

export default NewExpense;
