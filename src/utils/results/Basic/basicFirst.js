import styled from "styled-components";
import { useAppContext } from "../../../contexts/Context";
import generatePDF from "react-to-pdf";
import { useRef } from "react";
import { BasicSubjects } from "../../../configs/subjectsConfig";
export default function BasicFirst (){
    const { resultsData, setResultsData } = useAppContext();
    const ResultRef = useRef()
    return(
        <div className="d-flex flex-column gap-5">
        <button onClick={()=>(
            generatePDF(ResultRef,{filename: "second-term-results"}  )
        )}>download</button>
        <ResultDiv className="d-flex flex-column gap-3 p-3" ref={ResultRef}>
            <div className="logo-container">
    
            </div>
          <div className="d-flex flex-row intro-header align-items-center justify-content-between p-2">
            <div className="title">
              <p>Academic Year</p>
            </div>
            <div className="item"></div>
            <div className="">
              <h6>FIRST TERM RESULT</h6>
            </div>
            <div className="title">
              <p>Admission Number</p>
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
                  {resultsData[0].slice(1, 4).map((score) => (
                    <td>{score}</td>
                  ))}
                </tr>
                <tr>
                  <td>No of Times Present</td>
                  {resultsData[0].slice(1, 4).map((score) => (
                    <td>{score}</td>
                  ))}
                </tr>
                <tr>
                  <td>No of Times Absent</td>
                  {resultsData[0].slice(1, 4).map((score) => (
                    <td>{score}</td>
                  ))}
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
                  <th>Sports and Athletics</th>
                  <th>Other Organised Activities</th>
                </tr>
                <tr>
                  <td>Beginning of Term</td>
                  <td>End of Term</td>
                  <td>Beginning of Term</td>
                  <td>End of Term</td>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {resultsData[0]?.slice(1, 7).map((score) => (
                    <td>{score}</td>
                  ))}
                </tr>
                <tr>
                  {resultsData[0]?.slice(1, 7).map((score) => (
                    <td>{score}</td>
                  ))}
                </tr>
                <tr>
                  {resultsData[0]?.slice(1, 7).map((score) => (
                    <td>{score}</td>
                  ))}
                </tr>
                <tr>
                    <td colSpan={3}>
                        Cleanliness Rating
                    </td>
                    <td colSpan={3}>
                        Remark
                    </td>
                </tr>
              </tbody>
            </table>
           
          </div>
          <div className="d-flex flex-column gap-1 performance-div">
            <div className="header d-flex flex-row align-items-center mb-2  ">
              <h6>3</h6> <h6>PERFORMACE IN ALL SUBJECTS</h6>
            </div>
            <table className="table table-bordered" border="1" width="100%">
              <thead>
              <tr>
                <th className="holder"></th>
                {
                    BasicSubjects.map((subject)=>(
                        <th><p className="subject">{subject.name}</p></th>
                    ))
                }
               </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cont. Asses. Scores</td>
                  {resultsData[0].slice(1, 20).map((score) => (
                    <td>{score}</td>
                  ))}
                </tr>
                <tr>
                  <td>Sum. Test Scores</td>
                  {resultsData[0].slice(1, 20).map((score) => (
                    <td>{score}</td>
                  ))}
                </tr>
                <tr>
                  <td>Total (Weighted Average)</td>
                  {resultsData[0].slice(1, 20).map((score) => (
                    <td>{score}</td>
                  ))}
                </tr>
                <tr>
                  <td colSpan={10}>Average</td>
                  <td colSpan={10}>No. of Students in Class</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex flex-column gap-1">
            <div className="header d-flex flex-row align-items-center mb-2  ">
              <h6>4</h6> <h6>SPORTS</h6>
            </div>
            <table className="table table-bordered" border="1" width="100%">
              <thead>
                <tr>
                  <th>Events</th>
                  <th>Ball Games</th>
                  <th>Track</th>
                  <th>Throws</th>
                  <th>Swimming</th>
                  <th>Jumps</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Level Attained</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>A-Excellent</td>
                  <td>A-Excellent</td>
                  <td>A-Excellent</td>
                  <td>A-Excellent</td>
                  <td>A-Excellent</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex flex-column gap-1">
            <div className="header d-flex flex-row align-items-center mb-2  ">
              <h6>5</h6> <h6>CLUBS, YOUTH ORGANIZATION ETC</h6>
            </div>
            <table className="table table-bordered" border="1" width="100%">
              <thead>
                <tr>
                  <th>Organisation</th>
                  <th>
                    <p>Office Held</p>
                  </th>
                  <th>
                    <p>Significant Contibution</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="last">
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className="last">
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex flex-column gap-2">
          <div className="d-flex flex-row gap-4">
        <div className="d-flex flex-row gap-2">
            <p>Class Teacher's Comments:</p>
            <p className="comments">khe;rih4rhio</p>
            </div>
            <div className="d-flex flex-row gap-2">
            <p>Signature/Date</p>
            <p className="comments">khe;rih4rhio</p>
            </div>
          </div>
          <div className="d-flex flex-row gap-4">
        <div className="d-flex flex-row gap-2">
            <p>Principal's/ Head Teacher's/Master's Comments:</p>
            <p className="comments">khe;rih4rhio</p>
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
    )
}

const ResultDiv = styled.div`
  width: 900px;
  margin: auto;
  background-color: white;
  .logo-container{
    border: 1px solid red;
    height: 200px;
  }
  .table{
    border-collapse: collapse;
    border: 1px solid black;
  }
  td{
    border: 1px solid black;
  }

  th{
    font-weight: 500;
    text-align: center;
    text-transform: capitalize;
    font-size: 14px;
    border: 1px solid black !important;
  }
  h6{
    font-weight: 600 !important;
  }
  td{
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
  .comments{
    text-decoration: underline !important;
  }
  .header{
    gap: 200px;
  }
  .last{
    height: 37px;
  }
`;