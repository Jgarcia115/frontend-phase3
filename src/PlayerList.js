import React from "react"
import Player from "./Player";

function PlayerList({ players, onRemovePlayer, onChangeAgent, onDeleteAgent }) {
    return (
        <div className='List'>
            <div className="container">
            {players.map(player => {
                return <Player key={player.id} player={player} onRemovePlayer={onRemovePlayer} onChangeAgent={onChangeAgent} onDeleteAgent={onDeleteAgent}/>
            })}

            </div>
        </div>
    )
}

export default PlayerList;