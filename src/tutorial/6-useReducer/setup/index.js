import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { reducer } from "./../setup/reducer";
// reducer function

const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: "hello world",
};
const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch({ type: "ADDITEM", payload: { name, id: Math.random() } });
      setName("");
    } else {
      dispatch({ type: "NOVALUE" });
    }
  };
  const handleModel = () => {
    dispatch({ type: "CLOSEMODAL" });
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} handleModel={handleModel} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add </button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
