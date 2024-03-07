import { useEffect, useState } from "react";
import styled from "styled-components";
import { CircularProgress } from "../../components/custom";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import { SubjectService } from "../../services/subjectService";
import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../../routes/paths";

export default function ViewAssignments() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [questions, setQuestions] = useState();
  const [subjects, setSubjects] = useState();

  useEffect(() => {
    SetStudentCategory();
  }, []);
  function SetStudentCategory() {
    if (user?.currentClass.startsWith("FGJSC")) {
      setCategory("junior");
    } else if (user?.currentClass.startsWith("FGSSC")) {
      setCategory("senior");
    } else if (user?.currentClass.startsWith("FGNSC")) {
      setCategory("nursery");
    } else if (user?.currentClass.startsWith("FGKGC")) {
      setCategory("kg");
    } else if (user?.currentClass.startsWith("FGBSC")) {
      setCategory("basic");
    }
  }

  //get assignments
  useEffect(() => {
    const FetchAssignments = async () => {
        setLoading(true)
      try {
        const response = await axios.get(
          "https://ferrum-sever.onrender.com/api/get-all-assignments"
        );
        console.log(response);
        const data = response?.data.map((res) =>
          res.category === category ? res : []
        );
        console.log(data)
        setQuestions(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    FetchAssignments();
  }, [category]);

  useEffect(() => {
    const userId = user._id;
    fetchSubjects(userId);
  }, []);

  const fetchSubjects = async (userId) => {
    try {
      const { data } = await SubjectService.getSubjects(userId);
      setSubjects(data.subjects.slice(1));
    //   setLoading(false);
    } catch (error) {
      console.error(error);
    //   setLoading(false);
    }
  };
  console.log(questions);

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <Wrapper className=" pt-3 pb-5 d-flex flex-column gap-3">
          <div className="px-3">
            <div className="top-div"></div>
          </div>
          <div className="mt-4 d-flex flex-column gap-1 px-3">
            <h6 className="m-0">Active Assignments</h6>
            <p>Click on a tile to submit your answer or view correction.</p>
          </div>
          <div className="bottom-div pl-3">
            {questions.length > 0 ? (
              questions.map((question) => {
                const subject = subjects?.find(
                  (subject) => subject?.code === question?.subjectCode
                );
                return (
                  <Link
                    to={`${PATH_DASHBOARD.student.postAnswer}/${question._id}`}
                  >
                    {subject?.name}
                  </Link>
                );
              })
            ) : (
              <div>
                <p>no active assignments</p>
              </div>
            )}
          </div>
        </Wrapper>
      )}
    </>
  );
}
const Wrapper = styled.div`
  .top-div {
    border: 1px solid red;
    height: 300px;
    width: 100%;
    border-radius: 30px;
  }
`;
