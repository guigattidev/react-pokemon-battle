import React from "react";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { PaperStyled, ButtonStyled } from "./Styled";
import { handleAttackClick } from "../utils";
import { selectBattle } from "../store/battleSlice";

const Attacks = (details) => {
  const dispatch = useDispatch();
  const battle = useSelector(selectBattle);

  return (
    <Grid item xs={6}>
      <PaperStyled>
        <ButtonStyled
          variant="contained"
          disableElevation
          onClick={() =>
            handleAttackClick(
              battle,
              dispatch,
              details.details.name,
              details.details.damage
            )
          }
        >
          {details.details.name}
        </ButtonStyled>
      </PaperStyled>
    </Grid>
  );
};

export default Attacks;
