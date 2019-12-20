import React, { useState, useEffect } from 'react'
import { useForm } from './hooks/useForms'
import { useFetch } from './hooks/useFetch'

function App() {
  const [input, handleChange] = useForm({ email: '', password: '' })
  const [number, setNumber] = useState(JSON.parse(localStorage.getItem('number')) || 0)

  const { data, loading } = useFetch(`url/api${number}`)

  useEffect(() => {
    localStorage.setItem('number', JSON.stringify(number))
  }, [number])

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
        <p>you clicked {number} times</p>
        <p>
          {
            !data && 'loading....'
          }
        </p>

        <button onClick={() => setNumber(number => number + 1)}>change number</button>
      </div>
    </div>
  )
}

export default App
