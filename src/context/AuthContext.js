import {
  useContext,
  createContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import {
  isAuthenticated,
  loginAuth,
  registerAuth,
} from "../services/authService";
import { isValidToken, setSession } from "../utils/jwt";
import { api } from "../api/axios";

const initialState = {
  isAuthenticated: false,
  user: null,
  role: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE":
      return {
        ...state,
        isAuthenticated: true,
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
  login: () => Promise.resolve(),
  register: () => Promise.resolve(),
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
    await loginAuth(payload)
      .then((response) => {
        console.log(response);
        dispatch({
          type: "LOGIN",
          payload: {
            ...initialState,
            user: response,
            isAuthenticated: true,
            role: response.role,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // This registeration handler is for the ADMIN role only.
  const register = async (payload) => {
    await registerAuth(payload)
      .then((response) => {
        console.log(response);
        dispatch({
          type: "REGISTER",
          payload: {
            ...initialState,
            user: response,
            isAuthenticated: true,
            role: response.role,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        throw new Error("Failed to register");
      });
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

