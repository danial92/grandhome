// import React, { useContext } from 'react'
// import { Navbar, Nav, Container, Button } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'
// import { useHistory } from "react-router-dom"
// import { UserContext } from '../App'


// const Header = () => {
//     const { state, dispatch } = useContext(UserContext);
//     const history = useHistory();
    
//     return (
//         <header>
//             <Navbar bg="primary" variant='dark' expand="lg">
//                 <Container>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Brand href="/">Grand Home Investments</Navbar.Brand>
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="ml-left">
//                     <LinkContainer to='/projects'>
//                         <Nav.Link >All Projects</Nav.Link>
//                     </LinkContainer>
//                     <LinkContainer to='/#'>
//                         <Nav.Link >About Us</Nav.Link>
//                     </LinkContainer>
//                     <LinkContainer to='/#'>
//                         <Nav.Link >Contact Us</Nav.Link>
//                     </LinkContainer>
//                     {
//                         state && (
//                             <Button variant='primary'
//                             onClick={
//                                 () => {
//                                     localStorage.clear()
//                                     dispatch({ type: "CLEAR" })
//                                     history.push("/login")
//                                     }
//                                 }
//                             >
//                             Logout
//                             </Button>
//                         )
//                     }
//                     </Nav>
//                 </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </header>
//     )
// }

// export default Header

// import React, { useContext } from 'react'
// import { Navbar, Nav, Container, Button } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'
// import { useHistory } from "react-router-dom"
// import { UserContext } from '../App'

// const Header = () => {
//     const { state, dispatch } = useContext(UserContext);
//     const history = useHistory();
    
//     // Custom style for the Container
//     const containerStyle = {
//         maxWidth: 'none', // To ensure the Container is full width
//         padding: 0, // Removes padding from the Container
//     };

//     return (
//         <header>
//             <Navbar bg="primary" variant='dark' expand="lg">
//                 <Container style={containerStyle}>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Brand href="/">Grand Home Investments</Navbar.Brand>
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <Nav className="ml-left">
//                             <LinkContainer to='/projects'>
//                                 <Nav.Link>All Projects</Nav.Link>
//                             </LinkContainer>
//                             <LinkContainer to='/#'>
//                                 <Nav.Link>About Us</Nav.Link>
//                             </LinkContainer>
//                             <LinkContainer to='/#'>
//                                 <Nav.Link>Contact Us</Nav.Link>
//                             </LinkContainer>
//                             {
//                                 state && (
//                                     <Button variant='primary'
//                                         onClick={
//                                             () => {
//                                                 localStorage.clear()
//                                                 dispatch({ type: "CLEAR" })
//                                                 history.push("/login")
//                                             }
//                                         }
//                                     >
//                                         Logout
//                                     </Button>
//                                 )
//                             }
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </header>
//     )
// }

// export default Header;

import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useHistory } from "react-router-dom";
import { UserContext } from '../App';
import ghiIcon from '../images/ghi_icon.png';

const Header = () => {
    const { state, dispatch } = useContext(UserContext);
    const history = useHistory();

    const scrollToFooter = () => {
        const footer = document.getElementById('footer'); // Assuming your footer has an id of 'footer'
        footer.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header>
            <Navbar bg="primary" variant='dark' expand="lg">
                <Container style={{ maxWidth: 'none', padding: 0 }}>
                    {/* <Navbar.Brand style={{ margin: '0rem 3.3rem', fontWeight: 'bold' }} href="/">GRAND HOME INVESTMENTS</Navbar.Brand> */}
                    <Navbar.Brand href="/" style={{ margin: '0rem 4rem'}}>
                        <img style={{ width: '75px', height: '70px' }} src={ghiIcon} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav style={{ margin: '0rem 8rem' }} className="ml-auto"> {/* ml-auto to push the Nav to the right */}
                            <LinkContainer style={{ fontSize: '27px', fontFamily: 'math' }} to='/projects'>
                                <Nav.Link style={{ cursor: 'pointer' }}>Project Gallery</Nav.Link>
                                {/* <Nav.Link style={{ cursor: 'pointer' }}>PROJECT GALLERY</Nav.Link> */}
                            </LinkContainer>
                            {/* <LinkContainer to=''> */}
                                <Nav.Link style={{ fontFamily: 'math', fontSize: '27px', marginLeft: '1rem', cursor: 'pointer' }} onClick={scrollToFooter}>Contact Us</Nav.Link>
                                {/* <Nav.Link style={{ fontSize: '27px', marginLeft: '1rem', cursor: 'pointer' }} onClick={scrollToFooter}>CONTACT US</Nav.Link> */}
                            {/* </LinkContainer> */}
                            {state && (
                                <Button variant='primary' onClick={() => {
                                    localStorage.clear();
                                    dispatch({ type: "CLEAR" });
                                    history.push("/login");
                                }}>
                                    Logout
                                </Button>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;