import React, { useContext } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useHistory } from "react-router-dom"
import { UserContext } from '../App'


const Header = () => {
    const { state, dispatch } = useContext(UserContext);
    const history = useHistory();

    
    return (
        <header>
            <Navbar bg="primary" variant='dark' expand="lg">
                <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-left">
                    <LinkContainer to='/projects'>
                        <Nav.Link >All Projects</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/login'>
                        <Nav.Link >Login</Nav.Link>
                    </LinkContainer>
                    {
                        state && (
                            <Button variant='primary'
                            onClick={
                                () => {
                                    localStorage.clear()
                                    dispatch({ type: "CLEAR" })
                                    history.push("/login")
                                    }
                                }
                            >
                            Logout
                            </Button>
                        )
                    }
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand href="/">Grandhome Investments</Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
