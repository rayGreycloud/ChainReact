const baseRegState = {
  form: {
    name: '',
    surname: '',
    dob: '',
    interests: [],
    username: '',
    password: '',
    geo: ''
  },
  errorState: '',
  loading: false,
  regStep: 0
}

const registrationReducer = (state = baseRegState, action) => {
  let change = { ...state }
  switch (action.type) {
    case 'EDIT_REGISTRATION_FIELD': {
      switch (action.payload.which) {
        case 'name': {
          change.form.name = action.payload.value
          break
        }
        case 'surname': {
          change.form.surname = action.payload.value
          break
        }
        case 'gender': {
          change.form.gender = action.payload.value
          break
        }
        case 'dob': {
          change.form.dob = action.payload.value
          break
        }
        case 'username': {
          change.form.username = action.payload.value
          break
        }
        case 'password': {
          change.form.password = action.payload.value
          break
        }
        default: {
          break
        }
      }
      break
    }
    case 'SUBMIT_REGISTRATION_FORM': {
      change.loading = true
      change.errorState = ''
      break
    }
    case 'RECEIVE_REGISTRATION_RESPONSE': {
      if (action.payload.which === 'ERROR') {
        change.errorState = JSON.stringify(action.payload.err)
      }
      change.loading = false
      break
    }
    case 'NEXT_REGISTRATION_STEP': {
      change.regStep++
      break
    }
    case 'PREV_REGISTRATION_STEP': {
      if (change.regStep >= 1) change.regStep--
      break
    }
    default:
  }
  return { ...change }
}

export default registrationReducer
