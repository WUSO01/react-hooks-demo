import { useState, useEffect } from 'react'

export const useFetch = url => {
  const [state, setState] = useState({ data: 'hello world', loading: true })

  useEffect(() => {
    setState(state => ({ ...state, loading: true }))
    fetch(url)
      .then(res => res.text())
      .then(data => setState({ data, loading: false }))
  }, [url])

  return state
}
