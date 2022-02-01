import React, { createContext, useReducer } from "react";

// initial state
const InitialState = {
  transactions: [
    { id: 1, label: "Flower", amount: -20 },
    { id: 2, label: "Salary", amount: 300 },
    { id: 3, label: "Book", amount: -10 },
    { id: 4, label: "Iphone 13 Pro Max", amount: -1000 },
  ],
};

// Create Context
export const GlobalStateContext = createContext(InitialState);

// Provider
export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(InitialState);

  return <GlobalStateContext.Provider>{children}</GlobalStateContext.Provider>;
};
