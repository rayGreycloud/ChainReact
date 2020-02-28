import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Register from '../../components/Register'
import StepOne from '../../components/Register/StepOne'
import actions from '../../store/registration/actions'
import '../../styles/Registration.css'

// FIXME: Come back to this and schlep the state of this controller into Redux
const RegistrationPage = () => {
  const step = useSelector(s => s.registration.regStep)
  const dispatch = useDispatch()

  const advanceStep = () => dispatch(actions.nextRegistrationStep())

  const steps = [<Register mutator={advanceStep} />, <StepOne />]

  return <div className="root-page--registration">{steps[step]}</div>
}

export default RegistrationPage
