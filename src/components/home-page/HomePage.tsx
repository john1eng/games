import React from "react";
import { Link } from "react-router-dom";
import styles from './HomePage.module.css';

export const HomePage: React.FunctionComponent<any> = (props) => {

  return (
    <div className={styles.homeContainer}>
      <h1>Home Page</h1>
      <div>
        <Link to='/Tictactoe'><button>TIC TAC TOE</button></Link>
        <Link to='/Hangman'><button>HANG MAN</button></Link>
      </div>
    </div>
  );
};