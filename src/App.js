import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { useForm } from './hooks/useForms'
import { Hello } from './Hello'

function App() {
  const [input, handleChange] = useForm({ email: '', password: '' })
  const [isShowHello, setShowHello] = useState(true)

  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  useLayoutEffect(() => {
    console.log(inputRef.current.getBoundingClientRect())
  }, [])

  return (
    <div>
      <div>
        <input ref={inputRef} name="email" onChange={handleChange} />
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
