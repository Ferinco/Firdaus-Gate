import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import AdmissionGuideline from "../../components/admission/AdmissionGuideline.js";

export default function AdmissionForm() {
  const [showGuidelines, setShowGuidelines] = useState(false);
  const handleToggleGuideline = () => {
    setShowGuidelines(!showGuidelines);
  };
  React.useEffect(() => {
    setShowGuidelines(true);
  }, []);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      otherNames: "",
      dateOfBirth: "",
      presentClass: "",
      gender: "",
      phone: "",
      schoolOfInterest: "",
      classOfInterest: "",
      nationality: "",
      stateOfOrigin: "",
      localGovernmentArea: "",
      religion: "",
      residentialAddress: "",
      dayOrBoarding: "",
      primarySchoolAttended: "",
      secondarySchoolAttended: "",
      birthCertificate: "",
      previousClassResult: "",
    },
  });

  return (
    <>
      {showGuidelines && (
        <AdmissionGuideline
          onToggle={handleToggleGuideline}
          isShow={showGuidelines}
        />
      )}
      <div className="container">
        <form>
          <div className="row">
            <div className="col-md-6">
              <div>
                <input type="file" placeholder="student photo" />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <input type="text" placeholder="Surname" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div>
                <input type="text" placeholder="First Name" />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <input type="text" placeholder="Other Names" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div>
                <input type="text" placeholder="Date of Birth" />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <input type="text" placeholder="Present Class" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div>
                <input type="text" placeholder="Gender" />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <input type="text" placeholder="Phone" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div>
                <input type="text" placeholder="School of interest" />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <input type="text" placeholder="Class of interest" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div>
                <input type="text" placeholder="Nationality" />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <input type="text" placeholder="State of Origin" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div>
                <input type="file" placeholder="Local Govt. Area" />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <input type="text" placeholder="Religion" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div>
                <label>Residential Address</label>
                <input type="file" placeholder="Residential Address" />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <label>Do you want to be a Day or Boarding Student</label>
                <input
                  type="text"
                  placeholder="Do you want to be a Day or Boarding Student"
                />
              </div>
            </div>
          </div>{" "}
        </form>
      </div>
    </>
  );
}
