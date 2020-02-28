import React from 'react'
import { Progress } from 'semantic-ui-react'

export default function RegistrationProgressBar({ progress }) {
  return (
    <div>
      <Progress color="green" indicating percent={progress} />
    </div>
  )
}
