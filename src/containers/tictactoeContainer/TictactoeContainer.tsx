import React, {useState} from 'react';
import { HomePage } from '../../components/tictactoe/HomePage/HomePage'
import { GamePage } from '../../components/tictactoe/GamePage/GamePage';

function TictactoeContainer() {
  const [homeS, setHomeS] = useState<Boolean>(true);
  const [gameS, setGameS] = useState<Boolean>(false);

  return (
    <div>
      {homeS && <HomePage setHomeS={setHomeS} setGameS = {setGameS} />}
      {gameS && <GamePage />}
    </div>
  );
}

export default TictactoeContainer;
