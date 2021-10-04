import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./../redux/action";
import Product from "./Products";

const Products = () => {
  const onlineProducts = useSelector((state) => state.newProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const product =
    onlineProducts.length > 0 ? (
      onlineProducts.map((p) => {
        return <Product product={p} key={p.id} />;
      })
    ) : (
      <h1>Loading....</h1>
    );

  return (
    <div>
      <section className="products">{product}</section>
    </div>
  );
};

export default Products;
