import {
  SHOW_PRODUCTS,
  FETCH_PRODUCTS,
  SHOW_SINGLE_PRODUCTS,
  REMOVE_SINGLE_PRODUCTS,
} from "./types";

const initState = {
  products: [
    {
      name: "products2",
    },
  ],
  newProducts: [],
  singleProduct: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_PRODUCTS:
      return {
        ...state,
        products: [
          ...state.products,
          {
            ...action.payload,
          },
        ],
      };
    case FETCH_PRODUCTS:
      return {
        ...state,
        newProducts: action.payload,
      };
    case SHOW_SINGLE_PRODUCTS:
      return {
        ...state,
        singleProduct: [action.payload],
      };
    case REMOVE_SINGLE_PRODUCTS:
      return {
        ...state,
        singleProduct: [],
      };

    default:
      return state;
  }
};
