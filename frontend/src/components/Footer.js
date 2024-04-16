import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer id='footer'>
                <Row className='text-center'>
                    <Container className='primary'>
                        <h5>Contact Info</h5>
                        <p><strong>Email: </strong>grandhomeinvestments@gmail.com</p>
                        <p style={{ fontSize: '24px' }}><strong>Phone: </strong>(732) 233-4744</p>
                        <p><strong>Privacy Policy: </strong>No mobile information will be shared with third parties/affiliates for
marketing/promotional purposes. All other categories exclude text messaging originator
opt-in data and consent; this information will not be shared with any third parties</p>
                        <Col>Copyright &copy; Grand Home Investments</Col>
                    </Container>
                </Row> 
        </footer>
    )
}


export default Footer;