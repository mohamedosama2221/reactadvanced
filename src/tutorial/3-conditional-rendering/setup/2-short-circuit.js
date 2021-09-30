import React, { useState } from 'react';
// short-circuit evaluation
// || return right side as long as left side is falsy else return left side 
// && return right side as long as left side is truthy else return left side (oppisit of ||) or nothing will get rendered
// ?? return right side as long as left side is (undefinde or null) else return left side
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return <h2>short circuit</h2>;
};

export default ShortCircuit;
