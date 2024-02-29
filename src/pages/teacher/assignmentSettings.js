import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { AllSubjects } from "../../configs/allSubjects";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function AssignmentSettings() {
  const { identity } = useParams();
  const [question, setQuestion] = useState("");
  const [correction, setCorrection] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [questionPhoto, setQuestionPhoto] = useState(null);
  const [correctionPhoto, setCorrectionPhoto] = useState(null);
  const [previewQ, setPreviewQ] = useState(null);
  const [previewC, setPreviewC] = useState(null);

  const handleQuestionChange = (e) => {
    const file = e.target.files[0];
    setQuestionPhoto(e.target.files[0]);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewQ(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleCorrectionChange = (event) => {
    const file = event.target.files[0];
    setCorrectionPhoto(event.target.files[0]);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewC(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

const handleSubmit = async (event) => {
  event.preventDefault();
  setSubmitting(true);

  try {
    const formData = new FormData();
    formData.append("subjectCode", identity);
    formData.append("questionText", question);
    formData.append("correctionText", correction);
    formData.append("questionImage", questionPhoto);
    formData.append("correctionImage", correctionPhoto);

    const response = await axios.post(
      "https://ferrum-sever.onrender.com/api/assignments",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.status === 201) {
      toast.success("Assignment uploaded successfully");
    } else {
      toast.error("Failed to upload assignment");
    }
  } catch (error) {
    toast.error("Could not upload assignment");
  } finally {
    setSubmitting(false);
  }
};

  const subject = AllSubjects.find((query) => query.code === identity);
  console.log(subject);
  console.log(identity);

  return (
    <Wrapper className="container py-5 d-flex flex-column justify-content-start align-items-start">
      <form onSubmit={handleSubmit}>
        <h4>
          Post Assignment for {subject?.code}: {subject?.name}
        </h4>
        <div className="assignment-body d-flex flex-column gap-3">
          <div className="mt-4 d-flex flex-row align-items-center gap-2">
            <label htmlFor="title" className="label m-0">
              Title:
            </label>
            <input name="title"></input>
          </div>
          <div className="question-div mt-5">
            <div className="header header d-flex flex-row gap-2 py-2 px-1 flex-wrap">
              <h6 className="m-0">Questions</h6>
              <p className="m-0">
                *you can post both the photo of the question and the question
                text or either of them.
              </p>
            </div>
            <div className="mt-3 d-flex flex-column">
              <label htmlFor="title">Question/Intructions:</label>
              <textarea
                name="title"
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="mt-2 d-flex flex-column">
              <label>Question Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleQuestionChange}
                className="p-0"
              />
              <p className="m-0 warning">
                *image size should not be more that 200kb
              </p>
            </div>
          </div>
          <div className="corrections-div mt-5">
            <div className="header d-flex flex-row gap-2 py-2 px-1 flex-wrap">
              <h6 className="m-0">Corrections</h6>
              <p className="m-0">
                *it is mostly appropriate to post the corrections after the
                students' submissions
              </p>
            </div>
            <div className="mt-3 d-flex flex-column">
              <label htmlFor="title">Correction:</label>
              <textarea
                name="title"
                onChange={(e) => {
                  setCorrection(e.target.value);
                }}

              ></textarea>
            </div>
            <div className="mt-2 d-flex flex-column">
              <label>Correction Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleCorrectionChange}
                className="p-0"
              />
              <p className="m-0 warning">
                *image size should not be more that 200kb
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 d-flex w-100">
          <button type="submit" disabled={submitting === true}>
            {" "}
            {submitting ? (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              "Upload Assignment"
            )}
          </button>
        </div>
      </form>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  max-width: 700px;
  border: 1px solid grey;
  h4 {
    font-size: 25px;
    font-weight: 500 !important;
  }
  .warning {
    color: orangered;
    font-size: 12px;
    font-weight: 400 !important;
  }
  label {
    font-weight: 600 !important;
    margin: 0 !important;
    font-size: 14px;
  }
  .header {
    background-color: grey;
    h6 {
      color: white;
      text-transform: uppercase;
    }

    p {
      font-size: 13px;
      color: white;
    }
  }
  input,
  textarea {
    outline: 0 !important;
    padding: 5px;
  }
  button {
    padding: 5px 20px;
    width: 100% !important;
    border: 1px solid blue;
    background-color: blue;
    color: white;
    border-radius: 10px;
  }
`;
