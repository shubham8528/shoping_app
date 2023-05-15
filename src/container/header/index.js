import MenuIcon from "@mui/icons-material/Menu";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import * as Styled from "./style";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CustomizedMenus from "../../component/selectField";
import { useEffect, useState } from "react";
import { ProductCategory } from "../../API";
import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DrawerComponent from "../../component/menu";
import { AddCartList } from "./addCartList";
export const Header = ({
  setCategoryName,
  addProductList,
  setOpenCartList,
  openCartList,
  setItemCount,
  itemCount,
  setItemId,
  setAddProductList,
}) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    ProductCategory().then((item) => setCategory(item?.data));
  }, []);
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense" sx={{ height: 60 }}>
            <Styled.Header>
              <div style={{ paddingTop: "13px" }}>
                {/* <image src={navlogo} /> */}SHOPING APP
              </div>

              <Styled.RightNav>
                <CustomizedMenus
                  category={category}
                  setCategoryName={setCategoryName}
                  openCartList={openCartList}
                  btnName="Category"
                />

                <DrawerComponent
                  notifactionIcon={
                    <IconButton aria-label="cart">
                      <StyledBadge
                        badgeContent={addProductList?.length}
                        color="secondary"
                        onClick={() => setOpenCartList(!openCartList)}
                      >
                        <ShoppingCartIcon />
                      </StyledBadge>
                    </IconButton>
                  }
                  addProductList={addProductList}
                  setItemCount={setItemCount}
                  itemCount={itemCount}
                  setItemId={setItemId}
                  setAddProductList={setAddProductList}
                />
              </Styled.RightNav>
            </Styled.Header>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
