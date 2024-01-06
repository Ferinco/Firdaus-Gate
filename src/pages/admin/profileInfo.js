import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "../../components/custom";
import { useEffect, useState } from "react";
import { fetchUser } from "../../redux/slices/users";
import styled from "styled-components";
import { UserService } from "../../services/userService";

export const StudentInfo = () => {

    const [isLoading, setIsLoading] = useState(true);

    
  const { identity } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users || {});
  // const state = useSelector(state=> state)
  console.log(user);
  useEffect(() => {
    dispatch(fetchUser({ id: identity }));
    setIsLoading(false)
  }, [identity, dispatch]);

//to deactiveate users
const deactivateUser = async (studentId, currentStatus)=>{
    try {
        setIsLoading(true);
        const formData = new FormData();
        const newStatus = currentStatus === "active" ? "inactive" : "active";
        formData.append("values", JSON.stringify({ status: newStatus }));
        await UserService.updateUser(studentId, formData);
        dispatch(fetchUser({ id: identity }));
        setIsLoading(false);

      }
      catch (error) {
        console.log(error);
      }
}



  return (
    <div>
      {isLoading && user === null && <CircularProgress />}
      {isLoading ? <CircularProgress/> : ""}
      <StudentWrapper className="div d-flex flex-column pt-0 pb-5 px-0">
        <div className="back-div w-100 p-0"></div>
        <div className="body container">
          <div className="headers d-flex flex-row justify-content-between align-items-center">
            <div className="profile d-flex flex-column">
              <div className="profile-image "></div>
              <h6 className="text-capitalize ">
                {user?.firstName} {user?.middleName} {user?.lastName}
              </h6>
            </div>
            <div className="buttons d-flex flex-row gap-2">
              <button className="transfer-btn">Transfer</button>
              <button
                className={
                  user?.status === "active" ? "deactivate-btn" : "activate-btn"
                }
                onClick={() => {
                  deactivateUser(user._id, user?.status);
                }}
              >
                {user?.status === "active" ? "Deactivate" : "Activate"}
              </button>
            </div>
          </div>
          <div className="content">
            <div className=" d-flex flex-column mt-4">
              <div className="info d-flex justify-content-between">
                <p className="text-capitalize">first name:</p>{" "}
                <h6 className="text-capitalize w-50">{user?.firstName}</h6>
              </div>
              <div className="info d-flex justify-content-between">
                <p className="text-capitalize w-50">middle name:</p>{" "}
                <h6 className="text-capitalize w-50">{user?.middleName}</h6>
              </div>
              <div className="info d-flex justify-content-between">
                <p className="text-capitalize w-50">last name:</p>{" "}
                <h6 className="text-capitalize w-50">{user?.lastName}</h6>
              </div>
              <div className="info d-flex justify-content-between">
                <p className="text-capitalize w-50">admission number:</p>{" "}
                <h6 className="text-capitalize w-50">
                  {user?.admissionNumber}
                </h6>
              </div>
              <div className="info d-flex justify-content-between">
                <p className="text-capitalize w-50">current class:</p>{" "}
                <h6 className="text-capitalize w-50">{user?.currentClass}</h6>
              </div>
              <div className="info d-flex justify-content-between">
                <p className="text-capitalize w-50">gender:</p>{" "}
                <h6 className="text-capitalize w-50">{user?.gender}</h6>
              </div>
              <div className="info d-flex justify-content-between">
                <p className="text-capitalize w-50">department :</p>{" "}
                <h6 className="text-capitalize w-50">{user?.department}</h6>
              </div>
              <div className="info d-flex justify-content-between">
                <p className="text-capitalize w-50">email :</p>{" "}
                <h6 className="w-50">
                  {" "}
                  {user?.email.length > 15
                    ? `${user?.email.slice(0, 15)}...`
                    : user?.email}
                </h6>
              </div>
              <div className="info d-flex justify-content-between">
                <p className="text-capitalize w-50">parent phone :</p>{" "}
                <h6 className="text-capitalize w-50">{user?.parentPhone}</h6>
              </div>
            </div>
          </div>
        </div>

        {/* <h4>STUDENT INFO</h4> */}
      </StudentWrapper>
    </div>
  );
};
export const TeacherInfo = () => {
  const { identity } = useParams();
  const [currentTeacher, setCurrentTeacher] = useState("");

  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.users || {});
  const [teacherClass, setTeacherClass] = useState("")
  
  useEffect(() => {
    dispatch(fetchUser({ id: identity }));
    setCurrentTeacher(user);
  }, [identity, dispatch]);
  return (
    <div>
      {isLoading && user === null && <CircularProgress />}
      <TeacherWrapper className="div d-flex flex-column pt-0 pb-5 px-0">
        <div className="back-div w-100 p-0"></div>
        <div className="body container">
          <div className="headers d-flex flex-row justify-content-between align-items-center">
            <div className="profile d-flex flex-column">
              <div className="profile-image "></div>
              <h6 className="text-capitalize ">
                {user?.firstName} {user?.middleName} {user?.lastName}
              </h6>
            </div>
            <div className="buttons d-flex flex-row gap-2">
              <button className="deactivate-btn">Delete</button>
            </div>
          </div>
          <div className="content">
            <div className=" d-flex flex-column mt-4">
              <div className="info d-flex align-items-center ">
                <p className="text-uppercase w-50">Role:</p>{" "}
                <h6 className="text-uppercase w-50">{user?.role}</h6>
              </div>
              <div className="info d-flex align-items-center ">
                <p className="text-capitalize w-50">First name:</p>{" "}
                <h6 className="text-capitalize w-50">{user?.firstName}</h6>
              </div>
              <div className="info d-flex align-items-center">
                <p className="text-capitalize w-50">Middle name:</p>{" "}
                <h6 className="text-capitalize w-50">{user?.middleName}</h6>
              </div>
              <div className="info d-flex align-items-center">
                <p className="text-capitalize w-50">Last name:</p>{" "}
                <h6 className="text-capitalize w-50">{user?.lastName}</h6>
              </div>
              <div className="info d-flex align-items-center">
                <p className="text-capitalize w-50">Teacher id:</p>{" "}
                <h6 className="text-capitalize w-50">{user?.teacherId}</h6>
              </div>
              <div className="info d-flex align-items-center">
                <p className="text-capitalize w-50">Class handled:</p>{" "}
                <h6 className="text-capitalize w-50">{user?.classHandled}</h6>
              </div>
              <div className="info d-flex align-items-center">
                <p className="text-capitalize w-50">Gender:</p>{" "}
                <h6 className="text-capitalize w-50">{user?.gender}</h6>
              </div>
              <div className="info d-flex align-items-center">
                <p className="w-50">Subject(s) taught :</p>{" "}
                <h6 className="text-capitalize w-50">{user?.subjectTaught}</h6>
              </div>
              <div className="info d-flex align-items-center">
                <p className="text-capitalize w-50">Email :</p>{" "}
                <h6 className="">
                  {" "}
                  {user?.email.length > 15
                    ? `${user?.email.slice(0, 15)}...`
                    : user?.email}
                </h6>
              </div>
              <div className="info d-flex align-items-center">
                <p className="text-capitalize w-50"> Phone :</p>{" "}
                <h6 className="text-capitalize w-50">{user?.tel}</h6>
              </div>
            </div>
          </div>
        </div>
      </TeacherWrapper>
    </div>
  );
};

