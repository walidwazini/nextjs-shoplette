import { useState } from 'react'

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)

  const valueIsValid = validateValue(enteredValue)
  const hasError = !valueIsValid && isTouched

  const valueChangeHandler = ev => {
    setEnteredValue(ev.target.value)
  }

  const inputBlurHandler = ev => setIsTouched(true)

  const resetHandler = () => {
    setEnteredValue('')
    setIsTouched(false)
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    changeHandler: valueChangeHandler,
    blurHandler: inputBlurHandler,
    reset: resetHandler
  }

}

export default useInput