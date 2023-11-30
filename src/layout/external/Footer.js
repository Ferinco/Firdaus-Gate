import React from 'react'
import styled from 'styled-components';

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
        <p>About Us</p>
        <p>Mission and Vision</p>
        <p>Gallery</p>
        <p>News</p>


       </div>
       <div className='d-flex flex-column'>
        <h6>Admission</h6>
        <p>Admssion Us</p>
        <p>Mission and Vision</p>
        <p>Gallery</p>
        <p>News</p>


       </div>
       <div className='d-flex flex-column'>
        <h6>Portal</h6>
        <p>School Us</p>
        <p>Mission and Vision</p>
        <p>Gallery</p>
        <p>News</p>


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