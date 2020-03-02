import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input, Button, Icon, Message } from 'semantic-ui-react';

import Tooltip from '../common/Tooltip';

import '../../styles/RegisterForm.css';

const RegisterForm = () => {
  const regState = { errorState: '' };

  const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ];

  const handleChange = value => {
    console.log('value: ', value);
  };

  const handleSubmit = (event, data) => {
    event.preventDefault();
    console.log('form submitted: ', data);
  };

  return (
    <div className='reg-form'>
      <div className='reg-form__div'>
        <h1>Let's get started.</h1>
        <div className='reg-form__div--heading'>
          Enter your personal information down below, and we'll get to work on
          creating your very own GFam account!
        </div>

        <div className='reg-form__div--form-container'>
          <Form
            className='reg-form__form'
            action='submit'
            loading={false}
            onSubmit={handleSubmit}
          >
            <div className='reg-form__div--input-container'>
              <Form.Input
                className='reg-form__input'
                name='name'
                control={Input}
                label='First Name'
                required
                onChange={handleChange}
              />
            </div>
            <div className='reg-form__div--input-container'>
              <Form.Input
                className='reg-form__input'
                name='surname'
                control={Input}
                label='Last Name'
                required
                onChange={handleChange}
              />
            </div>
            <div className='reg-form__div--input-container'>
              <Form.Select
                className='reg-form__input--dropdown'
                name='gender'
                label='Gender'
                options={genderOptions}
                onChange={handleChange}
              />
            </div>
            <div className='reg-form__div--input-container'>
              <Form.Input
                fluid
                className='reg-form__input'
                name='dob'
                control={Input}
                placeholder='MM/DD/YYYY'
                label='Date of Birth'
                required
                onChange={handleChange}
              />
            </div>

            <div className='reg-form__div--input-container reg-form__group'>
              <Form.Input
                className='reg-form__input'
                name='username'
                control={Input}
                label='Username'
                required
                onChange={handleChange}
              />
            </div>
            <div className='reg-form__div--input-container'>
              <Form.Input
                className='reg-form__input'
                label={{
                  children: (
                    <>
                      <Tooltip
                        light
                        content='Passwords should contain a mix of numbers and letters. Capitalization and punctuation are great, too.'
                      />
                      Password
                    </>
                  ),
                }}
                name='password'
                control={Input}
                type='password'
                required
                onChange={handleChange}
              />
            </div>
            {regState.errorState !== '' && (
              <Message
                error
                header='Registration Error'
                content={`Our servers responded to your request with the following: ${regState.errorState}`}
                className='reg-form__div--error-msg'
              />
            )}
            <div className='reg-form__btns'>
              <Button
                color='teal'
                animated='vertical'
                type='submit'
                className='reg-form__btn1'
              >
                <Button.Content visible>NEXT</Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow right' />
                </Button.Content>
              </Button>

              <Button as={Link} to={'/'} inverted className='reg-form__btn2'>
                Cancel
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
