import { useState, useEffect, useRef } from 'react'

export const useFetch = url => {
  const [state, setState] = useState({ data: 'hello world', loading: true })
  const isCurrent = useRef(true)

  useEffect(() => {
    return () => {
      isCurrent.current = false
    }
  }, [])

  useEffect(() => {
    setState(state => ({ ...state, loading: true }))
    fetch(url)
      .then(res => res.text())
      .then(data => {
        setTimeout(() => {
          if (isCurrent.current) {
            setState({ data, loading: false })
          }
        }, 2000);
      })
  }, [url])

  return state
}
