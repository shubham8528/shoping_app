import { React, useEffect, useState } from "react";

import { Header } from "../header";
import { CarouselSlider } from "../carousel";
import ProductList from "../card";
import { GetAllProduct, filterCategory } from "../../API";
import { CircularProgress, LinearProgress } from "@mui/material";

export default function DenseAppBar() {
  const [categoryName, setCategoryName] = useState("");
  const [allProduct, setAllProduct] = useState([]);
  const [addProductList, setAddProductList] = useState([]);
  const [openCartList, setOpenCartList] = useState(false);
  const [itemCount, setItemCount] = useState({});
  useEffect(() => {
    if (categoryName) {
      filterCategory(categoryName).then((res) => setAllProduct(res.data));
    }
    GetAllProduct().then((res) => setAllProduct(res.data));
  }, [categoryName]);
  console.log(allProduct.length, "addProductList.length");
  return (
    <>
      <Header
        setCategoryName={setCategoryName}
        addProductList={addProductList}
        setOpenCartList={setOpenCartList}
        openCartList={openCartList}
        setItemCount={setItemCount}
        itemCount={itemCount}
        setAddProductList={setAddProductList}
      />
      <CarouselSlider />
      {allProduct.length > 0 ? (
        <ProductList
          allProduct={allProduct}
          setAddProductList={setAddProductList}
          addProductList={addProductList}
          setItemCount={setItemCount}
          itemCount={itemCount}
        />
      ) : (
        <div>
          <LinearProgress />
        </div>
      )}
    </>
  );
}