const StudentWrapper = styled.div`
  .back-div {
    height: 200px;
    z-index: 9;
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.1)
      ),
      url("https://res.cloudinary.com/duvwweuhj/image/upload/v1700698715/Firdaus/IMG-20230901-WA0004_1_pc92lu.jpg") !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
  }
  .profile-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: red;
    z-index: 999 !important;
    margin-top: -20px;
    border: 5px solid white;
  }
  .headers {
    .transfer-btn {
      border-radius: 10px;
      border: 1px solid blue;
      color: blue;
      &:hover {
        border: 1px solid blue;
        color: white;
        background-color: blue;
      }
    }
    .deactivate-btn {
      border-radius: 10px;
      border: 1px solid black;
      color: black;
      &:hover {
        border: 1px solid black;
        color: white;
        background-color: black;
      }
    }
    .activate-btn {
      border-radius: 10px;
      border: 1px solid green;
      color: green;
      &:hover {
        border: 1px solid green;
        color: white;
        background-color: green;
      }
    }
    button {
      height: fit-content;
      padding: 3px 10px;
      font-size: 13px;
    }
  }
  .content {
  }
  @media (max-width: 1100px) {
  }
  @media screen and (max-width: 570px) {
    width: 100% !important;
  }
`;

const TeacherWrapper = styled.div`
  .back-div {
    height: 200px;
    z-index: 9;
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.1)
      ),
      url("https://res.cloudinary.com/duvwweuhj/image/upload/v1700698715/Firdaus/IMG-20230901-WA0004_1_pc92lu.jpg") !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
  }
  .profile-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: red;
    z-index: 999 !important;
    margin-top: -20px;
    border: 5px solid white;
  }
  .headers {
    .transfer-btn {
      border-radius: 10px;
      border: 1px solid blue;
      color: blue;
    }
    .deactivate-btn {
      border-radius: 10px;
      border: 1px solid black;
      color: black;
    }
    button {
      height: fit-content;
      padding: 3px 10px;
      font-size: 13px;
    }
  }

  @media screen and (max-width: 570px) {
    width: 100% !important;
  }
`;
