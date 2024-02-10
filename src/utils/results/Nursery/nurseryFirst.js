import styled from "styled-components";
import { useAppContext } from "../../../contexts/Context";
import generatePDF from "react-to-pdf";
import { useRef } from "react";
export default function NurseryFirst() {
  const { resultsData, setResultsData } = useAppContext();
  const resultRef = useRef();
  const studentAdmissionNumber = "11111";
  const results = resultsData.find((row) => row[0] === studentAdmissionNumber);
  console.log(results);
  return (
    <div>
      <button
        onClick={() => {
          generatePDF(resultRef, { filename: "nursery-result" });
        }}
      >
        download
      </button>
      <ResultDiv className="d-flex flex-column gap-3 p-3" ref={resultRef}>
        <img src="/images/result-header.png" className="logo-container" />
        <div className="d-flex flex-row intro-header align-items-center justify-content-between p-2">
          <div className="title">
            <p>Academic Year</p>
          </div>
          <div className="">
            <h6>FIRST TERM RESULT</h6>
          </div>
          <div className="title">
            <p>Admission Number</p>
          </div>
          {/* <div className="item">{resultsData ? resultsData[0][0] : ""}</div> */}
        </div>
        <div className="d-flex flex-row intro-header align-items-center justify-content-between p-2">
          <div className="title w-75 d-flex flex-row">
            <p className="" style={{ width: "10%" }}>
              Name
            </p>
            <p className="student-name" style={{ width: "80%" }}></p>
          </div>
          <div className="title w-25 d-flex flex-row">
            <p style={{ width: "30%" }}>Class</p>
            <p className="student-name" style={{ width: "50%" }}></p>
          </div>
          {/* <div className="item">{resultsData ? resultsData[0][0] : ""}</div> */}
        </div>
        <div className="d-flex flex-column gap-1">
          <div className="header d-flex flex-row align-items-center mb-2  ">
            <h6>1</h6> <h6>ATTENDANCE (Regularity and Punctuality)</h6>
          </div>
          <table className="table table-bordered" border="1" width="100%">
            <thead>
              <tr>
                <th></th>
                <th>School</th>
                <th>Sports and Athletics</th>
                <th>Other Organised Activities</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>No of Times School Opened/Activities Held</td>
                <td className="text-center">{results ? results[72]: ""}</td>
                <td className="text-center">{results ? results[75]: ""}</td>
                <td className="text-center">{results ? results[78]: ""}</td>
              </tr>
              <tr>
                <td>No of Times Present</td>
                <td className="text-center">{results ? results[73]: ""}</td>
                <td className="text-center">{results ? results[76]: ""}</td>
                <td className="text-center">{results ? results[79]: ""}</td>

              </tr>
              <tr>
                <td>No of Times Absent</td>
                <td className="text-center">{results ? results[74]: ""}</td>
                <td className="text-center">{results ? results[77]: ""}</td>
                <td className="text-center">{results ? results[80]: ""}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex flex-column">
          <div className="header d-flex flex-row align-items-center mb-2  ">
            <h6>2</h6> <h6>PHYSICAL DEVELOPMENT, HEALTH AND CLEANLINESS</h6>
          </div>
          <table className="table table-bordered" border="1" width="100%">
            <thead>
              <tr>
                <th colSpan={2}>Height</th>
                <th colSpan={2}>Weight</th>
                <th rowSpan={2}>No. of Times Absent Due to Illness</th>
                <th rowSpan={2}>Nature of Illness</th>
              </tr>
              <tr>
                <td className="sub-head">Beginning of Term</td>
                <td className="sub-head">End of Term</td>
                <td className="sub-head">Beginning of Term</td>
                <td className="sub-head">End of Term</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                {
                  results?.slice(81, 87).map((score)=>(
<td className="text-center">{score}</td>
                  ))
                }
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex flex-column">
          <div className="header d-flex flex-row align-items-center mb-2  ">
            <h6>3</h6> <h6>PERFORMANCE IN SUBJECTS</h6>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th rowSpan={2}>SUBJECTS</th>
                <th>TEST</th>
                <th>EXAM</th>
                <th>TOTAL</th>
                <th rowSpan={2}>GRADE/REMARKS</th>
              </tr>
              <tr>
                <th>(40)</th>
                <th>(60)</th>
                <th>(100)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ENGLISH LANGUAGE</td>
                {results?.slice(1, 5).map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr>
                <td>MATHEMATICS</td>
                {results?.slice(5, 9).map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr>
                <td>QUANTITATIVE REASONING</td>
                {results?.slice(9, 13).map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr>
                <td>VERBAL REASONING</td>
                {results?.slice(13, 17).map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr>
                <td>ISLAMIC STUDIES & ETHICS</td>
                {results?.slice(17, 21).map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr>
                <td>ARABIC</td>
                {results?.slice(21, 25).map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr>
                <td>QURAN & HADITH</td>
                {results?.slice(25, 29).map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr>
                <td>HANDWRITING</td>
                {results?.slice(29, 33).map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr>
                <td>FINE ART/CRAFT WORK</td>
                {results?.slice(33, 37).map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr>
                <td>PHYSICAL AND HEALTH EDUCATION</td>
                {results?.slice(37, 41).map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr>
                <td>MORAL INSTRUCTIONS</td>
                {results?.slice(41, 45).map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr>
                <td>SOCIAL NORMS</td>
                {results?.slice(45, 49).map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr>
                <td>COMPUTER APPRECIATION</td>
                {results?.slice(49, 53).map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr>
                <td>VOCATIONAL</td>
                {results?.slice(53, 57).map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr>
                <td>PRIMARY SCIENCE</td>
                {results?.slice(57, 61).map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr>
                <td colSpan={5} className="py-2">
                  AVERAGE RATING : <h6>{results ? results[89] + "%" : ""}</h6>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex flex-row justify-content-between grade-div py-2 px-1">
            <p>A-Excellent (85-100)</p>
            <p>B-Very Good (70-84)</p>
            <p>C-Good (55-69)</p>
            <p>D-Fair (40-54)</p>
            <p>E-Poor (40)</p>
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="header d-flex flex-row align-items-center mb-2  ">
            <h6>4</h6> <h6>AFFECTIVE RATING</h6>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th></th>
                <th>GRADE/REMARKS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PUNCTUALITY</td>
                <td className="text-center">{results? results[61]: ""}</td>
              </tr>
              <tr>
                <td>NEATNESS</td>
                <td className="text-center">{results? results[62]: ""}</td>

              </tr>
              <tr>
                <td>HONESTY</td>
                <td className="text-center">{results? results[63]: ""}</td>

              </tr>
              <tr>
                <td>VERBAL FLUENCY</td>
                <td className="text-center">{results? results[64]: ""}</td>

              </tr>
              <tr>
                <td>ACCOMODATING</td>
                <td className="text-center">{results? results[65]: ""}</td>

              </tr>
              <tr>
                <td>SPORTS</td>
                <td className="text-center">{results? results[66]: ""}</td>

              </tr>
              <tr>
                <td>PAINTING AND DRAWING</td>
                <td className="text-center">{results? results[67]: ""}</td>

              </tr>
              <tr>
                <td>PARTICIPATIVE</td>
                <td className="text-center">{results? results[68]: ""}</td>

              </tr>
              <tr>
                <td>BEHAVIORAL PATTERN</td>
                <td className="text-center">{results? results[69]: ""}</td>

              </tr>
            </tbody>
          </table>
          <div className="d-flex flex-row justify-content-between grade-div py-2 px-1">
            <p>A-Excellent</p>
            <p>B-Very Good</p>
            <p>C-Good</p>
            <p>D-Fair</p>
            <p>E-Poor</p>
          </div>
        </div>
        <div className="d-flex flex-column gap-2 end">
          <div className="d-flex flex-row gap-4">
            <div className="d-flex flex-row gap-2">
              <p>Class Teacher's Comments:</p>
              <p className="comments">{results ? results[70]: ""}</p>
            </div>
            <div className="d-flex flex-row gap-2">
              <p>Signature/Date</p>
              <p className="comments">khe;rih4rhio</p>
            </div>
          </div>
          <div className="d-flex flex-row gap-4">
            <div className="d-flex flex-row gap-2">
              <p>Principal's/ Head Teacher's/Master's Comments:</p>
              <p className="comments">{results ? results[71]: ""}</p>
            </div>
            <div className="d-flex flex-row gap-2">
              <p>Signature/Date</p>
              <p className="comments">khe;rih4rhio</p>
            </div>
          </div>
          <div className="d-flex flex-row gap-2">
            <p>School Reopens: </p>
            <p className="comments">khe;rih4rhio</p>
          </div>
        </div>
      </ResultDiv>
    </div>
  );
}
const ResultDiv = styled.div`
  width: 900px;
  margin: auto;
  background-color: white;
  .student-name {
    border-bottom: 1px solid black;
  }
  .sub-head {
    border-bottom: 0;
  }
  .grade-div {
    font-size: 14px;
    font-weight: 600;
    border: 1px solid black;
    border-top: 0;
    margin-top: -17px;
  }
  .logo-container {
    height: 200px;
  }
  .table {
    border-collapse: collapse;
    border: 1px solid black;
  }
  td {
    border: 1px solid black;
  }

  th {
    font-weight: 500;
    text-align: center;
    text-transform: capitalize;
    font-size: 14px;
    border: 1px solid black !important;
  }
  h6 {
    font-weight: 600 !important;
  }
  td {
    font-size: 13px;
  }
  p,
  h3,
  h6 {
    margin: 0 !important;
  }

  .intro-header {
    border: 1px solid black;
    height: 50px;
  }
  .subject {
    transform: rotate(-90deg);
  }
  .performance-div {
    thead {
      height: 250px !important;
    }
    th {
      text-align: start;
      white-space: nowrap;

      p {
        /* height: 200px !important; */
        width: 15px !important;
      }
    }
    .holder {
      width: 150px;
    }
  }
  .comments {
    text-decoration: underline !important;
    font-weight: 600;
  }
  .header {
    gap: 200px;
  }
  .last {
    height: 37px;
  }
  .end {
    font-size: 14px;
  }
`;
