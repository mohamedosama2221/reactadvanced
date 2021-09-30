// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

import React, { useEffect, useRef } from 'react';

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(refContainer.current.value)
    console.log(divContainer.current.textContent)
  }
  useEffect(()=>{
    refContainer.current.focus()
  })
  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
        </div>
        <button type='submit'>submit</button>
      </form>
      <div ref={divContainer}>hello</div>
    </>
  );
};

export default UseRefBasics;
