import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName ,setFirstName] = useState('')
  const [email ,setEmail] = useState('')
  const [people ,setPeople] = useState([])
  const handleSubmit =(e)=>{
    e.preventDefault()
    if(email&&firstName){
      let person = {
        name:firstName,
        email,
        key:Math.random()
      }
      setPeople((prev)=>{
        return [...prev, person]
      });
      setEmail('')
      setFirstName('')
    }

  }
  const handleRemove =(key)=>{
    const newPeople = people.filter(p => p.key !== key)
    setPeople(newPeople)
  }
  const peopleList = ()=>{
  return people.map(person=>{
      const {name , email , key} = person
      return (

        <div key={key} className='item'>
          {name}
          <br />
          {email}
          <button style={{color:'red'}} className="btn" onClick={()=> handleRemove(key)}>Delete</button>
        </div>

      )
    })
  }
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor="firstName">Name</label>
            <input type="text" name="firstname" id="firstName" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
          </div>
          <div className='form-control'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <button type="submit" className="btn">submit</button>
        </form>
      </article>
      <div>
        <ul>
          {peopleList()}
        </ul>
      </div>
    </>
  );
};

export default ControlledInputs;
