import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, expenses, currency } = useContext(AppContext);
  const [newBudget, setnewBudget] = useState(budget);
  const maxBudget = 20000;

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const handleBudget = (e) => {
    e.preventDefault();
    let currentValue = e.target.value;
    if(currentValue > maxBudget){
      alert(`Budget £${currentValue} exceeds maximum limit of £${maxBudget} `);
      setnewBudget(budget);
      return;
    }

    if (currentValue < totalExpenses) {
      alert(`Budget £${currentValue} cannot be less than £${totalExpenses} already allocated`);
      setnewBudget(budget);
      return;
    }

    setnewBudget(currentValue);
   
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}<input
          required="required"
          type="number"
          id="budget"
          value={newBudget}
          step={10}
          max={maxBudget}
          style={{ marginLeft: ".1rem", size: 10 }}
          onChange={handleBudget}
        ></input></span>
    </div>

  );
};

export default Budget;
