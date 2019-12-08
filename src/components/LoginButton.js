import React from 'react'

import { useAuth0 } from '../util/react-auth0-wrapper'
import { Button } from 'semantic-ui-react'

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
