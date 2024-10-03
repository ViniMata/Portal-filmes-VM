import { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";

export default function Header({ isLogged, handleLogin }) {

    const [isLogged, setIsLogged] = useState(false)

    const handleLogin = () => {
        setIsLogged(!isLogged)
    }


    return (
        <>
            <header className="flex bg-red-700 text-white justify-around items-center h-14 ">
                <div>
                    <h1>Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex gap-4">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='filmes'>Filmes</NavLink></li>
                        <li><NavLink to='generos'>Generos</NavLink></li>
                        {isLogged && <li><NavLink to='/config'>configurações</NavLink></li>}

                    </ul>

                </nav>

                <Login isLogged={isLogged} handleLogin={handleLogin} />
            </header>
        </>
    )
}