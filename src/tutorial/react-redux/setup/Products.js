import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";
import { Link } from "react-router-dom";

const Product = (props) => {
  const {
    title,
    id,
    price,
    description,
    image,
    rating: { rate },
  } = props.product;
  return (
    <article className="product">
      <img src={image || defaultImage} alt={title} />
      <h4>{title || "default name"}</h4>
      <p>{description || "No Description"}</p>
      <p>${price || 3.99}</p>
      <p>rate: {rate || "no rate available"}</p>
      <Link to={`/products/${id}`} className="btn">
        full details
      </Link>
    </article>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.object.isRequired,
};

export default Product;
