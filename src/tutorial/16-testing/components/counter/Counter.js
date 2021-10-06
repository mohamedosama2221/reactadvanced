import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  const handleCounter = (value) => {
    if (value === "increment") {
      setCount((prev) => {
        return prev + inputValue;
      });
    } else if (value === "decrement") {
      setCount((prev) => {
        return prev - inputValue;
      });
    }
  };
  return (
    <>
      <h3 data-testid="header">My Counter</h3>
      <h2
        data-testid="counter"
        className={
          count >= 100
            ? "text-success"
            : count < 0
            ? "text-danger"
            : "text-dark"
        }
      >
        {count}
      </h2>
      <div className="d-flex align-items-center w-50 m-auto">
        <button
          data-testid="remove-btn"
          className="btn btn-danger mt-0"
          onClick={() => {
            handleCounter("decrement");
          }}
        >
          -
        </button>
        <input
          type="number"
          data-testid="input"
          value={inputValue}
          className="form-control"
          onChange={(e) => setInputValue(parseInt(e.target.value))}
        />
        <button
          data-testid="increase-btn"
          className="btn btn-primary mt-0"
          onClick={() => {
            handleCounter("increment");
          }}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
