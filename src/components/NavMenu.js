import React from 'react'
import styled from "styled-components"

const Menu = styled.nav`
    position: absolute;
    top: 10%;
    right: 1rem;
    border: none;
    border-radius: 15px;
    background: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 6%) 0px 0.2rem 0.4rem;
    padding: 1rem;
`;
const MenuList = styled.ul`
 padding: 1rem;
 display: flex;
 flex-direction: column;
 gap: 20px;
`;
const MenuListIem = styled.li`
 list-style: none;
   a {
       text-decoration: none;
   }
`;
export default function NavMenu() {
    return (
        <Menu>
            <MenuList>
                <MenuListIem><a href="/about">About</a></MenuListIem>
                <MenuListIem><a href="/portfolio">Portfolio</a></MenuListIem>
                <MenuListIem><a href="/blogs">Blogs</a></MenuListIem>
                <MenuListIem><a href="/contacts">Contacts</a></MenuListIem>
            </MenuList>
        </Menu>
    )
}
