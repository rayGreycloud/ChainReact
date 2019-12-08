import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './styles/Registration.css'
import Landing from './components/steps/Landing'
import StepOne from './components/steps/StepOne'
import actions from '../../store/registration/actions'

// FIXME: Come back to this and schlep the state of this controller into Redux
export default function Registration() {
  const step = useSelector(s => s.registration.regStep)
  const dispatch = useDispatch()

  const advanceStep = () => dispatch(actions.nextRegistrationStep())

  const steps = [<Landing mutator={advanceStep} />, <StepOne />]

  return <div className="root-page--registration">{steps[step]}</div>
}
