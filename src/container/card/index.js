import { React, useEffect, useState } from "react";
import MediaCard from "../../component/card";
import * as Styled from "./style";
export default function ProductList({
  allProduct,
  setAddProductList,
  addProductList,
  setItemCount,
  itemCount,
}) {
  console.log(allProduct, "allProduct");
  return (
    <>
      <Styled.CardWrapper>
        {allProduct?.map((item) => (
          <MediaCard
            allProduct={item}
            setAddProductList={setAddProductList}
            addProductList={addProductList}
            setItemCount={setItemCount}
            itemCount={itemCount}
          />
        ))}
      </Styled.CardWrapper>
    </>
  );
}
