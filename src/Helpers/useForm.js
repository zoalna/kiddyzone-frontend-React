import { useCallback, useState } from 'react'
const useForm = (initialState, errorBody, initialError, onSubmit) => {
  const [form, setForm] = useState(initialState)
  const [error, setError] = useState(errorBody)

  const handleChange = (event) => {
    event.persist()
    setForm((form) => ({
      ...form,
      [event.target.name]:
        event.target.type === 'radio'
          ? event.target.value
          : event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value
    }))
    setError((error) => ({
      ...error,
      [event.target.name]:
        event.target.type === 'radio'
          ? event.target.value
          : event.target.type === 'checkbox'
          ? !event.target.checked
          : event.target.value !== ''
          ? false
          : true
    }))
  }
  const resetForm = useCallback(
    (initailState, initialError) => {
      setForm(initialState)
      setError(initialError)
    },
    [initialState]
  )
  return {
    form,
    handleChange,
    resetForm,
    setForm,
    error,
    setError
  }
}

export default useForm
