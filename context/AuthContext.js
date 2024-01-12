"use client";
import React, { createContext, useContext, useReducer, useEffect } from "react";

const AuthContext = createContext();

const initialState = {
  token: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, token: action.token };
    case "LOGOUT":
      return { ...state, token: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load token from local storage on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      dispatch({ type: "LOGIN", token: storedToken });
    }
  }, []);

  const login = (token) => {
    // Save token to local storage
    localStorage.setItem("token", token);
    dispatch({ type: "LOGIN", token });
  };

  const logout = () => {
    // Remove token from local storage
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };

  const isAuthenticated = () => {
    return !!state.token;
  };

  const useAuth = () => {
    return {
      token: state.token,
      login,
      logout,
      isAuthenticated,
    };
  };

  return (
    <AuthContext.Provider value={{ ...useAuth() }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
