import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  useEffect(()=>{
    
  })
  const [value , setValue] = useState('one')
  const changeValue = ()=>{
    setValue((prevState)=>{
      return "three"
    })
  }
  return (
    <>
      <h2>{value}</h2>
      <button onClick={changeValue} className="btn"> change title</button>
    </>
  );
};

export default UseEffectBasics;
