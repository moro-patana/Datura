import React, { useState } from 'react'
import NavMenu from "../components/NavMenu"

export default function Header() {
    const [showMenu, setShowMenu] = useState(false)

    function toggleMenu() {
        setShowMenu(!showMenu)
    }
    return (
        <header>
            <div>
                <h1>Datura</h1>
                <button onClick={toggleMenu}>Open</button>
                <NavMenu/>
            </div>
        </header>
    )
}
