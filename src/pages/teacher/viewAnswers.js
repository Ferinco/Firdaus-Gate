import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CircularProgress } from "../../components/custom";

export default function ViewAnswers() {
  const { identity } = useParams();
  const { id } = useParams();
  const [assignment, setAssignment] = useState();
  const [answer, setAnswers] = useState();
  const [question, setQuestion] = useState();
  const [questionId, setQuestionId] = useState();
  const [correction, setCorrection] = useState();
  const [correctionText, setCorrectionText] = useState("");
  const [previewC, setPreviewC] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [openQuestion, setOpenQuestion] = useState(false);
  const [openCorrection, setOpenCorrection] = useState(false);
  const [correctionPhoto, setCorrectionPhoto] = useState(null);

  //get assignment details
  const Path = "https://ferrum-sever.onrender.com/uploads/";
  useEffect(() => {
    const getHistory = async () => {
      try {
        const response = await axios.get(
          `https://ferrum-sever.onrender.com/api/assignments/student/${identity}`
        );
        setQuestionId(response?.data?._id);
        setCorrection(
          response.data.correctionImage
            ? response?.data.correctionImage.filename
            : []
        );
        console.log(response?.data?.answers);

        // setAssignment(response.data);
        console.log(response.data.answers);
        const data = response.data.answers.filter((res) => res._id === id);
        setAnswers(data[0]);
        console.log(data);
        setQuestion(
            answer
              ? answer?.answerImage.filename
              : []
          );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getHistory();
    console.log(assignment);
  }, []);

  console.log();
  return (
    <>
   {loading ? <CircularProgress/> : (
    <Wrapper className="px-3 py-5 d-flex flex-column">
      <div className="d-flex flex-column gap-1 justify-content-start align-items-start">
        <div className="d-flex align-items-center gap-2">
          <p>This answer/solution was submitted on</p>{" "}
          <h6>{answer?.datePosted}</h6>
        </div>
        <div className="mt-5">
          <h4>Student/Pupil Details</h4>
        </div>
        <div className="top-div d-flex flex-row justify-content-between align-items-center gap-3 p-3 w-100">
          <div className="d-flex flex-column gap-1 justify-content-start text-start">
            <p>First Name</p>
            <h6>{answer?.firstname}</h6>
          </div>
          <div className="d-flex flex-column gap-1 justify-content-start text-start">
            <p>Surname</p>
            <h6>{answer?.surname}</h6>
          </div>
          <div className="d-flex flex-column gap-1 justify-content-start text-start">
            <p>Admission No.</p>
            <h6>{answer?.admission}</h6>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-left align-items-start mt-5">
        <h4>Answers/Solutions</h4>
        <div className="question-div d-flex flex flex-row justify-content-center align-items-center w-100 p-3 mt-1">
          <div className="image">
            <img src={Path + question} onClick={() => setOpenQuestion(true)} />
          </div>
        </div>
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
   </>
  );
}
const Wrapper = styled.div`
  max-width: 700px;
  p,
  h6,
  h4 {
    margin: 0 !important;
  }
  .top-div,
  .question-div {
    background-color: white;
    border-radius: 20px;
  }
  .image {
    width: 300px;
    height: 300px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  h4 {
    font-weight: 600 !important;
    font-size: 19px;
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
      object-fit: cover;
    }
  }
`;
