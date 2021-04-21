import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProjectLayout = ({ project }) => {
    return (
            <div>
                <Card className='my-3 py-2 px-2' style={{ width: '18rem' }}>
                        <Link onClick={() => window.open(`${project.link}`)}>
                            <Card.Img variant="top" src={project.img} />
                        </Link>
                    <Card.Body>
                    <Link onClick={() => window.open(`${project.link}`)}>
                        <Card.Title style={{ color: 'black' }} >{project.address}</Card.Title>
                    </Link>
                    <Card.Text className='text-md-left'>{project.status.toUpperCase()}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
    )
}

export default ProjectLayout
