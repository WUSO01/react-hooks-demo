import React, { useState } from 'react'
import { useForm } from './hooks/useForms'
import { Hello } from './Hello'

function App() {
  const [input, handleChange] = useForm({ email: '', password: '' })
  const [isShowHello, setShowHello] = useState(true)

  return (
    <div>
      <div>
        <input name="email" onChange={handleChange} />
      </div>
      <div>
        <input type="password" name="password" onChange={handleChange} />
      </div>
      <button onClick={() => console.log(input)}>login</button>
      <div>
        {
          isShowHello && <Hello />
        }
        <button onClick={() => setShowHello(isShowHello => !isShowHello)}>toggle show fetch</button>
      </div>
    </div>
  )
}



export default App
