import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

// create the default context
export const TodoContext = createContext();

const initialState = [
  {
    id: 1,
    title: "My Body",
    body: "My Title",
  },
];

const Provider = ({ children }) => {
  // use reducer args: reducer, initialstate,initFunc
  // todo is current state
  // dispatch calls our reducer with the given action type
  const [todo, dispatch] = useReducer(Reducer, initialState);

  // wrap any children we pass to this component with the given provider
  // this allows you to consume the values (in this case being, todo(list of todos) and dispatch(function to dispatch))
  return <TodoContext.Provider value={{ todo, dispatch }}>{children}</TodoContext.Provider>;
};

export default Provider;
