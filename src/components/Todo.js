import React, { useState, useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        todos: [
          ...state.todos,
          {
            text: action.text,
            complated: false
          }
        ]
      }
    case 'toggle':
      return {
        todos: state.todos.map((t, idx) =>
          idx === action.idx ? { ...t, complated: !t.complated } : t
        )
      }
    default:
      return state
  }
}

export const Todo = () => {
  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] })
  const [text, setText] = useState()

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch({ type: 'add', text })
        setText('')
      }}>
        <input value={text} onChange={e => setText(e.target.value)} />
      </form>
      {
        todos.map((t, idx) => (
          <div
            key={idx}
            onClick={() => dispatch({ type: 'toggle', idx })}
            style={{
              textDecoration: t.complated ? 'line-through' : ''
            }}
          >
            {t.text}
          </div>
        ))
      }
    </div>
  )
}
