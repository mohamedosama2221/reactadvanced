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
  //used most commonly to focus ont he input elements as soon as we render the container
  //notice that we didn't use the [] because useref doesn't trigger a re-render so its safe to use it in useeffect with worry of infinite loops
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
