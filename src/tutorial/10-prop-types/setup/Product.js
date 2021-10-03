import React from "react";
import defaultImage from "../../../assets/default-image.jpeg";
import { PropTypes } from "prop-types";

const Product = (props) => {
  const { image, name, price } = props;
  const url = image && image.url; //if the image object is there only then get me the url else it will be undefined
  return (
    <article className="product">
      <img src={url || defaultImage} alt={name} />
      <h4>{name || "default name"}</h4>
      <p>$ {price || 3.99}</p>
    </article>
  );
};
Product.prototype = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
};
export default Product;
