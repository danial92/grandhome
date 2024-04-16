import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ProjectLayout from './ProjectLayout'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './HomeProjects.css';

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
            <h1 style={{ textAlign: 'center' }}>Projects Completed</h1>
            <Row>
                    {/* {completedProjects.slice(-4).reverse().map(project => (
                        <Col key={project._id} sm={12} md={6} lg={4} xl={3}> 
                                <ProjectLayout project={project} />
                        </Col>
                    ))} */}
                    {completedProjects.slice(-4)
                        .sort((a, b) => b.order - a.order) // Sorts in descending order
                        .reverse().map(project => (
                            <Col key={project._id} sm={12} md={6} lg={4} xl={3}>
                                <ProjectLayout project={project} />
                            </Col>
                    ))}
                    {/* <div className='see-more'><Link to="/completedprojects">See More...</Link></div> */}
                    <Col sm={12} className="text-center"> 
                        <div className='see-more'>
                        <h2><Link to="/completedprojects">See More...</Link></h2>
                        </div>
                    </Col>
                    {/*     <Col sm={12} className="text-center"> 
                            <div className='see-more'>
                                <Link to="/completedprojects">
                                    <div className="see-more-icon"></div>
                                </Link>
                            </div>
                        </Col> */}
            </Row>
            <h1 style={{ textAlign: 'center' }}>Projects Under Renovation</h1>
            <Row>
                    {/* {renovatingProjects.slice(-4).reverse().map(project => (
                        <Col key={project._id} sm={12} md={6} lg={4} xl={3}> 
                                <ProjectLayout project={project} />
                        </Col>
                    ))} */}
                    {renovatingProjects.slice(-4)
                        .sort((a, b) => b.order - a.order) // Sorts in descending order
                        .reverse().map(project => (
                            <Col key={project._id} sm={12} md={6} lg={4} xl={3}>
                                <ProjectLayout project={project} />
                            </Col>
                    ))}
                    <Col sm={12} className="text-center"> 
                        <div className='see-more'>
                            <h2><Link to="/renovationprojects">See More...</Link></h2>
                        </div>
                    </Col>
                    {/* <Col sm={12} className="text-center"> 
                        <div className='see-more'>
                            <Link to="/renovationprojects">
                                <div className="see-more-icon"></div>
                            </Link>
                        </div>
                    </Col> */}
            </Row>
            <h1 style={{ textAlign: 'center' }}>Upcoming Projects</h1>
            <Row>
                    {/* {upcomingProjects.slice(-4).reverse().map(project => (
                        <Col key={project._id} sm={12} md={6} lg={4} xl={3}> 
                                <ProjectLayout project={project} />
                        </Col>
                    ))} */}
                    {upcomingProjects.slice(-4)
                        .sort((a, b) => b.order - a.order) // Sorts in descending order
                        .reverse().map(project => (
                            <Col key={project._id} sm={12} md={6} lg={4} xl={3}>
                                <ProjectLayout project={project} />
                            </Col>
                    ))}
                    <Col sm={12} className="text-center"> 
                        <div className='see-more'>
                        <h2><Link to="/upcomingprojects">See More...</Link></h2>
                        </div>
                    </Col>
                    {/* <Col sm={12} className="text-center"> 
                        <div className='see-more'>
                            <Link to="/upcomingprojects">
                                <div className="see-more-icon"></div>
                            </Link>
                        </div>
                    </Col> */}
            </Row>
        </div>
    )
}

export default HomeProjects