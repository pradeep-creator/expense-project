import react, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpensesFilter.css";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart'

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = selectedYear => {
    console.log(selectedYear, 'dropdown year');
    setFilteredYear(selectedYear);
  };

  const filteredItem = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  }); 
  

  return (
    <>
      <div className="">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      </div>
      <ExpensesChart expenses={filteredItem} />
      <ExpensesList items={filteredItem} />

    </>
  );
};

export default Expenses;
