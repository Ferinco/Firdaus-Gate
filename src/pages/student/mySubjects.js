import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SubjectService } from "../../services/subjectService";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../../routes/paths";
import { CircularProgress } from "../../components/custom";
export default function Subjects() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const userId = user._id;
    fetchSubjects(userId);
  }, []);

  const fetchSubjects = async (userId) => {
    try {
      const { data } = await SubjectService.getSubjects(userId);
      setSubjects(data.subjects.slice(1));
      console.log(subjects)
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Container className="container py-5">
        <div className="header">
          <h3>SUBJECTS OFFERED</h3>
        </div>
        <div className="divs d-flex flex-row flex-wrap gap-5 mt-5">
          {subjects.map((subject, index) => (
            <Link
              className={`subject-div d-flex flex-row align-items-center react-router-link ${
                index % 2 === 0 ? "even-subject" : "odd-subject"
              }`}
              key={subject._id}
              to={`${PATH_DASHBOARD.student.scheme}/${subject._id}`}
            >
              <div className="initial h-100 d-flex justify-content-center align-items-center">
                <p className="m-0">{subject.name.charAt(0)}</p>
              </div>
              <div className=" pl-3">
                <h6 className="m-0">
                  {" "}
                  {subject.name.length > 17
                    ? `${subject.name.slice(0, 17)}...`
                    : subject.name}
                </h6>
              </div>
            </Link>
          ))}
        </div>
      </Container>
      {loading ? <CircularProgress /> : ""}
    </>
  );
}
const Container = styled.div`
  .subject-div {
    height: 70px;
    width: 300px;
    background: white;
  }
  .even-subject {
    .initial {
      width: 90px;
      background-color: rgba(158, 160, 231, 0.7);
      color: blue;
      p {
        font-size: 25px;
        font-weight: 600;
      }
    }
  }
  .odd-subject {
    .initial {
      width: 90px;
      background-color: grey;
      color: black;
      p {
        font-size: 25px;
        font-weight: 600;
      }
    }
  }
`;
