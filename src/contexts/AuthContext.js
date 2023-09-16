import React, { createContext, useEffect, useReducer } from "react";
import { loginAuth, registerAuth } from "../services/authService";
import { isValidToken, setSession } from "../utils/jwt";
import { api } from "../api/axios";

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
  role: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE":
      console.log(action);
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        role: action.payload.role,
        user: action.payload,
      };
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        role: action.payload.role,
        user: action.payload,
      };
    case "REGISTER":
      return {
        ...state,
        isAuthenticated: true,
        role: action.payload.role,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export const AuthContext = createContext({
  ...initialState,
  login: (value) => Promise.resolve(),
  register: (value) => Promise.resolve(),
  logout: () => Promise.resolve(),
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const initialize = async () => {
      try {
        const token = localStorage.getItem("token");

        if (token && isValidToken(token)) {
          const { data } = await api.get("/auth/account");

          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: true,
              user: data.data,
              role: data.data.role,
            },
          });
        } else {
          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: false,
              user: null,
              role: null,
            },
          });
        }
      } catch (error) {
        console.log(error);
        dispatch({
          type: "INITIALIZE",
          payload: {
            isAuthenticated: false,
            user: null,
            role: null,
          },
        });
      }
    };
    initialize();
  }, []);

  const login = async (payload) => {
    const { data } = await loginAuth(payload);
    console.log(data.token);

    dispatch({
      type: "LOGIN",
      payload: {
        ...initialState,
        user: data.data,
        isAuthenticated: true,
        role: data.data.role,
      },
    });
    setSession(data.token);
    return data;
  };

  // This registeration handler is for the ADMIN role only.
  const register = async (payload) => {
    const { data } = await registerAuth(payload);
    console.log(data.token);
    dispatch({
      type: "REGISTER",
      payload: {
        ...initialState,
        user: data.data,
        isAuthenticated: true,
        role: data.data.role,
      },
    });
    setSession(data.token);
    return data;
  };
  const logout = async () => {
    dispatch({
      type: "LOGOUT",
      payload: {
        ...initialState,
        isAuthenticated: false,
        role: null,
        user: null,
      },
    });
    setSession();
  };
  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
