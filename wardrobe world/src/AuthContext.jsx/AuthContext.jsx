import React from "react";
export const HelperContext = React.createContext();

const inintalState = {
  isAuth: false,
  user: null,
  loading: false,
  error: null,
  data: [],
  cart: [],
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        isAuth: true,
        user: payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuth: false,
        user: null,
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case "CART":
      return {
        ...state,
        cart: payload,
      };

    default:
      return state;
  }
};

const AuthContext = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  const [state, dispatch] = React.useReducer(reducer, inintalState);
  return (
    <HelperContext.Provider value={{ cart,setCart,state, dispatch }}>
      {children}
    </HelperContext.Provider>
  );
};

export default AuthContext;
