import React, { useState} from "react"
import { useNavigate } from "react-router-dom"

function AddPlayer({ onAddPlayer }) {

    const [formData, setFormData] = useState({
        name: "",
        rank: "",

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
        const playerObj = {
          "name": formData.name,
          "rank": formData.rank
        }
        fetch("http://localhost:9292/players", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(playerObj)
        })
          .then(r=> r.json())
          .then(data=> {
              onAddPlayer(data)
              navigate('/roster')
          })
        }

    return (
        <section className='Add'>
            <h1>Add Player</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Player Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="rank"
                        placeholder="Rank and Division"
                        value={formData.image}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Add Player</button>
            </form>
        </section>
    )
}

export default AddPlayer;