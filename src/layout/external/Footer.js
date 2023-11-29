import React from 'react'
import styled from 'styled-components';

function Footer() {
  return (
    <Container >
        <div className='container py-5'>
        Footer
        </div>
    </Container>
  )
}
const Container = styled.div`
  background-image: linear-gradient(to right, #00008b, #000000) !important;
  color: white;
`
export default Footer