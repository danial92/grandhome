// import React from 'react';
// import './Header.css';

// function Header() {
//   return (
//     <header className="header">
//       <h1>ABOUT GRAND HOME INVESTMENTS</h1>
//       <p>
//         Grand Home Investments has been building quality homes in NJ and has 
//         completed over 100 projects in NJ and PA. They have built an incomparable 
//         reputation in the area over the years through referrals and impeccable 
//         reviews by building and delivering only the highest quality of homes.
//       </p>
//       <p>
//         We're creating homes that are built to last, which means that your new 
//         home is efficient and sustainable, and it uses trusted brands for building 
//         materials and appliances. We offer designs that help a house become a home. 
//         Our experienced Design Consultants will curate a personalized array of home 
//         design options just for you. We build high quality homes starting from design 
//         all the way through the entire building process.
//       </p>
//       <h2>RECENTLY COMPLETED HOMES</h2>
//       <ul>
//         <li>3770 Park Ave Edison</li>
//         <li>182 Finderne Ave Bridgewater</li>
//         <li>51 Dalton Pl Edison</li>
//       </ul>
//     </header>
//   );
// }

// export default Header;

import React, { useEffect, useState } from 'react';
import './Banner.css'; // Make sure to create this CSS file
import bannerImg from '../images/banner_img.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Banner() {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    console.log(projects)

    useEffect(() => {
        fetch("/topprojects", {
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
    <div className='banner-head'>
    <div className="banner">
      <div className="banner-content">
        <h1>GRAND HOME INVESTMENTS</h1>
        <p>
          Grand Home Investments has been building quality homes in NJ and has completed over 100 projects in NJ and PA. 
          We have built an incomparable reputation in the area over the years through referrals and impeccable reviews by 
          building and delivering only the highest quality of homes.
        </p>
        {/* <br /> */}
        <p>We are creating homes that are built to last, which means that your new home is efficient and sustainable, 
          and it uses trusted brands for building materials and appliances. We offer designs that help a house become a home. 
          Our experienced Design Consultants will curate a personalized array of home design options just for you. 
          We build high quality homes starting from design all the way through the entire building process.</p>
          <p>
            Halal and Safe Real Estate Investments: Your trusted partner for halal and Sharia-compliant investment options in the USA. Firstly, we understand the importance of investing in a way that aligns with our faith and values.
            You can discover a unique opportunity to invest in real estate while adhering to halal principles. Contact us for more details.
          </p>
          <p>
          We offer a safe investment environment keeping Islamic values in mind. 
          The localities in which the houses are invested are well-known areas of central New Jersey where demand is usually quite high. 
          You also become partners in the LLC that you invest in to assure complete transparency.
          </p>
      </div>
      <div className="completed-homes">
        <h2>RECENTLY COMPLETED HOMES</h2>
        <ul>
            {
                projects ? projects.map(project => (
                    <Link onClick={() => window.open(`${project.link}`)}>
                        <li>
                            <img src={project.img} alt=""/>
                            <span>{project.address}</span>
                        </li>
                    </Link>
                )) : null
            }
        </ul>
      </div>
    </div>
    <div style={{ marginLeft: '-120px' }} className='banner-logo'>
        <img src={bannerImg} alt=""  />
    </div>
    </div>
  );
}

export default Banner;