import React, { createContext, useReducer } from 'react'

// Step 1: Define the initial state
const initialState = {
  isAuthenticated: false,
  token: null,
  role: null,
}

// Step 2: Create a reducer function to handle state updates
function reducer(state, action) {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        role: action.payload.role,
      }
    case 'logout':
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        role: null,
      }
    default:
      throw new Error()
  }
}

// Step 3: Create a context for the global state with a default value of the initial state
export const AuthContext = createContext(initialState)

// Step 4: Create a provider component to wrap the app and provide the state to its children
export function AuthProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  )
}
