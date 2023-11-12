import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "../../components/custom";
import { useEffect, useState } from "react";
import { fetchUser } from "../../redux/slices/users";
import styled from "styled-components";
export const StudentInfo = ()=>{
    const { identity } = useParams();
    const dispatch = useDispatch()

    const { user, isLoading } = useSelector((state) => state.users || {});
    // const state = useSelector(state=> state)
    console.log(user)
    useEffect(() => {
        dispatch(fetchUser({ id: identity}));
      }, [identity, dispatch]);
    return(
<div>
{isLoading && user === null && <CircularProgress /> }
    <StudentWrapper className="div d-flex flex-column py-5 w-50">
    <h4>STUDENT INFO</h4>
<div className=" d-flex flex-column mt-4">

        <div className="info d-flex justify-content-between">
           <p className="text-capitalize">first name:</p>  <h6 className="text-capitalize w-50">{user?.firstName}</h6></div>
        <div className="info d-flex justify-content-between"><p className="text-capitalize w-50">middle name:</p> <h6 className="text-capitalize w-50">{user?.middleName}</h6></div>
        <div className="info d-flex justify-content-between"><p className="text-capitalize w-50">last name:</p> <h6 className="text-capitalize w-50">{user?.lastName}</h6></div>
        <div className="info d-flex justify-content-between"><p className="text-capitalize w-50">admission number:</p> <h6 className="text-capitalize w-50">{user?.admissionNumber}</h6></div>
        <div className="info d-flex justify-content-between"><p className="text-capitalize w-50">current class:</p> <h6 className="text-capitalize w-50">{user?.currentClass}</h6></div>
        <div className="info d-flex justify-content-between"><p className="text-capitalize w-50">gender:</p> <h6 className="text-capitalize w-50">{user?.gender}</h6></div>
        <div className="info d-flex justify-content-between"><p className="text-capitalize w-50">department :</p> <h6 className="text-capitalize w-50">{user?.department}</h6></div>
        <div className="info d-flex justify-content-between"><p className="text-capitalize w-50">email :</p> <h6 className="w-50">{user?.email}</h6></div>
        <div className="info d-flex justify-content-between"><p className="text-capitalize w-50">parent phone :</p> <h6 className="text-capitalize w-50">{user?.parentPhone}</h6></div>


</div>
    </StudentWrapper>


</div>
    )
}
export const TeacherInfo = ()=>{
    const { identity } = useParams();
    const [currentTeacher, setCurrentTeacher] = useState("")

    const dispatch = useDispatch()
    const { user, isLoading } = useSelector((state) => state.users || {} );
    useEffect(() => {
        dispatch(fetchUser({ id: identity}));
        setCurrentTeacher(user)
      }, [identity, dispatch]);
    return(
<div>
{isLoading && user === null && <CircularProgress /> }
    <TeacherWrapper className="div d-flex flex-column py-5 w-50">
    <h4>TEACHER INFO</h4>

<div className=" d-flex flex-column mt-4">
        <div className="info d-flex align-items-center ">
           <p className="text-capitalize w-50">first name:</p>  <h6 className="text-capitalize w-50">{user?.firstName}</h6></div>
        <div className="info d-flex align-items-center"><p className="text-capitalize w-50">middle name:</p> <h6 className="text-capitalize w-50">{user?.middleName}</h6></div>
        <div className="info d-flex align-items-center"><p className="text-capitalize w-50">last name:</p> <h6 className="text-capitalize w-50">{user?.lastName}</h6></div>
        <div className="info d-flex align-items-center"><p className="text-capitalize w-50">teacher id:</p> <h6 className="text-capitalize w-50">{user?.teacherId}</h6></div>
        <div className="info d-flex align-items-center"><p className="text-capitalize w-50">class handled:</p> <h6 className="text-capitalize w-50">{user?.classHandled}</h6></div>
        <div className="info d-flex align-items-center"><p className="text-capitalize w-50">gender:</p> <h6 className="text-capitalize w-50">{user?.gender}</h6></div>
        <div className="info d-flex align-items-center"><p className="text-capitalize w-50">subject(s) taught :</p> <h6 className="text-capitalize w-50">{user?.subjectTaught}</h6></div>
        <div className="info d-flex align-items-center"><p className="text-capitalize w-50">email :</p> <h6 className="">{user?.email}</h6></div>
        <div className="info d-flex align-items-center"><p className="text-capitalize w-50"> phone :</p> <h6 className="text-capitalize w-50">{user?.tel}</h6></div>


</div>
    </TeacherWrapper>

</div>
    )
}

const StudentWrapper = styled.div`
    padding-right: 32px !important;
  padding-left: 32px !important;
  @media (max-width: 1100px){
    padding-right: 24px !important;
  padding-left: 24px !important;
  }
@media screen and (max-width:820px){
    width:75% !important;
  
}
@media screen and (max-width:570px){
    width:100% !important;
  
}
`

const TeacherWrapper = styled.div`
    padding-right: 32px !important;
  padding-left: 32px !important;
  @media (max-width: 1100px){
    padding-right: 24px !important;
  padding-left: 24px !important;
  }
@media screen and (max-width:820px){
    width:75% !important;
  
}
@media screen and (max-width:570px){
    width:100% !important;
  
}
`