'use client'
import React, { createContext, useReducer, useContext, useEffect } from 'react';

// Define the shape of the state
interface UserState {
  username?: string;
  _id?: string;
  role?: string;
  is_superuser?: boolean;
  access_lavel?: string;
  avatar?: string;
  designation?: string;
  authenticated?: boolean;
}

// Initial states with type annotations
const initialAdminState: UserState = {
  username: undefined,
  _id: undefined,
  role: undefined,
  is_superuser: undefined,
  access_lavel: undefined,
  avatar: undefined,
  designation: undefined,
  authenticated: undefined,
};

const initialUserState: UserState = {
  username: undefined,
  _id: undefined,
  role: undefined,
  avatar: undefined,
  authenticated: undefined,
};

// Create contexts with type annotations
const AdminContext = createContext<UserState>(initialAdminState);
const UserContext = createContext<UserState>(initialUserState);

// Create reducer with type annotations
const adminReducer = (state: UserState, action: { type: string; payload?: UserState }) => {
  switch (action.type) {
    case 'login':
      return action.payload || initialAdminState; 
    case 'logout':
      return initialAdminState;
    default:
      return state;
  }
};

const userReducer = (state: UserState, action: {type: string; payload?: UserState}) => {
    switch (action.type) {
        case 'login':
          return action.payload || initialUserState;
        case 'logout':
          return initialUserState
        default:
          return state;
    }
}

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(adminReducer, initialAdminState);
  useEffect(()=>{
    const localAdmin = JSON.parse(localStorage.getItem("admin"));
    if(localAdmin?.role==="admin"){
        dispatch({type:"login", payload: localAdmin})
      }
    },[]);
  
  return (
    <AdminContext.Provider value={{ state, dispatch }}>
      {children}
    </AdminContext.Provider>
  );
};

export const UserProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);
  
  useEffect(()=>{
    const localUser = JSON.parse(localStorage.getItem("user"));
    console.log("Local user ",localUser)
    if(localUser?.role==='user'){
      dispatch({type:"login", payload: localUser})
    }
  },[]);

  return (
    <UserContext.Provider value={{state, dispatch}}>
        {children}
    </UserContext.Provider>
  )   
}

export {AdminContext, UserContext}