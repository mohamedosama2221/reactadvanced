import React from "react";
import { useFetch } from "./2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  const { products, error, loading, message } = useFetch(url);
  console.log(products);
  return (
    <div>
      {!error && <h2>{loading ? "loading..." : "data"}</h2>}
      {error && <h3>{message}</h3>}
    </div>
  );
};

export default Example;
