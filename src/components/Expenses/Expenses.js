import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // another option is to implement logic in the JSX code using ternary as regular if, for loops are not allowed
  // {fileteredExpenses.length === 0 ? (<p>No expenses found</p>) : (fileteredExpenses.map((expense) => (
  //   <ExpenseItem
  //   key={expense.id}
  //   title={expense.title}
  //   amount={expense.amount}
  //   date={expense.date}
  // />
  // ))}
  // OR seperate this logic in two parts, but in JSX code
  // {fileteredExpenses.length === 0 && <p>No expenses found</p> }
  // {fileteredExpenses.length > 0 && fileteredExpenses.map((expense) => (
  //   <ExpenseItem
  //   key={expense.id}
  //   title={expense.title}
  //   amount={expense.amount}
  //   date={expense.date}
  // />
  // ))}

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
