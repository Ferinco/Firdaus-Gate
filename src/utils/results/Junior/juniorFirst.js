import styled from "styled-components";
import { useAppContext } from "../../../contexts/Context";
import generatePDF from "react-to-pdf";
import { useRef } from "react";
import { TheDate } from "../../../constants/thedate";
export default function JuniorFirst(props) {
  const { results } = props;
  const { owner } = props;
  const { session } = props;
  const { teacher } = props;
  const ResultRef = useRef();

  const testScores = props.results
    ?.slice(1, 109)
    ?.filter((_, index) => index % 6 === 0);
  const examScores = props.results
    ?.slice(2, 109)
    ?.filter((_, index) => index % 6 === 0);
  const totalScore = props.results
    ?.slice(6, 109)
    ?.filter((_, index) => index % 6 === 0);

  function addSuffix(number) {
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) {
      return number + "st";
    } else if (lastDigit === 2 && lastTwoDigits !== 12) {
      return number + "nd";
    } else if (lastDigit === 3 && lastTwoDigits !== 13) {
      return number + "rd";
    } else {
      return number + "th";
    }
  }
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
  console.log(testScores);
  return (
    <div className="d-flex flex-column gap-5">
      <div className="download-field d-flex flex-row px-5">
        <button
          className=""
          onClick={() =>
            generatePDF(ResultRef, {
              filename:
                props.owner.firstName +
                props.owner.admissionNumber +
                "First-Term",
            })
          }
        >
          download
        </button>
      </div>
      <ResultDiv className="d-flex flex-column gap-3 p-3" ref={ResultRef}>
        <img src="/images/result-header.png" className="logo-container" />
        <div className="d-flex flex-row intro-header align-items-center justify-content-between p-2">
          <div className="title">
            <p>Academic Year</p>
            <p className="academic-year">
              {props.session}/{Number(props.session) + 1}
            </p>
          </div>
          <div className="">
            <h6>FIRST TERM RESULT</h6>
          </div>
          <div className="title">
            <p>Admission Number</p>
            <p className="academic-year">{props.owner.admissionNumber}</p>
          </div>
          {/* <div className="item">{resultsData ? resultsData[0][0] : ""}</div> */}
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
                <td className="text-center">
                  {props.results ? props.results[110] : ""}
                </td>
                <td className="text-center">
                  {props.results ? props.results[113] : ""}
                </td>
                <td className="text-center">
                  {props.results ? props.results[116] : ""}
                </td>
              </tr>
              <tr>
                <td>No of Times Present</td>
                <td className="text-center">
                  {props.results ? props.results[111] : ""}
                </td>
                <td className="text-center">
                  {props.results ? props.results[114] : ""}
                </td>
                <td className="text-center">
                  {props.results ? props.results[117] : ""}
                </td>
              </tr>
              <tr>
                <td>No of Times Absent</td>
                <td className="text-center">
                  {props.results ? props.results[112] : ""}
                </td>
                <td className="text-center">
                  {props.results ? props.results[115] : ""}
                </td>
                <td className="text-center">
                  {props.results ? props.results[118] : ""}
                </td>
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
                <th rowSpan={2}>No. of Times Absent due to Illness</th>
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
                {props.results?.slice(122, 128).map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr>
                <td colSpan={3}>Cleanliness Rating</td>
                <td colSpan={3}>Remark</td>
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
                <th>
                  <p className="subject">marks obtainable</p>
                </th>
                <th>
                  <p className="subject">english language</p>
                </th>
                <th>
                  <p className="subject">mathimatics</p>
                </th>
                <th>
                  <p className="subject">yoruba</p>
                </th>
                <th>
                  <p className="subject">basic science</p>
                </th>
                <th>
                  <p className="subject">basic technology</p>
                </th>
                <th>
                  <p className="subject">physical & health edu</p>
                </th>
                <th>
                  <p className="subject">computer studies</p>
                </th>
                <th>
                  <p className="subject">home economics</p>
                </th>
                <th>
                  <p className="subject">agric science</p>
                </th>
                <th>
                  <p className="subject">I.R.S</p>
                </th>
                <th>
                  <p className="subject">Social Studies</p>
                </th>
                <th>
                  <p className="subject">Civic and Security Education</p>
                </th>
                <th>
                  <p className="subject">Creative and Cultural Arts</p>
                </th>
                <th>
                  <p className="subject">Business Studies</p>
                </th>
                <th>
                  <p className="subject">French</p>
                </th>
                <th>
                  <p className="subject">Arabic</p>
                </th>
                <th>
                  <p className="subject">Quran and Hadith</p>
                </th>
                <th>
                  <p className="subject">History</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cont. Asses. Scores</td>
                <td className="text-center">40</td>
                {testScores?.map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr>
                <td>Exam Scores</td>
                <td className="text-center">60</td>
                {examScores?.map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr>
                <td>Total (Weighted Average)</td>
                <td className="text-center">100</td>
                {totalScore?.map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr>
                <td colSpan={2}>
                  Average Score{" "}
                  <h6>{props.results ? props.results[136] : ""}</h6>
                </td>

                <td colSpan={4}>
                  Marks Obtainable{" "}
                  <h6>{props.results ? props.results[138] : ""}</h6>
                </td>
                <td colSpan={4}>
                  Marks Obtained{" "}
                  <h6>{props.results ? props.results[139] : ""}</h6>
                </td>
                <td colSpan={2}>
                  Percentage <h6>{props.results ? props.results[140] : ""}</h6>
                </td>
                <td colSpan={3}>
                  Position{" "}
                  <h6>{props.results ? addSuffix(props.results[141]) : ""}</h6>
                </td>

                <td colSpan={4}>
                  No. of Students in Class{" "}
                  <h6>{props.results ? props.results[109] : ""}</h6>
                </td>
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
                {props.results?.slice(128, 133).map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
            </tbody>
          </table>
          <div className="d-flex flex-row justify-content-between w-100 px-2 special-div">
            <p className="special-p">A-Excellent</p>
            <p className="special-p">B-Very Good </p>
            <p className="special-p">C-Good</p>
            <p className="special-p">D-Fair</p>
            <p className="special-p">E-Poor</p>
          </div>
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
                {props.results?.slice(133, 136).map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr className="last">
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex flex-column gap-2 stamp-div">
          <div className="d-flex flex-row gap-4 z-in">
            <div className="d-flex flex-row gap-2">
              <p>Class Teacher's Comments:</p>
              <p className="comments">
                {props.results ? props.results[120] : ""}
              </p>
            </div>
            {/* <div className="d-flex flex-row gap-2">
              <p>Signature/Date</p>
              <p className="comments">
                <img
                  src={props ? props.teacher.teacherSignature : ""}
                  className="signature-img"
                />
              </p>
            </div> */}
          </div>
          <div className="d-flex flex-row gap-4 z-in">
            <div className="d-flex flex-row gap-2">
              <p>Principal's Comments:</p>
              <p className="comments">
                {props.results ? props.results[121] : ""}
              </p>
            </div>
          </div>
          <div className="d-flex flex-row gap-2 z-in">
            <div className="d-flex flex-row gap-2">
              <p>Date:</p>
              <p className="comments">{TheDate()}</p>
            </div>
            <p>School Reopens: </p>
            <p className="comments">
              {props.results ? props.results[119] : ""}
            </p>
          </div>
          <div className="stamp-img">
            <img src="/images/furdaus-stamp.jpg" />
          </div>
        </div>
      </ResultDiv>
    </div>
  );
}
const ResultDiv = styled.div`
  width: auto;
  margin: auto;
  background-color: white;
  font-weight: 400;
  .special-div {
    border-top: 0 !important;
    border: 1px solid black;
    margin-top: -19px;
    font-size: 14px;
    font-weight: 500;
  }
  .student-name {
    border-bottom: 1px solid black;
  }
  .sub-head {
    border-bottom: 0;
  }
  .logo-container {
    height: 200px;
  }
  .table {
    border-collapse: collapse !important;
    border: 1px solid black;
  }
  td {
    border: 1px solid black;
    border-collapse: collapse !important;
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
`;
