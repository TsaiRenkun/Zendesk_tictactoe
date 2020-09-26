import React, { useState } from "react";
import M from 'materialize-css/dist/js/materialize'

const PlayerForm = ({ setPlayer }) => {

    const [playerOne, setPlayerOne] = useState('')
    const [playerTwo, setPlayerTwo] = useState('')

    const onSubmit = () => {
        if(playerOne === '' || playerTwo === ''){
            M.toast({html: "Please enter your player names"})
        }
        else {
        console.log(playerOne)
        console.log(playerTwo)
        
        setPlayer(playerOne, playerTwo)
        }
    }


  return (
    <div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">looks_one</i>
              <input
                type="text"
                value={playerOne}
                onChange={(e) => setPlayerOne(e.target.value)}
              />
              <label>Player 1</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">looks_two</i>
              <input
                type="text"
                value={playerTwo}
                onChange={(e) => setPlayerTwo(e.target.value)}
              />
              <label>Player 2</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light blue"
            type="submit"
            name="action"
            onClick = {onSubmit}
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlayerForm;
