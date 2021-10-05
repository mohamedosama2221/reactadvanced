import {
  FETCH_PRODUCTS,
  SHOW_PRODUCTS,
  SHOW_SINGLE_PRODUCTS,
  REMOVE_SINGLE_PRODUCTS,
} from "./types";
import fakeApi from "../api/productsApi";

export const fetchProducts = () => async (dispatch) => {
  const res = await fakeApi.get("/products");
  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};

export const showProducts = () => {
  return {
    type: SHOW_PRODUCTS,
    payload: {
      name: "product1",
    },
  };
};

export const removeProduct = () => {
  return {
    type: REMOVE_SINGLE_PRODUCTS,
    payload: [],
  };
};

export const showSingleProduct = (id) => async (dispatch) => {
  const singleProduct = await fakeApi.get(`/products/${id}`);
  dispatch({ type: SHOW_SINGLE_PRODUCTS, payload: singleProduct.data });
};
