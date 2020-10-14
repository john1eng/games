import React, {useState} from 'react';
import './HangmanContainer.css';
import { HomeScreen } from '../../components/hangman/HomeScreen';
import { InputScreen } from '../../components/hangman/InputScreen';
import { GameScreen } from '../../components/hangman/GameScreen';

function HangmanContainer() {
  const [homeS, changeHomeS] = useState<boolean>(true);
  const [inputS, changeInputS] = useState<boolean>(false);
  const [gameS, changeGameS] = useState<boolean>(false);
  const [word, changeWord] = useState<String>("");


  return (
    <div className="App">
      {homeS && <HomeScreen changeHomeS={changeHomeS} changeInputS={changeInputS}/> }
      {inputS && <InputScreen changeInputS={changeInputS} changeGameS={changeGameS} changeWord={changeWord}/>} 
      {gameS && <GameScreen changeInputS={changeInputS} changeGameS={changeGameS} word={word}/>}
    </div>
  );
}

export default HangmanContainer;
