import React, { useState} from "react"
import { useNavigate } from "react-router-dom"

function Agent({ agent, onChangeAgent, onDeleteAgent }) {
    const { name, id, player_id } = agent

    function handleDelete() {
        fetch(`http://localhost:9292/agents/${agent.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
          })
            .then(r=> r.json())
            .then(() => onDeleteAgent(agent))
    }

    const [formData, setFormData] = useState({
        name: "",
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
        }
        fetch(`http://localhost:9292/agents/${agent.id}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(agentObj)
        })
          .then(r=> r.json())
          .then(data=> {
              onChangeAgent(data)
              navigate('/roster')
          })
        }
    
    return (
        <div>
            <p className="agent-name">{agent.name}</p>
            <button onClick={handleDelete}>Delete Agent</button>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Change Agent Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Submit Name</button>
            </form>
            <hr/>
        </div>
    )
}

export default Agent;