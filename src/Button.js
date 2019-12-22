import React, { useRef } from 'react'

export const Button = React.memo(({ increment }) => {
  const renders = useRef(0)
  console.log('renders is:', renders.current++)

  return <button onClick={increment}>click</button>

})
