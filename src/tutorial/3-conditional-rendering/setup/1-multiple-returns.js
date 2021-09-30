import axios from 'axios';
import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isloading , setLoading] = useState(true);
  const [user , setUser] = useState(false);
  const [iserror , setIsError] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
    axios.get(url).then((res)=>{
      const user = res.data
      
        setUser(user)
      
    }).then(setLoading(false)).catch((err)=>{
      setIsError(true)
    })
  } , 2000)
  },[])
  return (
    
    <>
    {
      (isloading) ? (
        <h1>loading...</h1>
      ) : ( (iserror) ? <h1>Error...</h1> :
      <div>
        <h1>{user.login}</h1>
      </div>
      )
    }
    </>
  );
};

export default MultipleReturns;
