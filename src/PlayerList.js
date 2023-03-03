import React from "react"

function CardList({ players, onRemovePlayer }) {
    return (
        <div className='List'>
            <div className="container">
            {players.map(player => {
                return <Cards player={player} onRemoveToy={onRemovePlayer}/>
            })}

            </div>
        </div>
    )
}

export default CardList;