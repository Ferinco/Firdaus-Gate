import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { fetchSubjects } from '../../redux/slices/subjects';
import { useDispatch } from 'react-redux';
import { SubjectService } from '../../services/subjectService';
export default function AssignmentSettings() {
  const { identity } = useParams();
    
  return (
    <div>the page where the assignment will be issued according to the subject id</div>
  )
}

