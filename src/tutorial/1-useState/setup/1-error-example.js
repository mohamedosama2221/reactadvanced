//hooks rules
// must start with use 
//the component name must start with uppercase
//must be in function component only and in the function body 
import React, { useState } from 'react';
import {data} from "../../../data";

const ErrorExample = () => {
  const [people , setPeople] = useState([...data]);
  const removeItem= (id)=>{
    let datafiltered = people.filter( person => person.id !== id)
    setPeople(datafiltered)
  };

  const peoples =  people.map(p=>{
    const {id , name} = p;
    return (
      <div key={id} className="item">
        <h4>{name}</h4>
        <button onClick={()=>removeItem(id)} className='btn'>remove Item</button>
      </div>
    );
  })
  return (
    <>
    {peoples}
     <button onClick={()=>{setPeople([])}} className='btn'>clear Items</button>
    </>
    
  );     
};

export default ErrorExample;
