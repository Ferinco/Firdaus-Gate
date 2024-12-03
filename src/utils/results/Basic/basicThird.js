import styled from "styled-components";
import { useAppContext } from "../../../contexts/Context";
import generatePDF from "react-to-pdf";
import { useRef } from "react";
import { BasicSubjects } from "../../../configs/subjectsConfig";
export default function BasicThird(props) {
  const { results } = props;
  const { owner } = props;
  const { session } = props;
  const { teacher } = props;
  const ResultRef = useRef();

  const testScores = props.results
    ?.slice(1, 133)
    ?.filter((_, index) => index % 6 === 0);
  const examScores = props.results
    ?.slice(2, 133)
    ?.filter((_, index) => index % 6 === 0);
  const totalScores = props.results
    ?.slice(3, 133)
    ?.filter((_, index) => index % 6 === 0);
  const secondTotal = props.results
    ?.slice(4, 133)
    ?.filter((_, index) => index % 6 === 0);
  const thirdTotal = props.results
    ?.slice(5, 133)
    ?.filter((_, index) => index % 6 === 0);
  const weightedAverage = props.results
    ?.slice(6, 133)
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
  console.log(weightedAverage);
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
                "Third-Term",
            })
          }
        >
          download
        </button>
      </div>
      <ResultDiv className="d-flex flex-column gap-3 p-3" ref={ResultRef}>
        <img src="/images/junior-header.jpg" className="logo-container" />
        <div className="d-flex flex-row intro-header align-items-center justify-content-between p-2">
          <div className="title">
            <p>Academic Year</p>
            <p className="academic-year">
              {props.session}/{Number(props.session) + 1}
            </p>
          </div>
          <div className="">
            <h6>THIRD TERM RESULT</h6>
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
                  {props.results ? props.results[134] : ""}
                </td>
                <td className="text-center">
                  {props.results ? props.results[137] : ""}
                </td>
                <td className="text-center">
                  {props.results ? props.results[140] : ""}
                </td>
              </tr>
              <tr>
                <td>No of Times Present</td>
                <td className="text-center">
                  {props.results ? props.results[135] : ""}
                </td>
                <td className="text-center">
                  {props.results ? props.results[138] : ""}
                </td>
                <td className="text-center">
                  {props.results ? props.results[141] : ""}
                </td>
              </tr>
              <tr>
                <td>No of Times Absent</td>
                <td className="text-center">
                  {props.results ? props.results[136] : ""}
                </td>
                <td className="text-center">
                  {props.results ? props.results[139] : ""}
                </td>
                <td className="text-center">
                  {props.results ? props.results[142] : ""}
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
                {props.results?.slice(146, 152).map((score) => (
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
                <th className="">
                  <p className="subject">Marks Obtainable</p>
                </th>
                {BasicSubjects.map((subject) => (
                  <th>
                    <p className="subject">{subject.name}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cont. Asses. Scores</td>
                <td className="text-center">30</td>
                {testScores?.map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr>
                <td>Exam Scores</td>
                <td className="text-center">70</td>
                {examScores?.map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr>
                <td>Total (Third Term)</td>
                <td className="text-center">100</td>
                {totalScores?.map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr>
                <td>First Term Scores (if any)</td>
                <td className="text-center">100</td>
                {secondTotal?.map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr>
                <td>Second Term Scores (if any)</td>
                <td className="text-center">100</td>
                {thirdTotal?.map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr>
                <td>Total (Weighted Average)</td>
                <td className="text-center">100</td>
                {weightedAverage?.map((score) => (
                  <td className="text-center">{score}</td>
                ))}
              </tr>
              <tr>
                <td colSpan={2}>
                  Average Score{" "}
                  <h6>{props.results ? props.results[160] : ""}</h6>
                </td>

                <td colSpan={4}>
                  Marks Obtainable{" "}
                  <h6>{props.results ? props.results[162] : ""}</h6>
                </td>
                <td colSpan={4}>
                  Marks Obtained{" "}
                  <h6>{props.results ? props.results[163] : ""}</h6>
                </td>
                <td colSpan={2}>
                  Percentage <h6>{props.results ? props.results[164] : ""}</h6>
                </td>
                <td colSpan={3}>
                  Position{" "}
                  <h6>{props.results ? addSuffix(props.results[165]) : ""}</h6>
                </td>

                <td colSpan={4} className="last-td">
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
                {props.results?.slice(152, 157).map((score) => (
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
                {props.results?.slice(157, 160).map((score) => (
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
          <div className="d-flex flex-row gap-4">
            <div className="d-flex flex-row gap-2">
              <p>Class Teacher's Comments:</p>
              <p className="comments">
                {props.results ? props.results[144] : ""}
              </p>
            </div>
            {/* <div className="d-flex flex-row gap-2">
              <p>Signature/Date</p>
              <p className="comments">
                <img
                  src={props?.teacher?.teacherSignature}
                  className="signature-img"
                />
              </p>
            </div> */}
          </div>
          <div className="d-flex flex-row gap-4">
            <div className="d-flex flex-row gap-2">
              <p>Principal's/ Head Teacher's/Master's Comments:</p>
              <p className="comments">
                {props.results ? props.results[145] : ""}
              </p>
            </div>
            <div className="d-flex flex-row gap-2">
              <p>Date:</p>
              <p className="comments"></p>
            </div>
          </div>
          <div className="d-flex flex-row gap-2">
            <p>School Reopens: </p>
            <p className="comments">
              {props.results ? props.results[143] : ""}
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
  width: 970px;
  margin: auto;
  background-color: white;
  font-weight: 400;
  .last-td {
    border-right: 0 !important;
  }
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
        width: 12px !important;
      }
    }
    td {
      text-align: start;
      white-space: nowrap;
      width: 12px !important;
      padding: 10px 2px;
    }
    .holder {
      width: 100px;
    }
  }
  .comments {
    text-decoration: underline !important;
  }
  .header {
    gap: 200px;
  }
  .last {
    height: 37px;
  }
`;
