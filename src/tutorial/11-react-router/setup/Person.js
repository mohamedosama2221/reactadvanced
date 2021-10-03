import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const { id } = useParams();
  const [name, setName] = useState();
  useEffect(() => {
    const onePerson = data.find((p) => p.id === parseInt(id));

    setName(onePerson.name);
  }, [id]);
  return (
    <div className="item">
      <h4>{name}</h4>
      <Link to="/people" className="btn">
        get back
      </Link>
    </div>
  );
};

export default Person;
