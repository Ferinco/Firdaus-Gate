import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { CircularProgress } from "../../components/custom";

export default function CheckAssignments() {
  const { identity } = useParams();
  const [assignment, setAssignment] = useState();
  const [answers, setAnswers] = useState();
  const [question, setQuestion] = useState();
  const [correction, setCorrection] = useState();
  const [correctionText, setCorrectionText] = useState("");
  const [previewC, setPreviewC] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [openQuestion, setOpenQuestion] = useState(false);
  const [openCorrection, setOpenCorrection] = useState(false);
  const [correctionPhoto, setCorrectionPhoto] = useState(null);

  const Path = "https://ferrum-sever.onrender.com/uploads/";
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
        setAnswers(response.data.answers);
        console.log(response.data.answers);

        setAssignment(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getHistory();
    console.log(assignment);
  }, []);

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
      formData.append("correctionText", correctionText);
      formData.append("correctionImage", correctionPhoto);
      const response = await axios.put(
        `https://ferrum-sever.onrender.com/api/assignments/update-correction/${identity}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
    } catch (error) {
      toast.error("Could not upload corrections");
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <Container className="container py-5 d-flex flex-column">
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
                <h6>{assignment?.deadline}</h6>
              </div>
              <div className="d-flex flex-column small-divs">
                <p>No of Submissions:</p>
                <h6>{assignment?.answers.length}</h6>
              </div>
              <button className="delete">Delete Assignment</button>
            </div>
          </div>
          <div className="d-flex flex-column mt-5 justify-content-center">
            <div className="head">
              {" "}
              <h6>Questions/Instruction</h6>
            </div>
            <div className="d-flex flex- gap-3 flex-wrap mt-3 justify-content-center">
              <p className="label">Question in text: </p>
              <p className="text">{assignment?.questionText}</p>
            </div>{" "}
            <div className="image-div d-flex justify-content-center align-items-center">
              {assignment?.questionImage ? (
                <div className="image mt-2">
                  <img
                    src={Path + question}
                    onClick={() => setOpenQuestion(true)}
                  />
                </div>
              ) : (
                <div>no photos uploaded</div>
              )}
            </div>
          </div>
          <div className="d-flex flex-column mt-4 justify-content-center">
            <div className="head">
              <h6>Correction</h6>
            </div>
            {assignment?.correctionText ? (
              <div className="d-flex flex- gap-3 flex-wrap mt-3 justify-content-center">
                <p className="label">Correction in text: </p>
                <p className="text">{assignment?.correctionText}</p>
              </div>
            ) : (
              <div className="mt-3 d-flex flex-column justify-content-center">
                <label className="label">Correction Text:</label>
                <textarea
                  className="input"
                  placeholder="correction text..."
                  onChange={(e) => {
                    setCorrectionText(e.target.value);
                  }}
                />
              </div>
            )}
            {assignment?.correctionImage ? (
              <div className="image-div">
                <div className="image mt-2">
                  <img
                    src={Path + correction}
                    onClick={() => setOpenCorrection(true)}
                  />
                </div>
              </div>
            ) : (
              <>
                <div className="mt-1 d-flex flex-column">
                  <label className="label">Correction Image:</label>
                  <input
                    type="file"
                    accept="image/*"
                    className="p-0 upload-div d-flex justify-content-center p-3 align-items-center"
                    onChange={handleCorrectionChange}
                  />
                </div>
                <button onClick={handleSubmit}>Post Correction</button>
              </>
            )}
          </div>
          <div className="table-section mt-5">
            <div className="head">Answers and Submissions</div>
            <p>no. of submisions: {assignment?.answers?.length}</p>
            <div className="table-div">
              <Table className="table-bordered mt-3">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Admission No.</th>
                    <th>First Name</th>
                    <th>Surname</th>
                    <th>Time Submitted</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>

                    <td>23003</td>
                    <td>Bolu</td>
                    <td>Ecool</td>
                    <td>23003</td>
                    <td>answer</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Container>
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
}
const Container = styled.div`
  margin: 0 !important;
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
    padding: 3px 10px;
  }
  .delete {
    border: 1px solid red;
    color: white;
    font-size: 14px;
    background-color: red;
    padding: 3px 10px;
  }
  h6,
  p {
    margin: 0;
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
  .head {
    color: black;
    padding: 5px 3px;
    h6 {
      font-weight: 500 !important;
    }
  }
  .label {
    font-weight: 300;
  }
  .text {
    color: black;
    text-decoration: underline;
    font-weight: 500;
  }
  .image-div {
    border: 1px solid grey;
    padding: 5px;
    max-width: 300px;
    justify-self: center;
    align-self: center;
  }
  .table-div {
    overflow-x: auto !important;
    td {
      font-size: 14px;
    }
    th {
      font-weight: 500 !important;
      text-align: center;
    }
  }
  textarea {
    padding: 10px;
    border: 1px solid grey;
    color: grey;
    border-radius: 10px;
    background: transparent;
  }
  input,
  textarea {
    outline: 0 !important;
  }
  .upload-div {
    border: 1px dashed blue;
    width: 200px;
    height: 200px;
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
