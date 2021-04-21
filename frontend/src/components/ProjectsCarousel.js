import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import Loader from './Loader'
import axios from 'axios'

const ProjectsCarousel = () => {
    const [topProjects, setTopProjects] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        async function fetchProjects() {
            try {
                const { data } = await axios.get("/homeprojects")
                setTopProjects(data.topProjects)
                console.log(data.topProjects)
                setLoading(false)
            } catch (e) {
                console.log(e)
                setLoading(false)
            }
        }
        fetchProjects()
    }, []);

    return (
        <Carousel pause='hover' className='bg-primary'>
        {loading ? (<Loader />) :
        topProjects.slice(-3).reverse().map(project => (
            <Carousel.Item key={project._id}>
                <Link onClick={() => window.open(`${project.link}`)}>
                    <Image style={{ display: 'block' }} src={project.img} alt={project.address} fluid />
                    <Carousel.Caption className='carousel_caption'>
                        <h2 style={{ display: 'block' }}>{project.address}</h2>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>
        ))}
        </Carousel>
    ) 
}

export default ProjectsCarousel