import React, { useState, useContext } from "react";
import { data } from "../../../data";
import List from "./List";
// more components
// fix - context api, redux (for more complex cases)

//create a React.createContext()
//wrap the main return in the root component with the contextName.provider
//add value as object {{}}
//in children components useContext(name of the context)
//const { people } = useContext(PersonContext);

export const PersonContext = React.createContext();
const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Context API / useContext</h3>
      <List />
    </PersonContext.Provider>
  );
};

export default ContextAPI;
