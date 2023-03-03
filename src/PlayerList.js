import React from "react"
import Players from "./Players";

function PlayerList({ players, onRemovePlayer }) {
    return (
        <div className='List'>
            <div className="container">
            {players.map(player => {
                return <Players player={player} onRemovePlayer={onRemovePlayer}/>
            })}

            </div>
        </div>
    )
}

export default PlayerList;