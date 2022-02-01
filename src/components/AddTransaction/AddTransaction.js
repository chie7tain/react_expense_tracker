import React from "react";

export const AddTransaction = () => (
  <div>
    <h1>AddTransaction</h1>
    <form action="">
      <div className="form-control">
        <label htmlFor="text">Label</label>
        <input type="text" placeholder="Enter label..." />
      </div>
      <div className="form-control">
        <label htmlFor="amount">
          (<b>-</b>/<b>+</b>)Amount &nbsp; &nbsp; [-expense, +income]
        </label>
        <input type="number" placeholder="Enter amount..." />
      </div>
      <button className="btn">Add transaction</button>
    </form>
  </div>
);
