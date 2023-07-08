import { useState } from "react";
import "./navigation.sass"

function Navigation() {

    const [state, setState] = useState("")
    
    function Active() {
        setState(!state)
    }

    return (
        <header>
            <nav>
                <button id="menu" onClick={Active} ><i className="fi fi-ss-bars-staggered"></i></button>
                <p>Home</p>
                <button id="notification"><i className="fi fi-rs-bell"></i></button>
            </nav>

            <ul className={state ? "active" : "hidden"}>
                <li><a href="#">Perfil</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </header>
    )
}

export default Navigation;