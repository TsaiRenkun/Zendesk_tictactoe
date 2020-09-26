import React from "react";

const navBar = () => {
  return (
    <nav style={{marginBottom:"30px"}} className ='blue'>
    <div className="nav-wrapper">
      <a href="#!" className="brand-logo"><i className="material-icons" style = {{marginLeft: "5px"}}>videogame_asset</i> React Tic Tac Toe</a>
      <ul className="right hide-on-med-and-down">
      </ul>
    </div>
  </nav>
  );
};

export default navBar;
