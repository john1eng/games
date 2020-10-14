import React, { useEffect, useState } from "react";
import Hangman0 from "../../img/hangman-img/hangman0.png";
import Hangman1 from "../../img/hangman-img/hangman1.png";
import Hangman2 from "../../img/hangman-img/hangman2.png";
import Hangman3 from "../../img/hangman-img/hangman3.png";
import Hangman4 from "../../img/hangman-img/hangman4.png";
import Hangman5 from "../../img/hangman-img/hangman5.png";
import Hangman6 from "../../img/hangman-img/hangman6.png";
import Hangman7 from "../../img/hangman-img/hangman7.png";
import Hangman8 from "../../img/hangman-img/hangman8.png";
import Confetti from "../../img/hangman-img/Confetti.gif";
import { NavigationBar } from "../navigation-bar/navigationBar";
import { createImportSpecifier } from "typescript";


export const GameScreen: React.FunctionComponent<any> = (props) => {
  //'status' to update the img
  const [status, changeStatus] = useState<number>(0);
  //'match' to store correct letters
  const [match, updateMatch] = useState<String[]>([]);
  //'endDes' to print win/lose msg
  const [endDes, changeEndDes] = useState<String>("");
  //'playAgain' to display button when activate
  const [playAgain, activatePlayAgain] = useState<boolean>(false);
  //store all the letters
  const [display, changeDisplay] = useState<any>([])
  const choices = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  //check if win/lose when ever the match and status is updated
  useEffect(() => {
    changeDisplay(temp);
    checkVictory();
    checkStatus();
  }, [props, match, status]);

  const word = props.word.toUpperCase();

  //check to see if the game is over
  const checkStatus = () => {
    if (status === 7) {

      // @ts-ignore
      var element = document.getElementsByClassName("choice-letter");
      //disable the choice letters
      for (var i = 0; i < element.length; i++) {
        //@ts-ignore
        element[i].style.pointerEvents = "none";
      }
      changeEndDes("You Lose");
      let tempdisplay = word.split('').map((l:any) => 
      
      {
        
        if (l === " ")
          return <span id="displayLetterSpace">{l}</span>
        // if(match.)
        if(matchLetter(l, match)) 
          return <span id="displayLetter">{l}</span>
        if (l !== " ")
          return <span id="displayLetterRed">{l}</span>
        
      });
      changeDisplay(tempdisplay);
      console.log(display);
      activatePlayAgain(true);
    }
  };

  function matchLetter(letter:any, array:any):any {
    console.log(array[0], letter)
    for(let i = 0; i<array.length; i++){
      if(letter===array[i]){
        console.log("hello")
        return true;
      }
      };
  }

  const checkVictory = () => {
    let victory = word.split("").every((l: any) => {
      return l !== " " ? new RegExp(l).test(match.join("")) : true;
    });
    if (victory) {
      changeStatus(8);
      changeEndDes("You Win");
      activatePlayAgain(true);
      // @ts-ignore
      var elements = document.getElementsByClassName("choice-letter");

      for (var i = 0; i < elements.length; i++) {
        //@ts-ignore
        elements[i].style.pointerEvents = "none";
      }
    }
  };


  let temp = word.split("").map((l: any) => {
    let reg = new RegExp(l);
    if (l === " ") {
      return <span id="displayLetterSpace"> </span>;
    }
    if (reg.test(match.join(""))) {
      return <span id="displayLetter">{l}</span>;
    } else {
      return <span id="displayLetter">&nbsp;</span>;
    }
  });

  

  const grayLetter = (letter: String) => {
    console.log(letter);
    // @ts-ignore
    document.getElementsByClassName(letter)[0].style.color = "lightgray";
    //@ts-ignore
    let ele = document.getElementsByClassName("A")
    console.log(ele);
    // @ts-ignore
    document.getElementsByClassName(letter)[0].style.pointerEvents = "none";
  };

  const displayImg = (status: number) => {
    switch (`Hangman${status}`) {
      case "Hangman0":
        return <img id="image" src={Hangman0} alt="img of hangman" />;
      case "Hangman1":
        return <img id="image" src={Hangman1} alt="img of hangman" />;
      case "Hangman2":
        return <img id="image" src={Hangman2} alt="img of hangman" />;
      case "Hangman3":
        return <img id="image" src={Hangman3} alt="img of hangman" />;
      case "Hangman4":
        return <img id="image" src={Hangman4} alt="img of hangman" />;
      case "Hangman5":
        return <img id="image" src={Hangman5} alt="img of hangman" />;
      case "Hangman6":
        return <img id="image" src={Hangman6} alt="img of hangman" />;
      case "Hangman7":
        return <img id="image" src={Hangman7} alt="img of hangman" />;
      case "Hangman8":
        return <img id="image" src={Hangman8} alt="img of hangman" />

      // default: return <img id="image" src={Hangman7} alt="img of hangman" />;
    }
  };

  const displayChoice = choices.map((letter) => (
    <span
      className={`choice-letter ${letter}`}
      onClick={() => {
        grayLetter(letter);
        checkMatch(letter);
      }}
    >
      {letter}{" "}
    </span>
  ));

  const checkMatch = (letter: String) => {
    let reg = new RegExp(letter as any);
    if (!reg.test(word)) {
      changeStatus(status + 1);
    } else {
      let temp = [...match];
      temp.push(letter);
      updateMatch(temp);
    }
  };

  const playAgainBtn = () => {
    props.changeGameS(false);
    props.changeInputS(true);
  };
  return (
    <div id="game-container">
      <section id="game-display">
        <div>{displayImg(status)}</div>
        <div id="choices">{displayChoice}</div>
      </section>
      <section id="match-display">
        <h1>{display}</h1>
        {playAgain && (
          <h2>
            {endDes} &nbsp;&nbsp;
            <button id="play-again-btn" onClick={playAgainBtn}>
              Play Again?
            </button>
          </h2>
        )}
      </section>
    </div>
  );
};
