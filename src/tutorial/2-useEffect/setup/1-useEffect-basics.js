import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
// you can use multiple useEffects in the same component
//use effect replace both componentdidmount and componentdidupdate
//use effect with empty []  replace  componentdidmount only as it runs once
//use effect with [value]  replace both componentdidmount and componentdidupdate (but only each time this "value" in the array changes)
const UseEffectBasics = () => {
  const [value , setValue] = useState(0)
  useEffect(()=>{
    if(value > 0){

      document.title = `${value} new messages`
    }
  })
  const changeValue = ()=>{
    setValue((prevState)=>{
      return(prevState+1)
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
