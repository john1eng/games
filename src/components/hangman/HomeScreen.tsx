import React from "react";

export const HomeScreen: React.FunctionComponent<any> = (props) => {


    const changeInputScreen = () => {
        props.changeHomeS(false);
        props.changeInputS(true);
    }

  return (
    <div id="home-container">
      <h1>HANG MAN</h1>
      <button onClick={changeInputScreen}>PLAY</button>
    </div>
  );
};
