import red from "@material-ui/core/colors/red";
import yellow from "@material-ui/core/colors/yellow";
import green from "@material-ui/core/colors/green";

import pokemonData from "../assets/pokemonData";
import blastoiseAudio from "../assets/blastoise.mp3";
import heracrossAudio from "../assets/heracross.mp3";

import {
  updateMessageOne,
  attackEnemy,
  attackPlayer,
  gameMessage,
  winGame,
  loseGame,
  gameOver,
} from "../store/battleSlice";

export const startingSequence = (dispatch) => {
  setTimeout(() => {
    dispatch(
      updateMessageOne({
        playerFaint: "",
        enemyFaint: true,
        textMessageOne: `Um ${pokemonData.enemyName} apareceu!`,
      })
    );

    setTimeout(() => {
      dispatch(
        updateMessageOne({
          playerFaint: false,
          enemyFaint: false,
          textMessageOne: `Vai ${pokemonData.playerName}!`,
        })
      );

      setTimeout(() => {
        dispatch(
          updateMessageOne({
            playerFaint: false,
            enemyFaint: false,
            textMessageOne: ``,
          })
        );
      }, 3000);
    }, 3000);
  }, 0);
};

export const enemyTurn = (
  state,
  dispatch,
  playerDamage,
  enemyAttackName,
  enemyAttackDamage
) => {
  let enemyDamage = enemyAttackDamage + Math.floor(Math.random() * 11);

  if (state.enemyHP - playerDamage <= 0) {
    dispatch(
      winGame({
        textMessageOne: `${pokemonData.enemyName} desmaiou.`,
        textMessageTwo: `${pokemonData.playerName} venceu!`,
      })
    );

    setTimeout(() => {
      dispatch(gameOver());
    }, 3000);
  } else {
    dispatch(
      attackPlayer({
        playerHP:
          state.playerHP - enemyAttackDamage <= 0
            ? 0
            : state.playerHP - enemyDamage,
        textMessageOne: `${pokemonData.enemyName} usou ${enemyAttackName} e causou ${enemyDamage} de dano!`,
      })
    );

    new Audio(heracrossAudio).play();

    setTimeout(() => {
      if (state.playerHP - enemyAttackDamage <= 0) {
        dispatch(
          loseGame({
            textMessageOne: `${pokemonData.playerName} desmaiou.`,
            textMessageTwo: `${pokemonData.enemyName} venceu!`,
          })
        );

        setTimeout(() => {
          dispatch(dispatch(gameOver()));
        }, 3000);
      } else {
        dispatch(
          gameMessage({
            textMessageOne: "",
          })
        );
      }
    }, 2000);
  }
};

export const handleAttackClick = (state, dispatch, name, damage) => {
  let playerDamage = damage + Math.floor(Math.random() * 11);

  dispatch(
    attackEnemy({
      enemyHP:
        state.enemyHP - playerDamage <= 0 ? 0 : state.enemyHP - playerDamage,
      textMessageOne: `${pokemonData.playerName} usou ${name} e causou ${playerDamage} de dano!`,
    })
  );

  new Audio(blastoiseAudio).play();

  setTimeout(() => {
    let enemyAttack = Math.floor(Math.random() * 4);
    let enemyAttackDamage = pokemonData.enemyAttackDamage[enemyAttack];
    let enemyAttackName = pokemonData.enemyAttackNames[enemyAttack];

    enemyTurn(
      state,
      dispatch,
      playerDamage,
      enemyAttackName,
      enemyAttackDamage
    );
  }, 2000);
};

export const handlePokemonAnimation = (faint) => {
  let anim;

  switch (faint) {
    case "":
      anim = "hide";
      break;
    case true:
      anim = false;
      break;
    default:
      anim = true;
  }
  return anim;
};

export const handleProgressHP = (currentHP, maxHP) => {
  let percentage = (currentHP / maxHP) * 100;
  let progressColor;

  if (percentage <= 25) {
    progressColor = red[500];
  } else if (percentage <= 50) {
    progressColor = yellow[500];
  } else if (percentage > 50) {
    progressColor = green[500];
  }

  return progressColor;
};
