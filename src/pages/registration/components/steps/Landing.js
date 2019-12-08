import React from 'react'
import { welcomeBody } from '../../assets/onboardingLingo'
import { Button, Icon } from 'semantic-ui-react'
export default function Landing({ mutator }) {
  return (
    <>
      <div className="root-page__header--registration">Welcome!</div>
      <div className="root-page__body--registration">{welcomeBody}</div>
      <Button circular primary animated="vertical" onClick={() => mutator()}>
        <Button.Content visible>NEXT</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
    </>
  )
}
