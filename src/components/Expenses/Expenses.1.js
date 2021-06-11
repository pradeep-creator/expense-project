import react, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpensesFilter.css";

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = selectedYear => {
    console.log(selectedYear, 'dropdown year');
    setFilteredYear(selectedYear);
  };

  const filteredItem = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // type 3
  let expensesContent = <p>No Expenses Found</p>
  if (filteredItem.length > 0) {
    expensesContent = filteredItem.map((expense, index) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }
  

  return (
    <>
      <div className="">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      </div>

      {/* type 1 */}
      {/* {filteredItem.length === 0 ? (<p>No Expenses Found</p>) : (
      filteredItem.map((expense, index) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
      )} */}

      {/* Type 2 */}
      {/* {filteredItem.length === 0 && <p>No Expenses Found</p>}
      {filteredItem.length > 0 && (
      filteredItem.map((expense, index) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
      )} */}

      {expensesContent}

    </>
  );
};

export default Expenses;
