import axios from "axios";

export const GetAllProduct = () => {
  return axios.get(`https://fakestoreapi.com/products`);
};

export const ProductCategory = () => {
  return axios.get("https://fakestoreapi.com/products/categories");
};

export const filterCategory = (item) => {
  return axios.get(`https://fakestoreapi.com/products/category/${item}`);
};
