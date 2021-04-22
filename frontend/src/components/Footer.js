import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
                <Row className='text-center'>
                    <Container className='primary'>
                        <h5>Contact Info</h5>
                        <p><strong>Email: </strong>grandhomeinvestments@gmail.com</p>
                        <p><strong>Phone: </strong>(732) 233-4744</p>
                        <Col>Copyright &copy; Grand Home Investments</Col>
                    </Container>
                </Row> 
        </footer>
    )
}


export default Footer