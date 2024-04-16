import React from 'react'
import gh_1 from '../images/gh_1.jpg';
import gh_2 from '../images/gh_2.jpg';
import gh_3 from '../images/gh_3.jpg';
import HomeProjects from '../components/HomeProjects'
import './styling.css';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div>
        {/* <ProjectsCarousel /> */}
        {/* <div className='head'>
            <Image src={head} alt="" />
        </div> */}
        <Banner />
        <div className="about">
            <div className="about_box about_01">
                <img src={gh_1} className="rounded-circle" alt="..." />
                <h2>Halal And Safe Investments</h2>
                <strong><p>
                    We offer a safe investment environment keeping the Islamic values in
                    mind. The localities in which the houses are invested in, are well
                    known areas of central NJ for ease of selling. Not only that, but you also
                    become partners in the LLC that you invested in to assure complete
                    transparency.
                </p></strong>
            </div>
            <div className="about_box about_02">
                <img src={gh_2} className="rounded-circle" alt="..." />
                <h2>A Proven Approach</h2>
                <strong><p>
                    An proven approach which is based on years of experience. 
                    We give timely updates, ease of transactions, profit
                    analysis, that are combined with roll over opportunities.
                    Transparency of estimates and expenses can be viewed by investors in real time. 
                    Your proceeds can easily be rolled over to upcoming
                    projects with more chances of success, inshaAllah.
                </p></strong>
            </div>
            <div className="about_box about_03">
                <img src={gh_3} className="rounded-circle" alt="..." />
                <h2>Why Us?</h2>
                <strong><p>
                    We take the lead in assuring you that the money that sits in your
                    bank ideally can be invested in profitable halal ventures. We make sure we
                    analyze the markets and make comparisons before finally choosing the
                    right property for you. We spend significant time in making sure
                    that every potential property is researched upon in detail before
                    making the final move. We are experienced enough to create different
                    investment scenarios so that each decision is made wisely. Our past
                    records makes us the right choice for you.
                </p></strong>
            </div>
        </div>
        <HomeProjects />
    </div>
    )
}

export default Home
