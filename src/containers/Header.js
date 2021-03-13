import React, { useState } from 'react'
import NavMenu from "../components/NavMenu"
import styled from "styled-components"
import menuIcon from "../images/menu-icon.svg"

const HeaderContainer = styled.header`
    background: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 6%) 0px 0.2rem 0.4rem;
`;
const HeaderTitle = styled.h1`
    font-family: "Poppins";
    margin: 0;
    font-size: 32px;
`;
const HeaderContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`;
const HeaderButton = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
`;
export default function Header() {
    const [showMenu, setShowMenu] = useState(false)

    function toggleMenu() {
        setShowMenu(!showMenu)
    }
    return (
        <HeaderContainer>
            <HeaderContent>
                <HeaderTitle>Datura</HeaderTitle>
                <HeaderButton onClick={toggleMenu}><img src={menuIcon} alt="menu icon" /></HeaderButton>
                {showMenu && <NavMenu/>}
            </HeaderContent>
        </HeaderContainer>
    )
}
