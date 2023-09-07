import React from 'react'
import { styled } from 'styled-components'
export default function AdminDashboard() {
  return (
    <Wrapper className='p-5'>
          <div className='d-flex flex-column left'>
          <h4>Good Afternoon, Mr Lawal</h4>
            <p>welcome to your dashboard</p>
          </div>

        <div className='middle-div'>
          <div className='tabs p-3 py-5'>
          <div className='circle-div'>
            </div>
            <div className='circle-div'>
            </div>
            <div className='circle-div'>
            </div>
            <div className='circle-div'>
            </div>
          </div>
        </div>
        </Wrapper>
  )
}
const Wrapper = styled.div`
.middle-div{
   .tabs{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap:10px;
    width: fit-content;
    background: white;
    border-radius: 30px;
    .circle-div{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        &:first-child{
            background: red;
        }
        &:nth-child(2){
            background: blue;
        }
        &:nth-child(3){
            background: purple;
        }
        &:last-child{
            background: black;
        }
    }
   }
}
`