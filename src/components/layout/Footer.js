import React from "react";

const Footer = ({ players, winner, count, reset }) => {
  let name = "";
  if (winner === "X") {
    name = `The winner is ${players[0]}`;
  } else if (winner === "O") {
    name = `The winner is ${players[1]}`;
  } else if (winner === "null" && count >= 9) {
    name = "it's a Draw";
  }

  return (
    <footer className="page-footer blue" style={{ marginTop: "20px" }}>
      <div className="container">
        <div className="row">
          {players.length === 0 ? (
            <div className="col s12">
              <h5 className="white-text center">Welcome</h5>
              <p className="grey-text text-lighten-4 center">
                Please enter your game names
              </p>
            </div>
          ) : (
            <div>
              <div className="col s8" style ={{marginBottom: "20px"}}>
                <h5 className="white-text center">Tic Tac Toe Game</h5>
                <h5 className="grey-text text-lighten-4 center">
                  {name === "" ? "Keep playing" : name}
                </h5>
              </div>
              <div className="col s4">
                <a class="btn-large green" style={{marginTop:"15px"}} onClick={reset}>Restart</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
