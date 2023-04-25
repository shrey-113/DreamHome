import { useContext } from 'react'

import { AuthContext } from '../store/authContext'
function Test() {
  const { state, dispatch } = useContext(AuthContext)

  return (
    <div>
      <p>Authenticated: {state.isAuthenticated ? 'Yes' : 'No'}</p>
      {state.isAuthenticated && (
        <>
          <p>Token: {state.token}</p>
          <p>Role: {state.role}</p>
        </>
      )}
      {!state.isAuthenticated && (
        <button
          onClick={() =>
            dispatch({
              type: 'login',
              payload: { token: 'some_token', role: 'admin' },
            })
          }
        >
          Log in
        </button>
      )}

      {state.isAuthenticated && (
        <button onClick={() => dispatch({ type: 'logout' })}>Log out</button>
      )}
    </div>
  )
}

export default Test
