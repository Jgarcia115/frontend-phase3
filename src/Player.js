import React, { useState} from "react"
import { useNavigate } from "react-router-dom"
import Agents from "./Agent"

function Player({ player, onRemovePlayer, onChangeAgent, onDeleteAgent, onAddAgent }) {
    const { name, rank, agents, id } = player

    function handleClick() {
        onRemovePlayer(player.id)
    }

    const [formData, setFormData] = useState({
        name: ""
    })

    const navigate = useNavigate();

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const agentObj = {
          "name": formData.name,
          "player_id": player.id
        }
        fetch("http://localhost:9292/agents", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(agentObj)
        })
          .then(r=> r.json())
          .then(data=> {
              onAddAgent(data)
              navigate('/roster')
          })
        }
    
    return (
        <div>
            <div className="card-body">
                <h1 className="card-title">{name}</h1>
                <h5 className="player-rank">Rank: {rank}</h5>
                <hr/>
                    {agents.map(agent => {
                    return <Agents key={agent.id} agent={agent} onChangeAgent={onChangeAgent} onDeleteAgent={onDeleteAgent}/>
                    })}
                    <button onClick={handleClick}>Delete Player</button>
                    <hr/>
                        <form onSubmit={handleSubmit}>
                            <label>
                                <input
                                type="text"
                                name="name"
                                placeholder="Agent Name"
                                value={formData.agent}
                                onChange={handleChange}
                                />
                            </label>
                            <button type="submit">Add Agent</button>
                        </form>
            </div>
        </div>
    )
}

export default Player;