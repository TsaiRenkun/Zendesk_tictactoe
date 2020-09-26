import React from 'react';

const playerForm = ({players}) => {
 
  return (
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <i class="material-icons prefix">looks_one</i>
            <input id="icon_prefix" type="text" value={playerOne} onChange = {e=> setPlayerOne(e.target.value)} />
            <label for="icon_prefix">Player 1</label>
          </div>
          <div class="input-field col s6">
            <i class="material-icons prefix">looks_two</i>
            <input id="icon_telephone" type="tel" value={playerTwo} onChange = {e=> setPlayerTwo(e.target.value)}/>
            <label for="icon_telephone">Player 2</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default playerForm;
