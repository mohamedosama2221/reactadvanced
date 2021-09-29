import React, { useState } from 'react';

const UseStateCounter = () => {
const [value , setValue]=useState(0);
const decrease =()=>{
  if(value > 0){

    setValue(value-1)
  }else{
    setValue(0)
  }
}

const increase =()=>{

    setValue(value+1)
  
}
const reset =()=>{

    setValue(0)
  
}
const increaseComplex =()=>{

    setTimeout(()=>{
      setValue((prevState)=>{
       return prevState + 1
      })
    } , 2000)
  
}
  return (
    <>
      <h2 style={{margin:'4rem 0'}}>useState counter example</h2>
      <h3>{value}</h3>
      <button onClick={decrease} className='btn'>decrease</button>
      <button onClick={reset} className='btn'>reset</button>
      <button onClick={increase} className='btn'>increase</button>
      <h2 style={{margin:'4rem 0'}}>useState counter example</h2>
      <h3>{value}</h3>
      <button onClick={increaseComplex} className='btn'>increase Complex</button>
    </>
  );
};

export default UseStateCounter;
