import React, {useEffect, useState} from 'react'
import styled from "styled-components"
import { SubjectService } from '../../services/subjectService'
import { useAuth } from '../../hooks/useAuth';
export default function Subjects() {
  const {user} = useAuth()
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const userId = user._id; 
    fetchSubjects(userId);
  }, []);

  const fetchSubjects = async (userId) => {
    try {
      const subjectsData = await SubjectService.getSubjects(userId);
      setSubjects(subjectsData); 
      console.log(subjects)
    } catch (error) {
      console.error( error);
    }
  };

  return (
    <Container className="container py-5">
<div className="header">
  <h3>SUBJECTS OFFERED</h3>
</div>
<div className="divs d-flex flex-row flex-wrap gap-5 mt-5">
  <div className="subject-div d-flex flex-row align-items-center ">
    <div className="initial h-100"></div>
    <div className=" pl-3">
      <h6 className='m-0'>Subject Name</h6>
    </div>
  </div>
  <div className="subject-div d-flex flex-row align-items-center ">
    <div className="initial h-100"></div>
    <div className=" pl-3">
      <h6 className='m-0'>Subject Name</h6>
    </div>
  </div>
  <div className="subject-div d-flex flex-row align-items-center ">
    <div className="initial h-100"></div>
    <div className=" pl-3">
      <h6 className='m-0'>Subject Name</h6>
    </div>
  </div>
  <div className="subject-div d-flex flex-row align-items-center ">
    <div className="initial h-100"></div>
    <div className=" pl-3">
      <h6 className='m-0'>Subject Name</h6>
    </div>
  </div>
  <div className="subject-div d-flex flex-row align-items-center ">
    <div className="initial h-100"></div>
    <div className=" pl-3">
      <h6 className='m-0'>Subject Name</h6>
    </div>
  </div>
  <div className="subject-div d-flex flex-row align-items-center ">
    <div className="initial h-100"></div>
    <div className=" pl-3">
      <h6 className='m-0'>Subject Name</h6>
    </div>
  </div>
  <div className="subject-div d-flex flex-row align-items-center ">
    <div className="initial h-100"></div>
    <div className=" pl-3">
      <h6 className='m-0'>Subject Name</h6>
    </div>
  </div>
  <div className="subject-div d-flex flex-row align-items-center ">
    <div className="initial h-100"></div>
    <div className=" pl-3">
      <h6 className='m-0'>Subject Name</h6>
    </div>
  </div>
  <div className="subject-div d-flex flex-row align-items-center ">
    <div className="initial h-100"></div>
    <div className=" pl-3">
      <h6 className='m-0'>Subject Name</h6>
    </div>
  </div>
</div>
    </Container>
  )
}
const Container = styled.div`
.subject-div{
  height:70px;
  width:300px;
background: white;
  .initial{
    width:90px;
    background-color:black;
  }
}
`
