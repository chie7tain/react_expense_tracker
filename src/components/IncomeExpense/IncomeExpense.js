import React from "react";

import { Wrapper } from "./IncomeExpense.styles";

export const IncomeExpense = () => (
  <Wrapper>
    <div className="inc-exp-container">
      <div>
        <h2>Income</h2>
        <p>Income</p>
      </div>
      <div>
        <h2>Expense</h2>
        <p>$ 500.00</p>
      </div>
    </div>
  </Wrapper>
);
