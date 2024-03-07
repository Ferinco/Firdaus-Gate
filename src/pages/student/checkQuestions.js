import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CircularProgress } from "../../components/custom";
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
    console.log(assignment);
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

  // to post answers
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("admission", user?.admissionNumber);
      formData.append("firstname", user?.firstName);
      formData.append("surname", user?.lastName);
      formData.append("datePosted", "correction");
      formData.append("answerImage", answerPhoto);
      const response = await axios.put(
        `https://ferrum-sever.onrender.com/api/assignments/update-answers/${identity}`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          answers: [...formData],
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
        <Wrapper>
          <form onSubmit={handleSubmit}>
            <input onChange={handleAnswerChange} type="file" />
            <button>test</button>
          </form>
        </Wrapper>
      )}
    </>
  );

  //to post answer
}
const Wrapper = styled.div``;
