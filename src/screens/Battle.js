import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Grid } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import { GridStyled } from "../components/Styled";
import { startingSequence } from "../utils";
import { selectBattle } from "../store/battleSlice";

import pokemonData from "../assets/pokemonData";
import Enemy from "../components/Enemy";
import Player from "../components/Player";
import Text from "../components/Text";
import Attacks from "../components/Attacks";
import PlayAgain from "../components/PlayAgain";
import battleAudio from "../assets/battle.mp3";

const Battle = () => {
  const dispatch = useDispatch();
  const battle = useSelector(selectBattle);

  useEffect(() => {
    new Audio(battleAudio).play();
    startingSequence(dispatch);
  }, []);

  return (
    <>
      <GridStyled item xs={12}>
        <Grid container spacing={2}>
          <Enemy />
          <Player />
        </Grid>
      </GridStyled>

      <Grid item xs={12}>
        <Grid container spacing={2}>
          <>
            {battle.textMessageOne !== "" && battle.gameOver === false && (
              <Text />
            )}

            {battle.textMessageOne === "" &&
              battle.gameOver === false &&
              Object.keys(pokemonData.playerAttacks).map((key, index) => {
                return (
                  <Attacks
                    key={uuidv4() + key}
                    index={index}
                    details={pokemonData.playerAttacks[key]}
                  />
                );
              })}
            {battle.gameOver === true && <PlayAgain />}
          </>
        </Grid>
      </Grid>
    </>
  );
};

export default Battle;
