import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react'
import { useForm } from './hooks/useForms'
import { Hello } from './Hello'
import { Button } from './Button'
import { Todo } from './components/Todo'
import AppRouter from './AppRouter'

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

  const [count, setCount] = useState(0)
  const increment = useCallback(() => {
    setCount(count => count + 1)
  }, [setCount])

  return (
    <div>
      <h3>useState</h3>
      <div>
        <input ref={inputRef} name="email" onChange={handleChange} />
      </div>
      <div>
        <input type="password" name="password" onChange={handleChange} />
      </div>
      <button onClick={() => console.log(input)}>login</button>
      <p>-----------------------</p>
      <h3>useLayoutEffect useEffect useRef</h3>
      <div>
        {
          isShowHello && <Hello />
        }
        <button onClick={() => setShowHello(isShowHello => !isShowHello)}>toggle show fetch</button>
      </div>
      <p>-----------------------</p>
      <h3>useCallback</h3>
      <Button increment={increment} />
      <div>count: {count}</div>
      <p>-----------------------</p>
      <h3>useReducer</h3>
      <Todo />
      <p>-----------------------</p>
      <h3>useContext</h3>
      <AppRouter />
    </div>
  )
}

export default App
