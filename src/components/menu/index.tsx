import { faCamera, faCogs, faEnvelope, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Nav from "react-bootstrap/esm/Nav";
import NavLink from "react-bootstrap/esm/NavLink";
import { useLocation } from "react-router";
import "./menu.scss";

const MenuBar: React.FC<any> = (props) => {

    const path = useLocation().pathname;

    return (
        <Nav className="main-nav">
            <NavLink href="/" className="nav-item" active={path === "/"}>
                <FontAwesomeIcon icon={faCamera} className="fa" /><br />GALLERY
            </NavLink>
            <NavLink href="/team" className="nav-item" active={path === "/team"}>
                <FontAwesomeIcon icon={faUsers} className="fa" /><br />OUR TEAM
            </NavLink>
            <NavLink href="/service" className="nav-item" active={path === "/service"}>
                <FontAwesomeIcon icon={faCogs} className="fa" /><br />SERVICES
            </NavLink>
            <NavLink href="/contact" className="nav-item" active={path === "/contact"}>
                <FontAwesomeIcon icon={faEnvelope} className="fa" /><br />CONTACT
            </NavLink>
        </Nav>
    );
}

export default MenuBar;
