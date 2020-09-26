import React, {Fragment ,useEffect} from 'react';
import Game from './components/Game'
import NavBar from './components/layout/navBar'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';

function App() {
  useEffect(()=>M.AutoInit())
  return (
    <Fragment>
      <NavBar/>
      <Game/>
    </Fragment>
  );
}

export default App;
