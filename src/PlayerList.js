import React from "react"
import Player from "./Player";

function PlayerList({ players, onRemovePlayer }) {
    return (
        <div className='List'>
            <div className="container">
            {players.map(player => {
                return <Player key={player.id} player={player} onRemovePlayer={onRemovePlayer}/>
            })}

            </div>
        </div>
    )
}

export default PlayerList;