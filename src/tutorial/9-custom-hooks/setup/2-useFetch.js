import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        setMessage("failed");
      });
  };

  useEffect(() => {
    getProducts();
  }, [url]);

  return { loading, error, message, products };
};
