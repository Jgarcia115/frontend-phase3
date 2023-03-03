import React from "react"

function Cards({ player, removePlayer }) {
    const { name, rank, id } = player

    function handleClick() {
        removePlayer(player.id)
    }
    
    return (
        <div>
            <div className="card-body">
                <h5 className="card-title">{id}. {name}</h5>
                <h5 className="player-rank">{rank}</h5>
                <button onClick={handleClick}>Delete</button>
            </div>
        </div>
    )
}

export default Cards;