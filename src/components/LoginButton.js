import React from 'react'

import { Button } from 'semantic-ui-react'
import { useAuth0 } from '../util/react-auth0-wrapper'

export default function LoginButton() {
  const { isAuthenticated, loginWithPopup, logout } = useAuth0()

  return (
    <div>
      {!isAuthenticated && (
        <Button onClick={() => loginWithPopup()} inverted>
          Log in
        </Button>
      )}
      {isAuthenticated && (
        <Button
          onClick={() => {
            debugger
            logout()
          }}
        >
          Log out
        </Button>
      )}
    </div>
  )
}
