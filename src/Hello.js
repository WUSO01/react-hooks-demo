import React, { useState, useEffect } from 'react'
import { useFetch } from './hooks/useFetch'

export const Hello = () => {
  const [number, setNumber] = useState(JSON.parse(localStorage.getItem('number')) || 0)
  const { data, loading } = useFetch(`http://numbersapi.com/${number}/trivia`)

  useEffect(() => {
    localStorage.setItem('number', JSON.stringify(number))
  }, [number])

  return <div>
    <div>
      <p>
        {
          data ? data : 'loading....'
        }
      </p>
      <button onClick={() => setNumber(number => number + 1)}>fetch</button>
    </div>
  </div>
}
