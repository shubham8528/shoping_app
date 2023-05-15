import * as Styled from "./style";
import Typography from "@mui/material/Typography";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
export const AddCartList = ({
  addProductList,
  setItemCount,
  itemCount,
  setItemId,
  setAddProductList,
}) => {
  const handelDelete = (id) => {
    const result = addProductList.filter((item, index) => {
      return item?.id !== id;
    });
    setAddProductList(result);
  };
  return (
    <>
      {addProductList.length > 0 && <Styled.Container>ITEMS</Styled.Container>}
      {addProductList.length > 0 ? (
        addProductList?.map((item) => {
          return (
            <>
              <Styled.Container>
                <div>
                  <img src={item?.image} style={{ width: 100 }} />
                </div>
                <div>
                  <Typography
                    style={{
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      width: "200px",
                    }}
                  >
                    {item?.title}
                  </Typography>
                  <div
                    style={{
                      overflow: "hidden",
                      border: "1px solid #adb5bd",
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "10px",
                      width: "90px",
                      height: "30px",
                    }}
                  >
                    <Typography
                      variant="contained"
                      style={{
                        background: "#1976d2",
                        display: "flex",
                        alignItems: "center",
                        height: " 40px",
                        padding: "0px 5px",
                        color: "white",
                      }}
                    >
                      Qty
                    </Typography>
                    <Styled.InputField
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": {
                            border: "none",
                          },
                        },
                      }}
                      size="small"
                      type="number"
                      InputProps={{ inputProps: { min: 1, max: 10 } }}
                      value={itemCount?.id == item?.id ? itemCount?.count : 1}
                      onChange={(e) => {
                        setItemCount({
                          ["id"]: item?.id,
                          ["count"]: e.target.value,
                          ["price"]: item?.price,
                        });
                      }}
                    />
                  </div>
                  <div>
                    {" "}
                    <Typography
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <CurrencyRupeeIcon />
                      <Typography
                        style={{ fontSize: "24px", fontWeight: "bolder" }}
                      >
                        {itemCount?.id == item?.id
                          ? Math.floor(itemCount?.price) * itemCount?.count
                          : Math.floor(item?.price) * 1}
                      </Typography>
                    </Typography>
                    <Typography style={{ fontSize: "12px" }}>
                      (Inclusive of all taxes)
                    </Typography>
                  </div>
                  <div>
                    <Button
                      style={{
                        width: "100%",
                        alignItems: "flex-end",
                        display: "flex",
                      }}
                      onClick={() => handelDelete(item?.id)}
                      color="error"
                      variant="text"
                    >
                      <DeleteIcon />
                    </Button>
                  </div>
                </div>
              </Styled.Container>
            </>
          );
        })
      ) : (
        <Styled.Container>ITEMS NOT ADDED</Styled.Container>
      )}
    </>
  );
};
