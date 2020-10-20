import React, { useEffect, useState } from "react";
import hangman from "../../img/hangman-img/_group-hangman-imgs";

export const GameScreen: React.FunctionComponent<any> = (props) => {
  //'status' to update the img
  const [status, changeStatus] = useState<number>(0);
  //'match' to store correct letters
  const [match, updateMatch] = useState<string[]>([]);
  //'endDes' to print win/lose msg
  const [endDes, changeEndDes] = useState<string>("");
  //'playAgain' to display button when activate
  const [playAgain, activatePlayAgain] = useState<true | false>(false);
  //store all the letters
  const [display, changeDisplay] = useState<(JSX.Element | undefined)[]>([]);
  //choices for hangman
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

  //convert the props.word to uppercase
  const word: string = props.word.toUpperCase();

  //check if win/lose when ever the match and status is updated
  useEffect(() => {
    checkDisplay();
    checkVictory();
    checkLost();
  }, [match, status]);

  //when ever the match change this will update
  const checkDisplay = (): void => {
    let temp = word.split("").map((letter: string) => {
      let reg = new RegExp(letter);
      if (letter === " ") {
        return <span id="displayLetterSpace"> </span>;
      }
      if (reg.test(match.join(""))) {
        return <span id="displayLetter">{letter}</span>;
      } else {
        return <span id="displayLetter">&nbsp;</span>;
      }
    });
    changeDisplay(temp);
  };
  //check to see if the game is over
  const checkLost = (): void => {
    //lose status
    if (status === 7) {
      let element = document.getElementsByClassName("choice-letter");
      //disable the choice letters
      //@ts-ignore
      Array.from(element).map((cur) => (cur.style.pointerEvents = "none"));
      changeEndDes("You Lose");
      let tempdisplay: (JSX.Element | undefined)[] = word
        .split("")
        .map((letter: any) => {
          if (letter === " ")
            return <span id="displayLetterSpace">{letter}</span>;
          // if(match.)
          if (match.includes(letter))
            return <span id="displayLetter">{letter}</span>;
          if (letter !== " ")
            return <span id="displayLetterRed">{letter}</span>;
        });
      //display the letter
      changeDisplay(tempdisplay);
      activatePlayAgain(true);
    }
    //function that will take an array of letter and match it with a letter
    // function matchLetter(letter: any, array: any): any {
    //   console.log(array[0], letter);
    //   for (let i = 0; i < array.length; i++) {
    //     if (letter === array[i]) {
    //       console.log("hello");
    //       return true;
    //     }
    //   }
    // }
  };

  //check if you win ( guess all the letters)
  const checkVictory = (): void => {
    let victory: boolean = word.split("").every((letter: string) => {
      return match.includes(letter) || letter === " ";
    });
    if (victory) {
      changeStatus(8);
      changeEndDes("You Win");
      activatePlayAgain(true);
      // @ts-ignore
      var elements = document.getElementsByClassName("choice-letter");

      //@ts-ignore
      Array.from(elements).map((cur) => (cur.style.pointerEvents = "none"));
    }
  };

  const grayLetter = (letter: string): void => {
    console.log(letter);
    // @ts-ignore
    document.getElementsByClassName(letter)[0].style.color = "lightgray";
    //@ts-ignore
    let ele = document.getElementsByClassName("A");
    console.log(ele);
    // @ts-ignore
    document.getElementsByClassName(letter)[0].style.pointerEvents = "none";
  };

  const displayImg = (status: number): JSX.Element | undefined => {
    switch (`Hangman${status}`) {
      case "Hangman0":
        return <img id="image" src={hangman.Hangman0} alt="img of hangman" />;
      case "Hangman1":
        return <img id="image" src={hangman.Hangman1} alt="img of hangman" />;
      case "Hangman2":
        return <img id="image" src={hangman.Hangman2} alt="img of hangman" />;
      case "Hangman3":
        return <img id="image" src={hangman.Hangman3} alt="img of hangman" />;
      case "Hangman4":
        return <img id="image" src={hangman.Hangman4} alt="img of hangman" />;
      case "Hangman5":
        return <img id="image" src={hangman.Hangman5} alt="img of hangman" />;
      case "Hangman6":
        return <img id="image" src={hangman.Hangman6} alt="img of hangman" />;
      case "Hangman7":
        return <img id="image" src={hangman.Hangman7} alt="img of hangman" />;
      case "Hangman8":
        return <img id="image" src={hangman.Hangman8} alt="img of hangman" />;

      // default: return <img id="image" src={Hangman7} alt="img of hangman" />;
    }
  };

  const displayChoice: JSX.Element[] = choices.map((letter) => (
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

  const checkMatch = (letter: string): void => {
    let reg = new RegExp(letter as any);
    if (!reg.test(word)) {
      changeStatus(status + 1);
    } else {
      let temp = [...match];
      temp.push(letter);
      updateMatch(temp);
    }
  };

  const playAgainBtn = (): void => {
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
