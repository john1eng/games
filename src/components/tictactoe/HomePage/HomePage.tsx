import React from "react";
import styles from './HomePage.module.css';

export const HomePage: React.FunctionComponent<any> = (props) => {
  const changeGameScreen = () => {
    props.setHomeS(false);
    props.setGameS(true);
  };

  return (
    <div className={styles.homeContainer}>
      <h1>
        <span>TIC</span>-<span>TAC</span>-<span>TOE</span>
      </h1>
      <button onClick={changeGameScreen}>PLAY</button>
    </div>
  );
};
