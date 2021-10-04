import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showSingleProduct, removeProduct } from "./../redux/action";
import defaultImage from "../../../assets/default-image.jpeg";

const SingleProduct = () => {
  const { id } = useParams();
  const singlePro = useSelector((state) => state.singleProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showSingleProduct(id));
    return () => {
      dispatch(removeProduct());
    };
  }, [id, dispatch]);
  return (
    <div>
      {singlePro && singlePro.length > 0 ? (
        singlePro.map((p) => {
          const {
            title,
            price,
            description,
            image,
            rating: { rate },
          } = p;
          return (
            <article className="product" key={p.id}>
              <img src={image || defaultImage} alt={title} />
              <h4>{title || "default name"}</h4>
              <p>{description || "No Description"}</p>
              <p>${price || 3.99}</p>
              <p>rate: {rate || "no rate available"}</p>
            </article>
          );
        })
      ) : (
        <h1>Loading....</h1>
      )}
      <Link to="/" className="btn">
        Home
      </Link>
    </div>
  );
};
export default SingleProduct;
