import React from "react";
import { Box, Fade, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import {
  PokemonGridStyled,
  PaperStyled,
  InfoStyled,
  LinearProgressStyled,
  DivImgStyled,
  ImgStyled,
} from "./Styled";
import pokemonData from "../assets/pokemonData";
import { handlePokemonAnimation, handleProgressHP } from "../utils";

const Enemy = () => {
  const battle = useSelector((state) => state.battle);

  return (
    <PokemonGridStyled item xs={6}>
      <PaperStyled>
        <InfoStyled>
          <Typography variant="h6">{pokemonData.enemyName}</Typography>
          <Box
            style={{
              color: handleProgressHP(battle.enemyHP, pokemonData.enemyMaxHP),
            }}
          >
            <LinearProgressStyled
              variant="determinate"
              value={battle.enemyHP / 2}
              color="inherit"
            />
          </Box>
          <Typography variant="button">
            HP {battle.enemyHP}/{pokemonData.enemyMaxHP}
          </Typography>
        </InfoStyled>
      </PaperStyled>
      <DivImgStyled>
        {handlePokemonAnimation(battle.enemyFaint) === "" ? (
          <></>
        ) : (
          <Fade
            in={handlePokemonAnimation(battle.enemyFaint)}
            {...(handlePokemonAnimation(battle.enemyFaint)
              ? { timeout: 3000 }
              : {})}
          >
            <ImgStyled
              src={require("../assets/heracross.gif")}
              alt="loading..."
            />
          </Fade>
        )}
      </DivImgStyled>
    </PokemonGridStyled>
  );
};

export default Enemy;
