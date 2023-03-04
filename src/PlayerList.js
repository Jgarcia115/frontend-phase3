import React from "react"
import Player from "./Player";

function PlayerList({ players, onRemovePlayer, onRemoveAgent, onChangeAgent }) {
    return (
        <div className='List'>
            <div className="container">
            {players.map(player => {
                return <Player key={player.id} player={player} onRemovePlayer={onRemovePlayer} onRemoveAgent={onRemoveAgent} onChangeAgent={onChangeAgent}/>
            })}

            </div>
        </div>
    )
}

export default PlayerList;