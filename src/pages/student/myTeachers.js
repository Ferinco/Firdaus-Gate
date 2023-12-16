import React from 'react'
import styled from "styled-components"
export default function MyTeachers() {
  return (
    <Container className="container py-5">
      <div className='big-div col-md-8 d-flex flex-row align-items-center gap-3 flex-wrap p-3'>
<div className='circle-div'>

</div>
<div className='texts d-flex flex-column gap-3'>
<h4 className="m-0">Name of class teacher</h4>
<p className="m-0">email of class teacher</p>
<p className="m-0">phone number of class teacher</p>
</div>
      </div>
      <div className="mt-5">
        <div className="header">
        <h3>SUBJECT TEACHERS</h3>
        </div>
        <div className='divs d-flex flex-row flex-wrap gap-5 mt-5'>
        <div className='small-div d-flex flex-row align-items-center gap-3'>
          <div className='circle-div'></div>
          <div className="texts d-flex flex-column gap-1">
            <h6 className='m-0'>Name of teacgher</h6>
            <h5 className='m-0'>subject taught</h5>
            <p className='m-0'>email address</p>
          </div>
      </div>
      <div className='small-div d-flex flex-row align-items-center gap-3'>
          <div className='circle-div'></div>
          <div className="texts d-flex flex-column gap-1">
            <h6 className='m-0'>Name of teacgher</h6>
            <h5 className='m-0'>subject taught</h5>
            <p className='m-0'>email address</p>
          </div>
      </div>
      <div className='small-div d-flex flex-row align-items-center gap-3'>
          <div className='circle-div'></div>
          <div className="texts d-flex flex-column gap-1">
            <h6 className='m-0'>Name of teacgher</h6>
            <h5 className='m-0'>subject taught</h5>
            <p className='m-0'>email address</p>
          </div>
      </div>
      <div className='small-div d-flex flex-row align-items-center gap-3'>
          <div className='circle-div'></div>
          <div className="texts d-flex flex-column gap-1">
            <h6 className='m-0'>Name of teacgher</h6>
            <h5 className='m-0'>subject taught</h5>
            <p className='m-0'>email address</p>
          </div>
      </div>
      <div className='small-div d-flex flex-row align-items-center gap-3'>
          <div className='circle-div'></div>
          <div className="texts d-flex flex-column gap-1">
            <h6 className='m-0'>Name of teacgher</h6>
            <h5 className='m-0'>subject taught</h5>
            <p className='m-0'>email address</p>
          </div>
      </div>
      </div>
        </div>

    </Container>
  )
}
const Container = styled.div`
.big-div{
  height:auto;
  border:1px solid red;
  border-radius: 20px;
  .circle-div{
    width:170px;
    height:170px;
    border-radius: 50%;
    background-color: purple;
  }
  @media screen and (max-width: 600px){
width:100% !important;
  }
}
.small-div{
  background-color:white;
width: 320px;
border-top-right-radius:10px;
    border-bottom-right-radius:10px;
  .circle-div{
    width:100px;
    height:100px;
    background-color: purple;
    border-radius: 50%;
  }
  .texts{
    background-color: white;

  }
}
`
