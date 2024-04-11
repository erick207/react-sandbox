import { useRef } from 'react'

function UseRefExample1() {
  const inputRef = useRef()
  const paraRef = useRef() // reference to p el

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)
    // don't give useRef this usage just for the hell of it though there may be some cases where its needed
    // you can use for modifying its own value
    inputRef.current.value = 'Hello'
    inputRef.current.style.backgroundColor = 'peachpuff'
    paraRef.current.innerText = 'Goodbye'
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          ref={inputRef}
          id='name'
          className='form-control mb-2'
        />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>
          Hello
        </p>
      </form>
    </div>
  )
}

export default UseRefExample1
