import React, { useContext } from 'react'
import { UserContext } from '../components/UserContext'
import { login } from '../utils/login'

export const Index = () => {
  const { user, setUser } = useContext(UserContext)

  return (
    <div>
      <h1>Index</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      {
        user ?
          <button
            onClick={() => setUser(null)}
          >
            logout
          </button>
          :
          <button
            onClick={async () => {
              const user = await login()
              setUser(user)
            }}
          >
            login
      </button>
      }

    </div>
  )
}
