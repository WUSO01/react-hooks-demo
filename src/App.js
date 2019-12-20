import React from 'react'
import { useForm } from './components/useForms'

function App() {
  const [input, handleChange] = useForm({ email: '', password: '' })

  return (
    <div>
      <div>
        <input name="email" onChange={handleChange} />
      </div>
      <div>
        <input type="password" name="password" onChange={handleChange} />
      </div>
      <button onClick={() => console.log(input)}>login</button>
    </div>
  )
}

export default App
