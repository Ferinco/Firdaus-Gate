import styled from "styled-components";
import { useAppContext } from "../../../contexts/Context";
import { useRef } from "react";
import generatePDF from "react-to-pdf";
export function KgResult() {
  const { resultsData, setResultsData } = useAppContext();
  console.log(resultsData)
  const studentAdmissionNumber = "11111";
  const results = resultsData.find((row) => row[0] === studentAdmissionNumber);
  console.log(results);
  const resultRef = useRef()
  return (
    <div>
      <button onClick={()=>(
        generatePDF(resultRef, {filename: "kg-report"})
      )}>download</button>
      <ResultDiv className="d-flex flex-column gap-3 p-3" ref={resultRef}>
      <img src="/images/result-header.png" className="logo-container"/>
      <div className="d-flex flex-row intro-header align-items-center justify-content-between p-2">
        <div className="title d-flex gap-1">
          <p>Academic Year</p>
          <p>2023</p>
        </div>
        <div className="">
          <h6>FIRST TERM RESULT</h6>
        </div>
        <div className="title d-flex gap-1">
          <p>Admission Number</p>
          <p>{results ? results[0] : ""}</p>
        </div>
        {/* <div className="item">{resultsData ? resultsData[0][0] : ""}</div> */}
      </div>
      <div className="d-flex flex-row intro-header align-items-center justify-content-between p-2">
        <div className="title w-75 d-flex flex-row">
          <p className="" style={{width: "10%"}}>Name</p>
          <p className="student-name" style={{width: "80%"}}></p>
        </div>
        <div className="title w-25 d-flex flex-row">
          <p style={{width: "30%"}}>Class</p>
          <p className="student-name" style={{width: "50%"}}></p>
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
                <td className="text-center">{results ? results[13] : ""}</td>
                <td className="text-center">{results ? results[16] : ""}</td>
                <td className="text-center">{results ? results[19] : ""}</td>

              </tr>
              <tr>
                <td>No of Times Present</td>
                <td className="text-center">{results ? results[14] : ""}</td>
                <td className="text-center">{results ? results[17] : ""}</td>
                <td className="text-center">{results ? results[20] : ""}</td>

              </tr>
              <tr>
                <td>No of Times Absent</td>
                <td className="text-center">{results ? results[15] : ""}</td>
                <td className="text-center">{results ? results[18] : ""}</td>
                <td className="text-center">{results ? results[21] : ""}</td>



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
                <th rowSpan={2}>Sports and Athletics</th>
                <th rowSpan={2}>Other Organised Activities</th>
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
                {results?.slice(22, 28).map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr>
                <td colSpan={3}>Cleanliness Rating <h6>{results? results[28] : ""}</h6></td>
                <td colSpan={3}>Remark <h6>{results? results[29] : ""}</h6></td>
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
                <th>SUBJECTS</th>
                <th>TEACHER'S REMARKS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  NUMBER WORK <br />
                  COUNTING AND RECOGNITION
                </td>
                <td className="text-center">{results[1]}</td>
              </tr>
              <tr>
                <td>
                  LETTER WORK <br />
                  READING AND IDENTIFICATION
                </td>
                <td className="text-center">{results[2]}</td>

              </tr>
              <tr>
                <td>WRITING WORK</td>
                <td className="text-center">{results[3]}</td>

              </tr>
              <tr>
                <td>COMMUNICATION ABILITY</td>
                <td className="text-center">{results[4]}</td>

              </tr>
              <tr>
                <td>RHYMES AND POEMS</td>
                <td className="text-center">{results[5]}</td>

              </tr>
              <tr>
                <td>ISLAMIC ETHICS/ARABIC</td>
                <td className="text-center">{results[6]}</td>

              </tr>
              <tr>
                <td>
                  SOCIAL NORMS
                  <br />
                  MANNERS/MORALS
                </td>
                <td className="text-center">{results[7]}</td>

              </tr>
              <tr>
                <td>CREATIVE ACTIVITIES/IDEAS</td>
                <td className="text-center">{results[8]}</td>
              </tr>
              <tr>
                <td>PHYSICAL WORK</td>
                <td className="text-center">{results[9]}</td>

              </tr>
              <tr>
                <td colSpan={2} className="py-2">
                  AVERAGE RATING : <h6>{results[10]}</h6>
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
        <div className="d-flex flex-column gap-2 end">
          <div className="d-flex flex-row gap-4">
            <div className="d-flex flex-row gap-2">
              <p>Class Teacher's Comments:</p>
              <p className="comments">{results[11]}</p>
            </div>
            <div className="d-flex flex-row gap-2">
              <p>Signature/Date</p>
              <p className="comments">jhgjhglegjkeg</p>
            </div>
          </div>
          <div className="d-flex flex-row gap-4">
            <div className="d-flex flex-row gap-2">
              <p>Principal's/ Head Teacher's/Master's Comments:</p>
              <p className="comments">{results[12]}</p>
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
  .student-name{
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
