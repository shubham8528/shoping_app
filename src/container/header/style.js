import { TextField } from "@mui/material";
import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const RightNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// addCartList........................

export const Container = styled.div`
  border: 1px solid rgb(253, 244, 245);
  background: rgb(253, 244, 245);
  width: 350px;
  display: flex;
  padding: 10px;
  margin-bottom: 2px;
`;

export const InputField = styled(TextField)`
  max-width: 60px;
  border: none;
  //   background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAMAAACzvE1FAAAADFBMVEUzMzMzMzMzMzMzMzMKAG/3AAAAA3RSTlMAf4C/aSLHAAAAPElEQVR42q3NMQ4AIAgEQTn//2cLdRKppSGzBYwzVXvznNWs8C58CiussPJj8h6NwgorrKRdTvuV9v16Afn0AYFOB7aYAAAAAElFTkSuQmCC");
`;
