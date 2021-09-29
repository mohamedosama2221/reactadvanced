import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size , setSize] = useState(window.innerWidth);
  const setsize = ()=>{
    setSize(window.innerWidth)
  }
  useEffect(()=>{

    window.addEventListener('resize' ,setsize );
    return ()=>{
    window.removeEventListener('resize' ,setsize );
    }
  })
  return <h2>{size}</h2>;
};

export default UseEffectCleanup;
