import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <Container >
        <div className='container py-5 d-flex flex-row gap-5 flex-wrap'>
       <div className='brief'>
        <h6>Firdaus Gate Model Schools</h6>
        <p>
            dueiorbvuit guier0togo giutyiurgto riutgerpoqg upuiipqr t uipqrgtu 
        </p>
       </div>
       <div className='d-flex flex-column'>
        <h6>Links</h6>
        <Link className="react-router-link">About Us</Link>
        <Link className="react-router-link">Our Mission</Link>
        <Link className="react-router-link">Our Vision</Link>
        <Link className="react-router-link">Gallery</Link>
        <Link className="react-router-link">News</Link>
       </div>
       <div className='d-flex flex-column'>
        <h6>Admission</h6>
        <Link className="react-router-link">Admission Into JSS1</Link>
        <Link className="react-router-link">Admssion Portal</Link>
        <Link className="react-router-link">Continue Admission</Link>
        <Link className="react-router-link">Admission Letter</Link>
       </div>
       <div className='d-flex flex-column'>
        <h6>Portal</h6>
        <Link className="react-router-link">Student</Link>
        <Link className="react-router-link">Teacher</Link>
        <Link className="react-router-link">School Fees</Link>
       </div>
        </div>
    </Container>
  )
}
const Container = styled.div`
background:black;  
color: white;
  .brief{
    max-width: 400px;
  }
`
export default Footer