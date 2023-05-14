import React from "react";
import Nav from "react-bootstrap/esm/Nav";
import NavLink from "react-bootstrap/esm/NavLink";

const MenuBar: React.FC<any> = (props) => {
    return (
        <Nav>
            <NavLink href="/">GALLERY</NavLink>
            <NavLink href="/team">OUR TEAM</NavLink>
            <NavLink href="/service">SERVICES</NavLink>
            <NavLink href="/contact">CONTACT</NavLink>
        </Nav>
    );
}

export default MenuBar;
