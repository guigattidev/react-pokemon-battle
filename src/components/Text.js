import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

import { PaperStyled, TypographyStyled } from "./Styled";
import { selectBattle } from "../store/battleSlice";

const Text = () => {
  const battle = useSelector(selectBattle);

  return (
    <Grid item xs={12}>
      <PaperStyled>
        <TypographyStyled variant="button" display="block" gutterBottom>
          {battle.textMessageOne}
        </TypographyStyled>
        <TypographyStyled variant="button" display="block" gutterBottom>
          {battle.textMessageTwo}
        </TypographyStyled>
      </PaperStyled>
    </Grid>
  );
};

export default Text;
