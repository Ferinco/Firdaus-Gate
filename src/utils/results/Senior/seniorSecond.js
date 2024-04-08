import styled from "styled-components";
import { useAppContext } from "../../../contexts/Context";
import { useRef } from "react";
import generatePDF from "react-to-pdf";
export default function SeniorSecond(props) {
  const resultRef = useRef();
  const { results } = props;
  const { owner } = props;
  const { session } = props;
  const { teacher } = props;

  const getClass = (user) => {
    switch (user?.currentClass) {
      case "FGJSC_001":
        return "JSS 1";
        break;
      case "FGJSC_002":
        return "JSS 2";
        break;
      case "FGJSC_003":
        return "JSS 3";
        break;
      case "FGSSC_001":
        return "SSS 1";
        break;
      case "FGSSC_002":
        return "SSS 2";
        break;
      case "FGSSC_003":
        return "SSS 3";
        break;
      case "FGBSC_001":
        return "Basic 1";
        break;
      case "FGBSC_002":
        return "Basic 2";
        break;
      case "FGBSC_003":
        return "Basic 3";
        break;
      case "FGBSC_004":
        return "Basic 4";
        break;
      case "FGBSC_005":
        return "Basic 5";
        break;
      case "FGKGC_001":
        return "K.G 1";
        break;
      case "FGKGC_003":
        return "K.G 2";
        break;
      case "FGNSC_001":
        return "Nursery 1";
        break;
      case "FGNSC_002":
        return "Nursery 2";
        break;
      default:
        return "None"; // Provide a default value if none of the cases match
    }
  };
  return (
    <div className="d-flex flex-column gap-5">
      <div className="download-field d-flex flex-row px-5">
        <button
          className=""
          onClick={() =>
            generatePDF(resultRef, {
              filename:
                props.owner.firstName +
                props.owner.admissionNumber +
                "Second-Term",
            })
          }
        >
          download
        </button>
      </div>
      <ResultDiv className="d-flex flex-column gap-3 p-3" ref={resultRef}>
        <img src="/images/result-header.png" className="logo-container" />
        <div className="intro-div d-flex flex-column">
          <div className="d-flex flex-row intro-header align-items-center justify-content-between p-2">
            <div className="title">
              <p>Academic Year</p>
              <p className="academic-year">{props.session}</p>
            </div>
            <div className="">
              <h6>SECOND TERM RESULT</h6>
            </div>
            <div className="title">
              <p>Admission Number</p>
              <p className="academic-year">{props.owner.admissionNumber}</p>
            </div>
          </div>
          <div className="d-flex flex-row intro-header align-items-center justify-content-between p-2">
            <div className="title w-75 d-flex flex-row">
              <p className="" style={{ width: "10%" }}>
                Name
              </p>
              <p className="student-name" style={{ width: "80%" }}>
                {props.owner.lastName} {props.owner.firstName}{" "}
                {props.owner.middleName}
              </p>
            </div>
            <div className="title w-25 d-flex flex-row">
              <p style={{ width: "30%" }}>Class</p>
              <p className="student-name" style={{ width: "50%" }}>
                {getClass(props.owner)}
              </p>
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
                      <p className="rotate">Total (Second Term)</p>
                    </th>
                    <th>
                      <p className="rotate">First Term Scores</p>
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
                    <th></th>
                  </tr>
                  <tr>
                    <td>english language</td>
                    {props.results?.slice(1, 5).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                    {props.results?.slice(8, 10).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>{" "}
                  <tr>
                    <td>Mathematics</td>
                    {props.results?.slice(10, 14).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                    {props.results?.slice(17, 19).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>biology</td>
                    {props.results?.slice(19, 23).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                    {props.results?.slice(26, 28).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>physics</td>
                    {props.results?.slice(28, 32).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                    {props.results?.slice(35, 37).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>chemistry</td>
                    {props.results?.slice(37, 41).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                    {props.results?.slice(44, 46).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Further Mathematics</td>
                    {props.results?.slice(46, 50).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                    {props.results?.slice(53, 55).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Yoruba Language</td>
                    {props.results?.slice(55, 59).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                    {props.results?.slice(62, 64).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>civic education</td>
                    {props.results?.slice(64, 68).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                    {props.results?.slice(71, 73).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>computer studies</td>
                    {props.results?.slice(73, 77).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                    {props.results?.slice(80, 82).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>data processing</td>
                    {props.results?.slice(82, 86).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                    {props.results?.slice(89, 91).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>I.R.S</td>
                    {props.results?.slice(91, 95).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                    {props.results?.slice(98, 100).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>arabic</td>
                    {props.results?.slice(100, 104).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                    {props.results?.slice(107, 109).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>economics</td>
                    {props.results?.slice(109, 113).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                    {props.results?.slice(116, 118).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Government</td>
                    {props.results?.slice(118, 122).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                    {props.results?.slice(125, 127).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Geography</td>
                    {props.results?.slice(127, 131).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                    {props.results?.slice(134, 136).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>agricultural science</td>
                    {props.results?.slice(136, 140).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                    {props.results?.slice(143, 145).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>literature in english</td>
                    {props.results?.slice(145, 149).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                    {props.results?.slice(152, 154).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Financial Accounting</td>
                    {props.results?.slice(154, 158).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                    {props.results?.slice(161, 163).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>commerce</td>
                    {props.results?.slice(163, 167).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                    {props.results?.slice(170, 172).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>QURAN</td>
                    {props.results?.slice(172, 176).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
                    {props.results?.slice(179, 181).map((score) => (
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
                      {props.results?.slice(194, 200).map((score) => (
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
                      {props.results?.slice(205, 208).map((score) => (
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
                      {props.results?.slice(200, 205).map((score) => (
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
                    {props.results?.slice(215, 218).map((score) => (
                      <td className="text-center">{score}</td>
                    ))}
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
              <table className="w-100 table psycho">
                <thead>
                  <tr>
                    <th>PSYCHOMOTOR/PERSONAL SKILLS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <p className="d-flex justify-content-between ">
                      <p>Literary</p>
                      <p className="">
                        {props.results ? props.results[218] : ""}
                      </p>
                    </p>
                  </tr>
                  <tr>
                    <p className="d-flex justify-content-between">
                      <p>Quran memorisation</p>
                      <p className="">
                        {props.results ? props.results[219] : ""}
                      </p>
                    </p>
                  </tr>
                  <tr>
                    <p className="d-flex justify-content-between w-100">
                      <p>Technical</p>
                      <p className="">
                        {props.results ? props.results[220] : ""}
                      </p>
                    </p>
                    <p className="d-flex justify-content-between w-100">
                      <p>Technical</p>
                      <p className="">
                        {props.results ? props.results[221] : ""}
                      </p>
                    </p>
                  </tr>
                  <tr>
                    <p className="d-flex justify-content-between w-100">
                      <p>Innovative</p>
                      <p className="">
                        {props.results ? props.results[222] : ""}
                      </p>
                    </p>{" "}
                    <p className="d-flex justify-content-between w-100">
                      <p>Arabiyya/Fighu</p>
                      <p className="">
                        {props.results ? props.results[223] : ""}
                      </p>
                    </p>
                  </tr>
                  <tr>
                    <p className="d-flex justify-content-between w-100">
                      <p>Sporting</p>
                      <p className="">
                        {props.results ? props.results[224] : ""}
                      </p>
                    </p>{" "}
                    <p className="d-flex justify-content-between w-100">
                      <p>Cultural</p>
                      <p className="">
                        {props.results ? props.results[225] : ""}
                      </p>
                    </p>
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
                    <p className="td">
                      {props.results ? props.results[226] : ""}{" "}
                    </p>
                  </div>
                  <div className="d-flex flex-row justify-content-between items">
                    <p className="td">Politeness</p>
                    <p className="td">
                      {props.results ? props.results[227] : ""}{" "}
                    </p>
                  </div>
                  <div className="d-flex flex-row justify-content-between items">
                    <p className="td">Attentiveness</p>
                    <p className="td">
                      {props.results ? props.results[228] : ""}{" "}
                    </p>
                  </div>
                  <div className="d-flex flex-row justify-content-between items">
                    <p className="td">Neatness</p>
                    <p className="td">
                      {props.results ? props.results[229] : ""}{" "}
                    </p>
                  </div>
                  <div className="d-flex flex-row justify-content-between items">
                    <p className="td">Initiative</p>
                    <p className="td">
                      {props.results ? props.results[230] : ""}{" "}
                    </p>
                  </div>
                  <div className="d-flex flex-row justify-content-between items">
                    <p className="td">Perseverance</p>
                    <p className="td">
                      {props.results ? props.results[231] : ""}{" "}
                    </p>
                  </div>
                  <div className="d-flex flex-row justify-content-between items">
                    <p className="td">Team Work</p>
                    <p className="td">
                      {props.results ? props.results[232] : ""}{" "}
                    </p>
                  </div>
                  <div className="d-flex flex-row justify-content-between items">
                    <p className="td">Leadership Spirit</p>
                    <p className="td">
                      {props.results ? props.results[233] : ""}{" "}
                    </p>
                  </div>
                  <div className="d-flex flex-row justify-content-between items">
                    <p className="td">Relationship with Teachers</p>
                    <p className="td">
                      {props.results ? props.results[234] : ""}{" "}
                    </p>
                  </div>
                  <div className="d-flex flex-row justify-content-between items">
                    <p className="td">Attitude to Work</p>
                    <p className="td">
                      {props.results ? props.results[235] : ""}{" "}
                    </p>
                  </div>
                  <div className="d-flex flex-row justify-content-between items">
                    <p className="td">Health</p>
                    <p className="td">
                      {props.results ? props.results[226] : ""}{" "}
                    </p>
                  </div>
                  <div className="d-flex flex-row justify-content-between items">
                    <p className="td">Emotional Stability</p>
                    <p className="td">
                      {props.results ? props.results[227] : ""}{" "}
                    </p>
                  </div>
                  <div className="d-flex flex-row justify-content-between items">
                    <p className="td">Inovative</p>
                    <p className="td">
                      {props.results ? props.results[228] : ""}{" "}
                    </p>
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
                    {props.results?.slice(210, 213).map((score) => (
                      <td className="text-center academic-year">{score}</td>
                      ))}
                  </tr>
                </tbody>
              </table>
              <div className="d-flex flex-column gap-2 stamp-div">
                <div className="d-flex flex-row gap-1 flex-wrap td">
                  <p>House Master's Comments:</p>
                  <p className="comments reopens">
                    {props.results ? props.results[214] : ""}
                  </p>{" "}
                </div>

                <div className="d-flex flex-row gap-1 flex-wrap td">
                  <p>Class Teacher's Comments:</p>
                  <p className="comments reopens">
                    {props.results ? props.results[192] : ""}{" "}
                  </p>
                  <div className="d-flex flex-row gap-2">
                    <p>Signature/Date</p>
                    <p className="comments">
                      <img
                        src={props.teacher.teacherSignature}
                        className="signature-img"
                      />
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row gap-1 flex-wrap td">
                  <p>Principal's Comments:</p>
                  <p className="comments reopens">
                    {props.results ? props.results[193] : ""}{" "}
                  </p>
                </div>
                <div className="d-flex flex-row gap-2">
                  <p>School Reopens: </p>
                  <p className="comments reopens">
                    {props.results ? props.results[191] : ""}{" "}
                  </p>
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
  .psycho {
    .d-flex {
      font-size: 14px;
      margin-bottom: 0 !important;
      padding: 3px 5px !important;
      border-bottom: 1px solid black;
    }
    border-bottom: 0 !important;
  }
  .last {
    height: 27px;
  }
  .intro-header {
    border: 1px solid black;
    height: 50px;
    border-bottom: 0 !important;
    .student-name {
      border-bottom: 1px solid black;
    }
  }
  .header {
    gap: 50px;
  }
  .comments {
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
    .d-flex {
      font-size: 14px;
      margin-bottom: 0 !important;
      padding: 3px 5px !important;
    }
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
  tr,
  td,
  tr,
  thead,
  tbody {
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
      width: auto !important;
    }
  }
  .special-td {
    border-right: 0 !important;
    border-left: 0 !important;
  }
`;
