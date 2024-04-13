// another useRef use: get previous state

import { useState, useEffect, useRef } from 'react'

function UseRefExample2() {
  // state to hold the count wherever state is changed
  const [name, setName] = useState('')

  // we will create a reference to the number or renders
  const renders = useRef(1)
  const prevName = useRef('')

  useEffect(() => {
    renders.current = renders.current + 1
    prevName.current = name // every time the name changes we are going to run this and we are going to store the previous state here
  }, [name])
  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h2>Prev Name State: {prevName.current}</h2>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='form-control mb-3'
      />{' '}
      {/* the state is changed on each keypress, the previous state is the string
      before the last char */}
    </div>
  )
}

export default UseRefExample2
