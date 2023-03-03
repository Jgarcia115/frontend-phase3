import React from "react"
import { Link } from "react-router-dom"

function NavBar() {

    return (
        <nav> 
            <Link to="/">Our Purpose</Link>
            <Link to="/roster">Player List</Link>
            <Link to="/add">Add Player</Link>
        </nav>
    )
}

export default NavBar;