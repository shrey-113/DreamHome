import React, { createContext, useReducer, useEffect } from 'react'

// Step 1: Define the initial state
const initialState = {
  state: {},
  dispatch: () => {},
}

// Step 2: Create a reducer function to handle state updates
function reducer(state, action) {
  switch (action.type) {
    case 'login':
      localStorage.setItem(
        'payload',
        JSON.stringify({
          token: action.payload.token,
          role: action.payload.role,
          branchnumber: action.payload.branchnumber,
        })
      )
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        role: action.payload.role,
        branchnumber: action.payload.branchnumber,
      }
    case 'logout':
      localStorage.removeItem('payload')
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        role: null,
        branchnumber: null,
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

  useEffect(() => {
    const payload = JSON.parse(localStorage.getItem('payload'))
    if (payload) {
      dispatch({
        type: 'login',
        payload: {
          token: payload.token,
          role: payload.role,
          branchnumber: payload.branchnumber,
        },
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  )
}
