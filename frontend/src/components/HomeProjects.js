import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ProjectLayout from './ProjectLayout'

const HomeProjects = () => {
    const [completedProjects, setCompletedProjects] = useState([])
    const [renovatingProjects, setRenovatingProjects] = useState([])
    const [upcomingProjects, setUpcomingProjects] = useState([])
    console.log(completedProjects)

    useEffect( () => {
        async function fetchProjects() {
            try {
                const { data } = await axios.get("/homeprojects")
                setCompletedProjects(data.compProjects);
                setRenovatingProjects(data.renoProjects);
                setUpcomingProjects(data.upcomProjects);
            } catch (e) {
                console.log(e)
            }
        }
        fetchProjects()
    }, []);


    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Our Projects On Sale</h1>
            <Row>
                    {completedProjects.slice(-8).reverse().map(project => (
                        <Col key={project._id} sm={12} md={6} lg={4} xl={3}> 
                                <ProjectLayout project={project} />
                        </Col>
                    ))}
            </Row>
            <h1 style={{ textAlign: 'center' }}>Our Projects Under Renovation</h1>
            <Row>
                    {renovatingProjects.slice(-8).reverse().map(project => (
                        <Col key={project._id} sm={12} md={6} lg={4} xl={3}> 
                                <ProjectLayout project={project} />
                        </Col>
                    ))}
            </Row>
            <h1 style={{ textAlign: 'center' }}>Our Upcoming Projects</h1>
            <Row>
                    {upcomingProjects.slice(-8).reverse().map(project => (
                        <Col key={project._id} sm={12} md={6} lg={4} xl={3}> 
                                <ProjectLayout project={project} />
                        </Col>
                    ))}
            </Row>
        </div>
    )
}

export default HomeProjects
