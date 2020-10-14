import React, { useEffect, useState } from "react";
import styles from "./GamePage.module.css";

export const GamePage: React.FunctionComponent<any> = (props) => {
  const [status, changeStatus] = useState<any>([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [curPlayer, setCurPlayer] = useState<String>("O");
  const [dispWinner, setDispWinner] = useState<String>("");
  const [dispTurn, setTurn] = useState<string>(`${curPlayer} Turn`)
  const [result, setResult] = useState<boolean>(false)

  useEffect(() => {
    updateStatus();
    checkWinner();
    handleTurnDisplay();
  }, [status, curPlayer, result]);

  const updateStatus = () => {
    for (let i = 0; i < status.length; i++) {
      for (let ii = 0; ii < status[0].length; ii++) {
        //@ts-ignore
        let ele = document.getElementsByClassName(styles.item);
        ele[i * 3 + ii].innerHTML = status[i][ii];
        if (/\w/.test(status[i][ii]))
          //@ts-ignore
          ele[i * 3 + ii].style.pointerEvents = "none";
      }
    }
  };

  const updateGame = (e?: any) => {
    console.log(e.target.id);
    console.log(status);
    for (let i = 0; i < status.length; i++) {
      for (let ii = 0; ii < status[0].length; ii++) {
        if (e.target.id === (i * 3 + ii).toString()) {
          let temp = [...status];
          temp[i][ii] = curPlayer;
          changeStatus(temp);
          if (curPlayer === "O") {
            setCurPlayer("X");
            let ele = document.getElementsByClassName(styles.item);
            //@ts-ignore
            ele[i * 3 + ii].style.backgroundColor = "#5DA9E9";
          } else {
            setCurPlayer("O");
            let ele = document.getElementsByClassName(styles.item);
            //@ts-ignore
            ele[i * 3 + ii].style.backgroundColor = "#e95d5d";
          }
        }
      }
    }
  };
  const handleTurnDisplay:any = () => {

    if(!result){
      setTurn(`${curPlayer} Turn`);

    } else {
      setTurn("");
      let ele = document.getElementsByClassName(styles.dispWin);
      if(curPlayer === 'X')
      //@ts-ignore
        ele[0].style.color = '#003F91'
      else
      //@ts-ignore
        ele[0].style.color = '#8f0000'
    }
  }

  //display winner
  const displayWinner = (winner: String) => {
    if(winner === 'Tie'){
      setDispWinner(`Tie`);
    }
    else
      setDispWinner(`${winner} WIN`);
    //so it will not display the Turn
    setResult(true);
    //disable click for all items
    for (let i = 0; i < status.length; i++) {
      for (let ii = 0; ii < status[0].length; ii++) {
        let ele = document.getElementsByClassName(styles.item);
        //@ts-ignore
        ele[i * 3 + ii].style.pointerEvents = "none";
        if(status[i][ii]==="")
        //@ts-ignore
          ele[i * 3 + ii].style.backgroundColor = "#A8763E";
      }
    }
    //show try again button
    //@ts-ignore
    let ele = document.getElementsByClassName(styles.btn)
    //@ts-ignore
    ele[0].style.visibility = 'visible'

    console.log(ele)
  };
  //decide if there is a winner
  const checkWinner = () => {
    //check 1st horizontal
    if ([status[0][0],status[1][0],status[2][0]].every(cur => (cur === status[0][0] && cur !== ""))){
      displayWinner(status[0][0]);
    } 
    //check 2nd horizontal
    if ([status[0][1],status[1][1],status[2][1]].every(cur => (cur === status[0][1] && cur !== ""))){
      displayWinner(status[0][1]);
    }
      //check 3rd horizontal
    if ([status[0][2], status[1][2], status[2][2]].every(cur => (cur === status[0][2] && cur !== ""))){
      displayWinner(status[0][2]);
    }
      //check 1st roll
    if ([status[0][0], status[0][1], status[0][2]].every(cur => (cur === status[0][0] && cur !== ""))){
      displayWinner(status[0][0]);
    }
      //check 2nd roll
    if ([status[1][0], status[1][1], status[1][2]].every(cur => (cur === status[1][0] && cur !== ""))){
      displayWinner(status[1][0]);
    }
      //check 3rd roll
    if ([status[2][0], status[2][1], status[2][2]].every(cur => (cur === status[2][0] && cur !== ""))){
      displayWinner(status[2][0]);
    }
    //check diagonal to right
    if ([status[0][0], status[1][1], status[2][2]].every(cur => (cur === status[0][0] && cur !== ""))){
      displayWinner(status[0][0]);
    }
    //check diagonal to left
    if ([status[0][2], status[1][1], status[2][0]].every(cur => (cur === status[0][2] && cur !== ""))){
      displayWinner(status[0][2]);
    } 
    //if no one win then its a tie
    if (status.every((statusPart:any) => statusPart.every((cur:any) => cur !== "")))
      displayWinner('Tie');
  };

  const refreshGame = () => {
    changeStatus([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setCurPlayer("O");
    setDispWinner("");
    setResult(false);
    for (let i = 0; i < status.length; i++) {
      for (let ii = 0; ii < status[0].length; ii++) {
        //@ts-ignore
        let ele = document.getElementsByClassName(styles.item);
        //@ts-ignore
        ele[(i * 3) + ii].style.backgroundColor = 'white';
        //@ts-ignore
        ele[i * 3 + ii].style.pointerEvents = "auto";
      }
    }
    
    let ele = document.getElementsByClassName(styles.btn);
    //@ts-ignore
    ele[0].style.visibility = "hidden";
    console.log(ele);
  }

  return (
    <div className={styles.GamePage}>
      {/* <nav>Tic Tac Toe</nav> */}
      <div className={styles.gameContainer}>
        <div className = {styles.displayContainer}>
          <h1 className = {styles.dispWin}>{dispWinner}</h1>
        </div>
        <div className={styles.grid}>
          <div
            onClick={updateGame}
            id="0"
            className={styles.item1 + " " + styles.item}
          ></div>
          <div
            onClick={updateGame}
            id="1"
            className={styles.item2 + " " + styles.item}
          ></div>
          <div
            onClick={updateGame}
            id="2"
            className={styles.item3 + " " + styles.item}
          ></div>
          <div
            onClick={updateGame}
            id="3"
            className={styles.item4 + " " + styles.item}
          ></div>
          <div
            onClick={updateGame}
            id="4"
            className={styles.item5 + " " + styles.item}
          ></div>
          <div
            onClick={updateGame}
            id="5"
            className={styles.item6 + " " + styles.item}
          ></div>
          <div
            onClick={updateGame}
            id="6"
            className={styles.item7 + " " + styles.item}
          ></div>
          <div
            onClick={updateGame}
            id="7"
            className={styles.item8 + " " + styles.item}
          ></div>
          <div
            onClick={updateGame}
            id="8"
            className={styles.item9 + " " + styles.item}
          ></div>
        </div>
        <div className={styles.displayTurn}>
          <h1>{dispTurn}</h1>
        </div>
        <div>
          <button className={styles.btn} onClick={refreshGame}>Play Again</button>
        </div>
      </div>
    </div>
  );
};
