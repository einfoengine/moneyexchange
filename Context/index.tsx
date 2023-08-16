'use client'

import React, { createContext, useReducer, ReactNode, useEffect } from "react";

// Define the shape of the user state
interface UserState {
  authenticated: boolean;
  user: any | null; // Change 'any' to the appropriate user type
  token: string | null;
}

// Define the action type
type UserAction =
  | { type: "login"; payload: { user: any; token: string } }
  | { type: "logout" };

// Initial state
const initialState: UserState = {
  authenticated: false,
  user: null,
  token: null,
};

// Create context
// Create context
const LoginContext = createContext<{ state: UserState, dispatch: React.Dispatch<UserAction> }>({ state: initialState, dispatch: () => {} });
// Reducer function
const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case "login":
      return {
        authenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "logout":
      return initialState;
    default:
      return state;
  }
};

// Login context provider
// This provides the current state and dispatch function
const LoginProvider: React.FC<{children: ReactNode}>=({children})=>{
    const [state, dispatch] = useReducer(userReducer, initialState);

    useEffect(()=>{
        const userString = localStorage.getItem('user');
        if(userString!== null){
            const user = JSON.parse(userString);
            dispatch({
                type: 'login',
                payload: user
            })
        }
    },[]);
    return(
        <LoginContext.Provider value={{state, dispatch}}>
            {children}
        </LoginContext.Provider>
    )
}

export { LoginProvider,  LoginContext};
