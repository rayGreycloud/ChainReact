import React from 'react'
import { Form, Input, Divider, Button, Icon, Message } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../../store/registration/actions'
import Tooltip from '../../../../components/global/components/Tooltip'

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' }
]

export default function StepOne() {
  const dispatch = useDispatch()

  const regState = useSelector(state => state.registration)

  // FIXME: This needs to be lifted out to a stateful component. For prototyping, it'll work for now.
  const handleChange = (e, { name, value }) => {
    dispatch(actions.editRegistrationField(name, value))
  }

  const handleSubmit = () => {
    dispatch(actions.async.registerUserAsync(regState.form))
  }

  return (
    <div className="reg-form__div">
      <h1 style={{ width: '100%' }}>Let's get started.</h1>
      <div style={{ paddingBottom: '1.5em', width: '100%' }}>
        Enter your personal information down below, and we'll get to work on
        creating your very own GFam account!
      </div>

      <div className="reg-form__div--form-container">
        <Form
          className="reg-form__form"
          action="submit"
          loading={regState.loading}
          onSubmit={(e, data) => {
            e.preventDefault()
            handleSubmit()
          }}
        >
          <div className="reg-form__div--input-container">
            <Form.Input
              className="reg-form__input"
              name="name"
              control={Input}
              label="First Name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="reg-form__div--input-container">
            <Form.Input
              className="reg-form__input"
              name="surname"
              control={Input}
              label="Last Name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="reg-form__div--input-container">
            <Form.Select
              className="reg-form__input--dropdown"
              name="gender"
              label="Gender"
              options={genderOptions}
              onChange={handleChange}
            />
          </div>
          <div className="reg-form__div--input-container">
            <Form.Input
              fluid
              className="reg-form__input"
              name="dob"
              control={Input}
              placeholder="MM/DD/YYYY"
              label="Date of Birth"
              required
              onChange={handleChange}
            />
          </div>
          <Divider section style={{ width: '100%' }} />
          <div className="reg-form__div--input-container">
            <Form.Input
              className="reg-form__input"
              name="username"
              control={Input}
              label="Username"
              required
              onChange={handleChange}
            />
          </div>
          <div className="reg-form__div--input-container">
            <Form.Input
              className="reg-form__input"
              label={{
                children: (
                  <>
                    <Tooltip
                      light
                      content="Passwords should contain a mix of numbers and letters. Capitalization and punctuation are great, too."
                    />
                    Password
                  </>
                )
              }}
              name="password"
              control={Input}
              type="password"
              required
              onChange={handleChange}
            />
          </div>
          {regState.errorState !== '' && (
            <Message
              error
              header="Registration Error"
              content={`Our servers responded to your request with the following: ${regState.errorState}`}
              className="reg-form__div--error-msg"
            />
          )}
          <span className="reg-form__btn--validate-submit">
            <Button circular primary animated="vertical" type="submit">
              <Button.Content visible>NEXT</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </span>
        </Form>
      </div>
    </div>
  )
}
