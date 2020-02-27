import React from 'react'

import '../../styles/RegistrationWelcome.css'

const RegisterWelcome = () => {
  return (
    <div className="register-welcome">
      <div className="register-welcome__header">Welcome!</div>
      <div className="register-welcome__body">
        <p>
          Welcome to GFam! We're happy to have you here. We can't wait to have
          you start sharing your stories with us and the rest of the world, but
          first, let's get you signed up for an account.
        </p>
        <p>
          The next few pages will walk you through the registration process.
          Remember, you can always view content from the main page of GFam, but
          the only way to really interact with other users and be rewarded for
          your perspective starts here.
        </p>
      </div>
    </div>
  )
}

export default RegisterWelcome
