import React, { useState } from 'react';

const UseStateObject = () => {
  const [person , setPerson] = useState({name:"ramy", age : 27 , message:"random stuff"});
  const changeMessage= () => {
    setPerson({...person , message:'rando'})
  }
  return (
    <>
     <h2>{person.name}</h2>
     <h2>{person.age}</h2>
     <h2>{person.message}</h2>
     <button className='btn' onClick={changeMessage}>change Message</button>
    </>
  );
};

export default UseStateObject;
