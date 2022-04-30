import React from "react";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";

import { PaperStyled, ButtonStyled } from "./Styled";
import { playAgain } from "../store/battleSlice";

const PlayAgain = () => {
  const dispatch = useDispatch();

  return (
    <Grid item xs={12}>
      <PaperStyled>
        <ButtonStyled
          disableElevation
          variant="contained"
          onClick={() => dispatch(playAgain())}
        >
          Jogar de novo
        </ButtonStyled>
      </PaperStyled>
    </Grid>
  );
};

export default PlayAgain;
