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

const Player = () => {
  const battle = useSelector((state) => state.battle);

  return (
    <PokemonGridStyled item xs={6}>
      <DivImgStyled>
        {handlePokemonAnimation(battle.playerFaint) === "" ? (
          <></>
        ) : (
          <Fade
            in={handlePokemonAnimation(battle.playerFaint)}
            {...(handlePokemonAnimation(battle.playerFaint)
              ? { timeout: 3000 }
              : {})}
          >
            <ImgStyled
              src={require("../assets/blastoise.gif")}
              alt="loading..."
            />
          </Fade>
        )}
      </DivImgStyled>
      <PaperStyled>
        <InfoStyled>
          <Typography variant="h6">{pokemonData.playerName}</Typography>
          <Box
            style={{
              color: handleProgressHP(battle.playerHP, pokemonData.playerMaxHP),
            }}
          >
            <LinearProgressStyled
              variant="determinate"
              value={battle.playerHP / 2}
              color="inherit"
            />
          </Box>
          <Typography variant="button">
            HP {battle.playerHP}/{pokemonData.playerMaxHP}
          </Typography>
        </InfoStyled>
      </PaperStyled>
    </PokemonGridStyled>
  );
};

export default Player;
