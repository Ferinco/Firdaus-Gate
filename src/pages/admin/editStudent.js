import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/slices/users";
import { Button, CircularProgress } from "../../components/custom";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Icon } from "@iconify/react";
import styled from "styled-components";



export default function EditStudent(){
const [activeNav, setActiveNav] = useState("Profile");
const [previewImage, setPreviewImage] = useState(null);
  const { identity } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useSelector((state) => state.users || {});
  useEffect(() => {
    dispatch(fetchUser({ id: identity }));
  }, [identity, dispatch]);

  const onSubmitProfile = async (data) => {
    console.log("data");
  };
  const onSubmitSecurity = async (data) => {
    console.log("data");
  };
  const phoneRegEx =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
//validations for edit form
  const schema = yup.object({
    firstName: yup.string().required("input first name"),
    lastName: yup.string().required("input last name"),
    oldPwd: yup.string().required("input old password").min(5, "old password is at least 5 characters").max(12, "old password is not more than 12 characters"),
    newPwd: yup.string().required("set a password").min(5, "new password must be at least 5 characters").max(12 , "new password must not be more than 12 characters"),
    signature: yup.mixed().required("signature is required").test('fileType', 'Unsupported file type', (value) => {
      if (value && value.type) {
        return value.type.includes('image');
      }
      return true;
    }),
    tel: yup
      .string()
      .matches(phoneRegEx, "phone number is invalid")
      .required("phone number is required")
      .min(10, "phone number is invalid")
      .max(11, "phone number is invalid"),
    confirmPwd: yup
      .string()
      .oneOf([yup.ref("newPwd"), null], "passwords must match")
      .required("confirm your password"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
        firstName: user.firstName,
        lastName: user.lastName,
      tel: user.role === "student" ? user.parentPhone : user.tel,
      oldPwd: "",
      confirmPwd: "",
      newPwd: "",
      signature: "",
      class:  user.role === "student"
      ? user.currentClass
      : user.classHandled,
      id: user.role === "student"
      ? user.admissionNumber
      : user.teacherId
    },
  });


  return (
    <>
      {isLoading && user === null && <CircularProgress />}
      <StudentForm className="py-5">
        <h4>EDIT STUDENT</h4>
        <div className="navigators d-flex flex-row gap-4 mt-4">
        <div
          onClick={() => {
            setActiveNav("Profile");
          }}
          className={activeNav === "Profile" ? "navigator active" : "navigator"}
        >
          <Icon icon="icomoon-free:profile" className="icon"/> Profile
        </div>
        <div
          onClick={() => {
            setActiveNav("Password");
          }}
          className={
            activeNav === "Password" ? "navigator active" : "navigator"
          }
        >
          <Icon icon="mdi:key" className="icon"/> Password
        </div>
      </div>
      {activeNav === "Profile" ? (
      <div className="div mt-5 p-3">
        <form
            className="profile-div"
            onSubmit={handleSubmit(onSubmitProfile)}
          >
            <div className="row">
              <div className="d-flex flex-column col-md-6">
                <label htmlFor="firstName" className="label">
                  First name
                </label>
                <input
                  name="firstName"
                  type="text"
                  {...register("firstName")}
        
                />
                <p className="error-message">
                {errors.firstName?.message ? `*${errors.firstName?.message}` : ""}
              </p>
              </div>
              <div className="d-flex flex-column col-md-6">
                <label htmlFor="lastName" className="label">
                  Last name
                </label>
                <input
                  name="lastName"
                  type="text"
                  {...register("lastName")}
                />
              </div>
            </div>
            <div className="row mt-4 mt-3">
              <div className="d-flex flex-column col-md-6 id">
                <label htmlFor="id" className="label">
                  {user.role === "student" ? "admission number" : "teaacher id"}
                </label>
                <input
                  name="id"
                  readOnly
                  {...register("id")}
                />
              </div>
              <div className="d-flex flex-column col-md-6">
                <label htmlFor="class" className="label">
                {user.role === "student"
                    ? "current class"
                    : "class handled"}
                </label>
                <input name="class" 
                  readOnly
                {...register("class")}/>
              </div>
            </div>

            <div className="row mt-4 mt-3">
              <div className="d-flex flex-column col-md-6 email">
                <label htmlFor="email" className="label">
                  Email address
                </label>
                <input readOnly value={user.email} name="email" />
              </div>
              <div className="d-flex flex-column col-md-6">
                <label htmlFor="tel" className="label">
                  {user.role === "student" ? "Parent phone" : "Phone number"}
                </label>
                <input name="tel" {...register("tel")} />
                <p className="error-message">
                  {errors.tel?.message ? `*${errors.tel?.message}` : ""}
                </p>
              </div>
            </div>

            <div className="button-div d-flex justify-content-end mt-4">
              <Button blue>Save Changes</Button>
            </div>
          </form>
          </div>

) : (
<div className="out mt-5 p-3">
  <form
    className="security-div d-flex flex-column gap-2"
    onSubmit={handleSubmit(onSubmitSecurity)}
  >
    <div className="d-flex flex-column">
      <label htmlFor="oldPwd" className="label">
        Old Password
      </label>
      <input name="oldPwd" {...register("oldPwd")}
      placeholder="Input old password"/>
      <p className="error-message">
          {errors.oldPwd?.message ? `*${errors.oldPwd?.message}` : ""}
        </p>
    </div>
    <div className="d-flex flex-column">
      <label htmlFor="newPwd" className="label">
      New Password
      </label>
      <input name="newPwd" {...register("newPwd")} 
      placeholder="New password"/>
      <p className="error-message">
          {errors.newPwd?.message ? `*${errors.newPwd?.message}` : ""}
        </p>
    </div>
    <div className="d-flex flex-column">
      <input name="confirmPwd" {...register("confirmPwd")} 
      placeholder="Confirm new password"/>
      <p className="error-message">
          {errors.confirmPwd?.message ? `*${errors.confirmPwd?.message}` : ""}
        </p>
    </div>
   
    <div className="button-div d-flex justify-content-end mt-4">
      <Button blue>Save Changes</Button>
    </div>
  </form>
</div>
)}
      </StudentForm>

  </>
  )
}
const StudentForm = styled.div`
  padding-right: 32px !important;
  padding-left: 32px !important;
  .div {
    background: white !important;
    border-radius: 20px;
max-width: 500px;
  }
  .profile-div {
    max-width: 600px;
  }
  .navigator {
    padding-bottom: 10px;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    color: grey;
    gap: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 2px solid transparent;
  }
  .out {
    max-width: 400px ;
    background-color: white !important;
    border-radius: 20px;
  }
  .active {
    border-bottom: 2px solid black;
    color: black;
    transition: 0.3s;
  }
  .label {
    font-weight: 600;
    margin-bottom: -10px !important;
    background-color: white;
    margin-left: 10px;
    padding-right: 5px;
    font-size: 13px;
    z-index: 99;
    color: grey;
    width: fit-content;
    text-transform: capitalize;
  }
  input {
    border-radius: 10px;
    padding: 14px 16px;
    background: transparent;
    border: 1px solid grey !important;
    outline: none;
    width: 100%;
  }
  .email,
  .name,
  .id,
  .class {
    input {
      color: grey !important;
    }
  }
  .error-message {
    color: orangered;
    padding-left: 7px;
    font-size: 13px;
    font-weight: 500;
  }
  .icon{
    font-size: 15px;
  }
    @media (max-width: 1100px){
    padding-right: 24px !important;
  padding-left: 24px !important;
  }
`;

export const EditTeacher = () => {
  return <div>hey</div>;
};

