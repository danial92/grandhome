import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Message from '../components/Message'
import ProjectLayout from '../components/ProjectLayout'
import Loader from '../components/Loader'

const ProjectsScreen = () => {

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    console.log(projects)

    useEffect(() => {
        fetch("/allprojects", {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            setProjects(data.projects)
            setLoading(false)
        })
        .catch(err => {
            setLoading(false)
        });
    }, [])


    return (
        <div style={{ height: '70%' }}>
            <h2 className='text-center'>Project Gallery</h2>
            {   
                loading ? <Loader />
                :
                <Row>
                    {!projects ? <Message variant='primary'>No Projects Yet...</Message>
                    :
                    projects.slice().reverse().map(project => (
                        <Col key={project._id} sm={12} md={6} lg={4} xl={3}> 
                                <ProjectLayout project={project} />
                        </Col>
                    ))}
                </Row>
            }
        </div>
    )
}


export default ProjectsScreen