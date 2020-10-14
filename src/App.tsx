import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage } from './components/home-page/HomePage'
import  HangmanContainer from './containers/hangmanContainer/HangmanContainer'
import  TictactoeContainer from './containers/tictactoeContainer/TictactoeContainer'
import { NavigationBar } from './components/navigation-bar/navigationBar';
import { Random } from './components/random/random';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar/>
        {/* <HomePage /> */}
        <Switch>
          <Route exact path='/' render = {() => <HomePage />} />
          <Route path = '/Hangman' render = {()=> <HangmanContainer />} />
          <Route path = '/Tictactoe' render = {()=> <TictactoeContainer /> } />
          <Route path = '/Random' render = {()=> <Random render={()=><HangmanContainer />}
                                                          render2={()=><TictactoeContainer />}/>}/>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
