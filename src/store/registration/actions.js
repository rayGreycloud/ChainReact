import API from '../../util/API'

const actions = {
  editRegistrationField(fieldName, value) {
    return {
      type: 'EDIT_REGISTRATION_FIELD',
      payload: {
        which: fieldName,
        value: value
      }
    }
  },
  submitRegistrationForm() {
    return {
      type: 'SUBMIT_REGISTRATION_FORM'
    }
  },
  processRegistrationResponse(response) {
    return function(dispatch) {
      // Check status code.
      if (response && response.status >= 200 && response.status < 300)
        dispatch({
          type: 'RECEIVE_REGISTRATION_RESPONSE',
          payload: { which: 'SUCCESS' }
        })
      else {
        debugger
        dispatch({
          type: 'RECEIVE_REGISTRATION_RESPONSE',
          payload: {
            which: 'ERROR',
            err: response.data.message
          }
        })
      }
    }
  },
  nextRegistrationStep() {
    return {
      type: 'NEXT_REGISTRATION_STEP'
    }
  },
  prevRegistrationStep() {
    return {
      type: 'PREV_REGISTRATION_STEP'
    }
  },
  async: {
    registerUserAsync(usr) {
      return function(dispatch) {
        dispatch(actions.submitRegistrationForm())

        return API.post('/users', {
          name: {
            given: usr.name,
            family: usr.surname
          },
          username: usr.username,
          password: usr.password,
          dob: usr.dob
        }).then(
          res => {
            debugger
            return dispatch(actions.processRegistrationResponse(res))
          },
          err => {
            console.error('Registration failed:')
            console.error(err)
            dispatch(actions.processRegistrationResponse(err))
          }
        )
      }
    }
  }
}
export default actions
