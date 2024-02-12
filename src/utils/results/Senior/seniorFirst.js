import styled from "styled-components";
import { useAppContext } from "../../../contexts/Context";
import { useRef } from "react";
import generatePDF from "react-to-pdf";
export default function SeniorFirst() {
  const { resultsData, setResultsData } = useAppContext();
const resultRef = useRef()
const studentAdmissionNumber = "23002";
const results = resultsData.find((row) => row[0] === studentAdmissionNumber);
console.log(results);
  return (
    <div>
        <button onClick={()=>{
            generatePDF(resultRef, {filename: "senior-class"})
        }}>download</button>
      <ResultDiv className="d-flex flex-column gap-3 p-3" ref={resultRef}>
      <img src="/images/result-header.png" className="logo-container"/>
        <div className="intro-div d-flex flex-column">
          <div className=" d-flex flex-row justify-content-between">
            <div className="d-flex flex-row">
              <p>Admission Year</p>
              <p>2023</p>
            </div>
            <h6>FIRST TERM RESULTS</h6>
            <div className="d-flex flex-row">
              <p>Admission Number</p>
              <p>2023</p>
            </div>
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
          <div className="results-div d-flex flex-row">
            <div className="performance-div p-3 d-flex flex-column gap-3">
              <table className="results-table table table-bordeerd">
                <thead>
                  <tr>
                    <th className="holder"></th>
                    <th>
                      <p className="rotate">Continous Assessment Scores</p>
                    </th>
                    <th>
                      <p className="rotate">Exam Scores</p>
                    </th>
                    <th>
                      <p className="rotate">Total (Weighted Average)</p>
                    </th>
                    <th>
                      <p className="rotate">Position/Grade</p>
                    </th>
                    <th>
                      <p className="holder text-center">Comments</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>max. obtainable</td>
                    <th>40</th>
                    <th>60</th>
                    <th>100</th>
                    <th></th>
                    <th></th>
                  </tr>
                  <tr>
                    <td>english language</td>
                    {results?.slice(1, 4).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                     {results?.slice(8, 10).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>{" "}
                  <tr>
                    <td>Mathematics</td>
                    {results?.slice(10, 13).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                     {results?.slice(17, 19).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>biology</td>
                    {results?.slice(19, 22).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                     {results?.slice(26, 28).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>physics</td>
                    {results?.slice(28, 31).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                     {results?.slice(35, 37).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>chemistry</td>
                    {results?.slice(37, 40).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                     {results?.slice(44, 46).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>further mathematics</td>
                    {results?.slice(46, 49).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                     {results?.slice(53, 55).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>physicyoruba language</td>
                    {results?.slice(55, 58).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                     {results?.slice(62, 64).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>civic education</td>
                    {results?.slice(64, 67).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                     {results?.slice(71, 73).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>computer studies</td>
                    {results?.slice(73, 76).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                     {results?.slice(80, 82).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>data processing</td>
                    {results?.slice(82, 85).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                     {results?.slice(89, 91).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>I.R.S</td>
                    {results?.slice(91, 94).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                     {results?.slice(98, 100).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>arabic</td>
                    {results?.slice(100, 103).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                     {results?.slice(107, 109).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>economics</td>
                    {results?.slice(109, 112).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                     {results?.slice(116, 118).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Government</td>
                    {results?.slice(118, 121).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                     {results?.slice(125, 127).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Geography</td>
                    {results?.slice(127, 130).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                     {results?.slice(134, 136).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>agricultural science</td>
                    {results?.slice(136, 139).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                     {results?.slice(143, 145).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>literature in english</td>
                    {results?.slice(145, 148).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                     {results?.slice(152, 154).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Financial Accounting</td>
                    {results?.slice(154, 157).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                     {results?.slice(161, 163).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>commerce</td>
                    {results?.slice(163, 166).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                     {results?.slice(170, 172).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>QURAN</td>
                    {results?.slice(172, 175).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                     {results?.slice(179, 181).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
              <div className="d-flex flex-column">
                <div className="header d-flex flex-row align-items-center mb-2  ">
                  <h6>2</h6>{" "}
                  <h6>PHYSICAL DEVELOPMENT, HEALTH AND CLEANLINESS</h6>
                </div>
                <table className="table table-bordered" border="1" width="100%">
                  <thead>
                    <tr>
                      <th colSpan={2}>Height</th>
                      <th colSpan={2}>Weight</th>
                      <th>No. of Times Absent Due to Illness</th>
                      <th>Nature of Illness</th>
                    </tr>
                    <tr>
                      <td className="no-bottom">Beginning of Term</td>
                      <td className="no-bottom">End of Term</td>
                      <td className="no-bottom">Beginning of Term</td>
                      <td className="no-bottom">End of Term</td>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    {results?.slice(194, 200).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
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
                    {results?.slice(205, 208).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
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
                      {results?.slice(200, 205).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                    </tr>
                    <tr>
                      <td className="special-td"></td>
                      <td className="special-td">A-Excellent</td>
                      <td className="special-td">A-Excellent</td>
                      <td className="special-td">A-Excellent</td>
                      <td className="special-td">A-Excellent</td>
                      <td className="special-td">A-Excellent</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="activity-div d-flex flex-column justify-content-between p-3">
              <table>
                <thead>
                  <tr>
                    <th colSpan={3}>ATTENDANCE (Regularity and Punctuality)</th>
                  </tr>
                  <tr>
                    <th>Times school opened</th>
                    <th>Times present</th>
                    <th>Times absent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>d</td>
                    <td>dd</td>
                    <td>dd</td>
                  </tr>
                </tbody>
              </table>
              {/* <table className="w-100">
        <thead>
            <tr>
                <th colSpan={2}>PERSONAL TRAIT</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Punctuality</td>
                <td>honesty</td>
            </tr>
        </tbody>
       </table> */}
              <table className="w-100">
                <thead>
                  <tr>
                    <th colSpan={2}>PSYCHOMOTOR/PERSONAL SKILLS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Literary</td>
                    <td>Quran memorisation</td>
                  </tr>
                  <tr>
                    <td>Technical</td>
                    <td>Hadith Skills</td>
                  </tr>
                  <tr>
                    <td>Innovative</td>
                    <td>Arabiyya/Fighu</td>
                  </tr>
                  <tr>
                    <td>Sporting</td>
                    <td>Cultural</td>
                  </tr>
                </tbody>
              </table>
              <div className="affective-div">
                <div>
                  <p className="th">AFFECTIVE DOMAIN</p>
                </div>
                <div className="d-flex flex-column affective-body">
                  <div className="d-flex flex-row justify-content-between items">
                    <p className="td">Punctuality</p>
                    <p className="td"></p>
                  </div>
                  <div className="d-flex flex-row justify-content-between items">
                    <p className="td">Politeness</p>
                    <p className="td"></p>
                  </div>
                  <div className="d-flex flex-row justify-content-between items">
                    <p className="td">Attentiveness</p>
                    <p className="td"></p>
                  </div>
                  <div className="d-flex flex-row justify-content-between items">
                    <p className="td">Neatness</p>
                    <p className="td"></p>
                  </div>
                  <div className="d-flex flex-row justify-content-between items">
                    <p className="td">Initiative</p>
                    <p className="td"></p>
                  </div>
                  <div className="d-flex flex-row justify-content-between items">
                    <p className="td">Perseverance</p>
                    <p className="td"></p>
                  </div>
                  <div className="d-flex flex-row justify-content-between items">
                    <p className="td">Team Work</p>
                    <p className="td"></p>
                  </div>
                  <div className="d-flex flex-row justify-content-between items">
                    <p className="td">Leadership Spirit</p>
                    <p className="td"></p>
                  </div>
                  <div className="d-flex flex-row justify-content-between items">
                    <p className="td">Relationship with Teachers</p>
                    <p className="td"></p>
                  </div>
                  <div className="d-flex flex-row justify-content-between items">
                    <p className="td">Attitude to Work</p>
                    <p className="td"></p>
                  </div>
                  <div className="d-flex flex-row justify-content-between items">
                    <p className="td">Health</p>
                    <p className="td"></p>
                  </div>
                  <div className="d-flex flex-row justify-content-between items">
                    <p className="td">Emotional Stability</p>
                    <p className="td"></p>
                  </div>
                  <div className="d-flex flex-row justify-content-between items">
                    <p className="td">Inovative</p>
                    <p className="td"></p>
                  </div>
                </div>
              </div>
              <div className="scales-div d-flex flex-column gap-1">
                <div className="">
                  <p className="header-text">SCALES</p>
                </div>
                <div className="d-flex flex-column">
                  <p className="td">
                    <span>5</span> - Excellent degree of observed trait
                  </p>
                  <p className="td">
                    <span>4</span> - Good level of observed trait
                  </p>
                  <p className="td">
                    <span>3</span> - Fair but acceptable level of observed trait
                  </p>
                  <p className="td">
                    <span>2</span> - Poor level of observed trait
                  </p>
                  <p className="td">
                    <span>1</span> - No observed trait
                  </p>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>total marks obtainable</th>
                    <th>total marks obtained</th>
                    <th>percantage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ height: "50px" }}>
                  {results?.slice(210, 213).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
              <div className="d-flex flex-column gap-2">
                    <div className="d-flex flex-row gap-1 flex-wrap td">
                      <p>House Master's Comments:</p>
                      <p className="comments">khe;rih4rhio</p>
                    </div>

                  <div className="d-flex flex-row gap-1 flex-wrap td">
                    <p>Class Teacher's Comments:</p>
                    <p className="comments">{results ? results[192] : ""} </p>
                  </div>

                <div className="d-flex flex-row gap-1 flex-wrap td">
                  <p>Principal's Comments:</p>
                  <p className="comments">{results ? results[193] : ""} </p>
                </div>
                <div className="d-flex flex-row gap-2">
                  <p>School Reopens: </p>
                  <p className="comments">{results ? results[191] : ""} </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </ResultDiv>
    </div>
  );
}
const ResultDiv = styled.div`
  width: 1000px;
  margin: auto;
  height: fit-content !important;
  background-color: white;
  .last{
    height: 27px;
  }
  .intro-header {
    border: 1px solid black;
    height: 50px;
    border-bottom: 0 !important;
    .student-name{
    border-bottom: 1px solid black;
  }
  }
  .header{
    gap: 50px;
  }
  .comments{
    text-decoration: underline !important;
  }
  span {
    font-weight: 600;
  }
  .no-bottom {
    border-bottom: 0 !important;
  }
  .items {
    border-bottom: 1px solid black;
    border-collapse: collapse;
  }
  .logo-div {
    height: 200px;
  }
  .affective-body {
    border-right: 1px solid black;
    border-left: 1px solid black;
  }
  .results-div {
    border: 1px solid black;
  }
  .performance-div {
    width: 70%;
    border-right: 1px solid black;
  }
  .activity-div {
    width: 30%;
  }
  .table {
    border-collapse: collapse !important;
    border: 1px solid black;
  }
  tr, td, tr, thead, tbody{
    border-collapse: collapse !important;

  }
  td {
    border: 1px solid black;
    white-space: nowrap;
    padding: 3px;
  }

  th,
  .th {
    font-weight: 500;
    text-align: center;
    text-transform: capitalize;
    font-size: 13px;
    border: 1px solid black !important;
  }
  .header-text {
    font-weight: 500;
    text-align: start;
    text-transform: capitalize;
    font-size: 13px;
  }
  h6 {
    font-weight: 600 !important;
  }
  td,
  .td {
    font-size: 13px;
  }
  p,
  h3,
  h6 {
    margin: 0 !important;
  }
  .results-table {
    border-collapse: collapse;
    thead {
      height: 250px !important;
    }
    th {
      text-align: center;
      white-space: nowrap;
      padding: 3px;
      .rotate {
        transform: rotate(-90deg);
      text-align: center !important;
        width: 50px;
        margin-top: -50px !important;
      }
    }
    .holder {
      width: 250px !important;
    }
  }
  .special-td {
    border-right: 0 !important;
    border-left: 0 !important;
  }
`;
