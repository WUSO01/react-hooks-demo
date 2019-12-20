import { useState } from 'react'

export const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues)

  const handleInutChange = e => setValues({
    ...values,
    [e.targe.name]: e.target.value
  })
  return [values, handleInutChange]
}
