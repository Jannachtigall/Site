import React, { useContext } from "react";
import { Context } from "../index";
import { ADMIN_ROUTE, MAIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <header className="header">
            <Navbar collapseOnSelect expand="lg" className="bg-custom">
                <Container>
                    {user.isAuth ? 
                        <Navbar.Brand className="navbar-brand" href={MAIN_ROUTE}>
                            <img src={require("../img/png/Vector.png")} alt=""/>
                        </Navbar.Brand>
                        :
                        <Navbar.Brand className="navbar-brand" href={ADMIN_ROUTE}>
                            <img src={require("../img/png/Vector.png")} alt=""/>
                        </Navbar.Brand>
                    }
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features" className="nav-item">Лавандовая ферма</Nav.Link>
                        <Nav.Link href="#features" className="nav-item">Шатёр и беседки</Nav.Link>
                        <Nav.Link href="#features" className="nav-item">Лаванда и сухоцветы</Nav.Link>
                        <Nav.Link href={SHOP_ROUTE} className="nav-item">Магазин</Nav.Link>
                        <Nav.Link href="#pricing" className="nav-item">О проекте</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
})

export default NavBar;