import React, { createContext, useContext, useReducer } from "react";

//prepares data layer
export const StateContext = createContext();

//Wrap our app and provide the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull the information from data layer
export const useStateValue = () => useContext(StateContext);
