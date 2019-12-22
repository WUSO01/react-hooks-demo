import React, { useState, useEffect, } from 'react'
import { useFetch } from './hooks/useFetch'
import { useMeasure } from './hooks/useMeasure'

export const Hello = () => {
  const [number, setNumber] = useState(JSON.parse(localStorage.getItem('number')) || 0)
  const { data, loading } = useFetch(`http://numbersapi.com/${number}/trivia`)

  useEffect(() => {
    localStorage.setItem('number', JSON.stringify(number))
  }, [number])

  const [rect, pRef] = useMeasure([data])

  return <div>
    <div>
      <p ref={pRef} style={{ display: 'inline-block' }}>
        {
          data ? data : 'loading....'
        }
      </p>
      <pre>
        {JSON.stringify(rect, null, 2)}
      </pre>
      <button onClick={() => setNumber(number => number + 1)}>fetch</button>
    </div>
  </div>
}
