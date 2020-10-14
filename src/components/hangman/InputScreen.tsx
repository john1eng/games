import React from "react";

export const InputScreen: React.FunctionComponent<any> = (props) => {
  const changeGameScreen = () => {
    props.changeInputS(false);
    props.changeGameS(true);
  };

  const submitWord = (event: any) => {
    console.log(event.target.value);
    props.changeWord(event.target.value);
  };

  return (
    <div id="input-container">
      <div id="wrapper-form">
        <form>
          <h1>Enter a Word</h1>
          <label htmlFor="word"></label>
          <input id="word" type="password" onChange={submitWord} />
          <button id="submitBtn" onClick={changeGameScreen} type="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};
