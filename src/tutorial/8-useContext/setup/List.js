import React, { useContext } from "react";
import SinglePerson from "./SinglePerson";
import { PersonContext } from "./1-context-api";

const List = () => {
  const { people } = useContext(PersonContext);
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

export default List;
