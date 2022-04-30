import { Grid, Button, Paper, LinearProgress, Typography } from "@mui/material";

import { styled } from "@mui/system";

export const GridStyled = styled(Grid)({
  marginTop: 60,
});

export const PokemonGridStyled = styled(Grid)({
  margin: "16px 0",
});

export const PaperStyled = styled(Paper)({
  display: "flex",
  padding: 16,
});

export const InfoStyled = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const LinearProgressStyled = styled(LinearProgress)({
  height: 8,
  margin: "8px 0",
  borderRadius: 4,
});

export const DivImgStyled = styled("div")({
  display: "flex",
});

export const ImgStyled = styled("img")({
  margin: "0 auto",
  height: "160px",
});

export const ButtonStyled = styled(Button)({
  margin: "0 auto",
});

export const TypographyStyled = styled(Typography)({
  margin: "16px 0",
});
