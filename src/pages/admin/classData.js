import styled from "styled-components";
import { AllClasses } from "../../configs/allClasses";
import { CircularProgress } from "../../components/custom";
import { useEffect, useState } from "react";
import {
  BasicSubjects,
  ElementarySubjects,
  JuniorSubjects,
  SeniorSubjects,
} from "../../configs/subjectsConfig";
export default function ClassDataPage() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    setIsLoading(true);
  }, []);

  const getNumberOfSubjects = (code) => {
    if (code.startsWith("FGKGC")) {
      return ElementarySubjects.length;
    } else if (code.startsWith("FGNSC")) {
      return ElementarySubjects.length;
    } else if (code.startsWith("FGBSC")) {
      return BasicSubjects.length;
    }else if (code.startsWith("FGJSC")) {
      return JuniorSubjects.length;
    }else if (code.startsWith("FGSSC")) {
      return SeniorSubjects.length;
    }
  };

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Container className="py-5">
          <div className="p-3">
            <h4>Classes and Subjects</h4>
            {/* <p>view successful applications from outsiders.</p> */}
          </div>
          <div className="mt-5 d-flex flex-column bottom-div px-3 py-4">
            <div className="d-flex flex-column">
              {/* <p ><span>{applications?.length}</span> people have purchased the admission form.</p> */}
              <p className="text-muted">
                Class Lists, names and their respective codes with the number of subjects offered in them.
              </p>
            </div>
            <div className="table-div mt-3">
              <table className="table table-bordered">
                <thead>
                  <th>No.</th>
                  <th>Class</th>
                  <th>Class Code</th>
                  <th>No. of Subjects</th>
                </thead>
                <tbody>
                  {AllClasses.map((classes, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{classes?.name}</td>
                      <td className="text-align-center">{classes?.code}</td>
                      <td className="subjects">{getNumberOfSubjects(classes?.code)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
  th {
    font-weight: 500;
    font-size: 15px;
    padding: 8px;
    text-align: center;
  }
  td {
    font-size: 14px;
    padding: 5px;
  }
  .subjects{
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
  }
  tbody,
  thead {
    background-color: #f1f1f1 !important;
  }
  .bottom-div {
    background-color: white;
    p {
      margin: 0;
      font-size: 14px;
    }
    span {
      color: blue;
      font-weight: 600;
    }
  }
  .table-div {
    overflow-x: auto;
  }
  .table {
    width: 1005px;
  }
`;
