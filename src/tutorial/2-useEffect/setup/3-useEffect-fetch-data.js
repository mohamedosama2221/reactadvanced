//when you use usetate inside useeffec make sure to add the [] becuse usestate will trigger a rerender and useeffect always run after every new rerender which will casue infinit loop

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users , setUsers] = useState([]);
  useEffect(()=>{
    axios.get(url).then((res)=>{
      const people = res.data;
      setUsers(people)
    })
  },[]);
  return (
    <>
    <h3>github users</h3>
      {
        <ul className='users'>
          {users.map((user) => {
            const {id , avatar_url , login , html_url} = user;
            return (
              <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                  <h4>{login}</h4>
                  <a href={html_url}>profile</a>
                </div>
              </li>
            );
          })}
        </ul>
      }
    </>
  );
};

export default UseEffectFetchData;
