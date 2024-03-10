import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Button, CircularProgress } from "../../components/custom";
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";

export default function CheckQuestions() {
  const { user } = useAuth();
  const { identity } = useParams();
  const [assignment, setAssignment] = useState();
  const [question, setQuestion] = useState();
  const [correction, setCorrection] = useState();
  const [correctionText, setCorrectionText] = useState("");
  const [previewC, setPreviewC] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [openQuestion, setOpenQuestion] = useState(false);
  const [openCorrection, setOpenCorrection] = useState(false);
  const [correctionPhoto, setCorrectionPhoto] = useState(null);
  const [answerPhoto, setAnswerPhoto] = useState(null);
  const [createdAt, setCreatedAt] = useState("");

  const Path = "https://ferrum-sever.onrender.com/uploads/";
  // to get assignment question
  useEffect(() => {
    const getHistory = async () => {
      try {
        const response = await axios.get(
          `https://ferrum-sever.onrender.com/api/assignments/student/${identity}`
        );
        setQuestion(
          response.data.questionImage
            ? response?.data.questionImage.filename
            : []
        );
        setCorrection(
          response.data.correctionImage
            ? response?.data.correctionImage.filename
            : []
        );
        setAssignment(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getHistory();
   GetCurrentDate()
  }, []);

  //handle photo event
  const handleAnswerChange = (event) => {
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

  //get current date  
  function GetCurrentDate() {
    const date = new Date();
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    setCreatedAt(date.toLocaleDateString(undefined, options));
  }

  // to post answers
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("admission", user?.admissionNumber);
      formData.append("firstname", user?.firstName);
      formData.append("surname", user?.lastName);
      formData.append("datePosted", createdAt);
      formData.append("answerImage", answerPhoto);
      const response = await axios.put(
        `https://ferrum-sever.onrender.com/api/assignments/update-answers/${identity}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  console.log(user);

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <Wrapper className="px-3 py-5">
          <div className="top-div d-flex flex-column justify-content-between p-3 gap-4">
            <div className="d-flex flex-column">
              <h4 className="m-0">Assignment Details</h4>
            </div>
            <div className="d-flex flex-row justify-content-between flex-wrap gap-3">
              <div className="d-flex flex-column small-divs">
                <p>Topic:</p>
                <h6>{assignment?.topic}</h6>
              </div>
              <div className="d-flex flex-column small-divs">
                <p>Title:</p>
                <h6>{assignment?.title}</h6>
              </div>
              <div className="d-flex flex-column small-divs">
                <p>Date Issued:</p>
                <h6>{assignment?.dateGiven}</h6>
              </div>
              <div className="d-flex flex-column small-divs">
                <p>Deadline:</p>
                <h6 className="deadline">{assignment?.deadline}</h6>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column mt-5 justify-content-center">
            <div className="head d-flex flex-row justify-content-center text-center">
              {" "}
              <h4>Questions/Instruction</h4>
            </div>
            <div className="div d-flex flex-column justify-content-center p-3">
              {" "}
              <div className="d-flex flex- gap-3 flex-wrap mt-3 justify-content-center">
                <p className="text text-center">{assignment?.questionText}</p>
              </div>
              <div className="image-div d-flex justify-content-center align-items-center">
                {assignment?.questionImage ? (
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="image mt-2">
                      <img
                        src={Path + question}
                        onClick={() => setOpenQuestion(true)}
                      />
                    </div>
                    <p className="m-0 warning">
                      *Click on image to view question properly
                    </p>
                  </div>
                ) : (
                  <div>no photos uploaded</div>
                )}
              </div>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-center text-center mt-5">
            <h4 className="m-0">Post Your Answer/Solution</h4>
          </div>
          <div className="answer-div div p-3 mt-2">
            <form
              onSubmit={handleSubmit}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <input
                onChange={handleAnswerChange}
                type="file"
                accept="image/*"
                className="p-0 upload-div d-flex justify-content-center p-3 align-items-center"
              />
              <Button disabled={submitting}>Post Answer</Button>
            </form>
          </div>
          <div className="d-flex flex-row justify-content-center text-center mt-5">
            <h4>Corrections/Teacher's Solutions</h4>
          </div>
          <div className="correction-div div p-3 mt-1">
            {assignment?.correctionImage ? (
              <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="text text-center">{assignment?.correctionText}</p>
                <div className="image-div">
                  <div className="image mt-2">
                    <img
                      src={Path + correction}
                      onClick={() => setOpenCorrection(true)}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="d-flex flex-row justify-content-center text-center">
                <p className="text-center">No corrections for this assignment yet, check back later.</p>
              </div>
            )}
          </div>
        </Wrapper>
      )}
      {openQuestion ? (
        <PhotoOverlay className="d-flex flex-column justify-content-center align-items-center">
          <button onClick={() => setOpenQuestion(false)}>X</button>
          <div className="image">
            <img src={Path + question} onClick={() => setOpenQuestion(true)} />
          </div>
        </PhotoOverlay>
      ) : (
        ""
      )}
       {openCorrection ? (
        <PhotoOverlay className="d-flex flex-column justify-content-center align-items-center">
          <button onClick={() => setOpenCorrection(false)}>X</button>
          <div className="image">
            <img
              src={Path + correction}
              onClick={() => setOpenCorrection(true)}
            />
          </div>
        </PhotoOverlay>
      ) : (
        ""
      )}
    </>
  );

  //to post answer
}
const Wrapper = styled.div`
  .deadline {
    color: red;
  }
  .image {
    width: 200px;
    height: 200px;
    overflow: hidden;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .div {
    background-color: white !important;
    border-radius: 20px;
    margin-top: 10px !important;
    button {
      border-radius: 15px;
      width: 200px !important;
      height: 40px;
    }
  }
  .warning {
    font-size: 14px;
    color: orangered;
  }
  p,
  h6 {
    margin: 0 !important;
  }
  .top-div {
    background-color: white;
    border-radius: 20px;
    button {
      border-radius: 10px;
    }
    p {
      font-size: 14px;
    }
    h6 {
      font-weight: 500 !important;
      font-size: 15px;
    }
  }
  label {
    margin: 0 !important;
    font-weight: 600 !important;
    font-size: 14px;
  }
  h4 {
    font-weight: 500 !important;
    font-size: 19px;
  }
  button {
    width: fit-content;
    border: 1px solid blue;
    color: white;
    background-color: blue;
    margin-top: 10px;
    padding: 5px 20px;
  }
  .upload-div {
    border: 1px dashed blue;
    width: 300px;
    height: 300px;
  }
`;
const PhotoOverlay = styled.div`
  width: 80%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  position: fixed !important;
  z-index: 999;
  top: 0 !important;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
  .image {
    width: 80%;
    height: 90%;
    overflow: auto !important;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
