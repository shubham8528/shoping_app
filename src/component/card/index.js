import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Rating, TextField } from "@mui/material";
import * as Styled from "./style";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function MediaCard({
  allProduct,
  setAddProductList,
  addProductList,
  setItemCount,
  itemCount,
}) {
  console.log(allProduct, "allProduct");
  return (
    <Card sx={{ width: 315, margin: 1 }}>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          padding: "13px 0px",
        }}
      >
        <CardMedia
          sx={{ width: 223, height: 294 }}
          image={allProduct?.image}
          title="green iguana"
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {allProduct?.name}
        </Typography>
        <Typography
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
          variant="body2"
          color="text.secondary"
        >
          {allProduct?.title}
        </Typography>

        <div style={{ display: "flex" }}>
          <div> {allProduct?.rating?.rate}</div>
          <div>
            <Rating
              name="half-rating-read"
              defaultValue={allProduct?.rating?.rate}
              precision={0.5}
              readOnly
            />
          </div>
        </div>
        <Typography style={{ display: "flex", alignItems: "center" }}>
          <CurrencyRupeeIcon />
          <Typography style={{ fontSize: "24px", fontWeight: "bolder" }}>
            {" "}
            {itemCount?.id == allProduct?.id
              ? Math.floor(itemCount?.price) * itemCount?.count
              : Math.floor(allProduct?.price) * 1}
          </Typography>
        </Typography>
        <Typography>(Inclusive of all taxes)</Typography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          matWidth: "100px",
          padding: "10px 19px",
        }}
      >
        <div
          style={{
            overflow: "hidden",
            border: "1px solid #adb5bd",
            display: "flex",
            alignItems: "center",
            borderRadius: "10px",
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
            value={itemCount?.id == allProduct?.id ? itemCount?.count : 1}
            onChange={(e) => {
              setItemCount({
                ["id"]: allProduct?.id,
                ["count"]: e.target.value,
                ["price"]: allProduct?.price,
              });
            }}
          />
        </div>
        <Button
          variant="contained"
          startIcon={<AddShoppingCartIcon />}
          onClick={() => setAddProductList([...addProductList, allProduct])}
        >
          ADD
        </Button>
      </CardActions>
    </Card>
  );
}
