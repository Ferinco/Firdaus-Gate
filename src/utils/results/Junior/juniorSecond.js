import styled from "styled-components";
import { useAppContext } from "../../../contexts/Context";
import generatePDF from "react-to-pdf";
import { useRef } from "react";


export default function JuniorSecond(props) {
  const { results } = props;
const ResultRef = useRef()


const testScores = props.results?.slice(1, 103)?.filter((_, index) => index % 6 === 0);
const examScores = props.results?.slice(2, 103)?.filter((_, index) => index % 6 === 0);
const totalScores = props.results?.slice(3, 103)?.filter((_, index) => index % 6 === 0);
const secondTotal = props.results?.slice(4, 103)?.filter((_, index) => index % 6 === 0);
const weightedAverage = props.results?.slice(6, 103)?.filter((_, index) => index % 6 === 0);


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

console.log(testScores)
  return (
    <div className="d-flex flex-column gap-5">
    <button onClick={()=>(
        generatePDF(ResultRef,{filename: "second-term-results"}  )
    )}>download</button>
    <ResultDiv className="d-flex flex-column gap-3 p-3" ref={ResultRef}>

<img src="/images/result-header.png" className="logo-container"/>
      <div className="d-flex flex-row intro-header align-items-center justify-content-between p-2">
        <div className="title">
          <p>Academic Year</p>
        </div>
        <div className="">
          <h6>SECOND TERM RESULT</h6>
        </div>
        <div className="title">
          <p>Admission Number</p>
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
              <td className="text-center">{props.results ? props.results[104]: ""}</td>
              <td className="text-center">{props.results ? props.results[107]: ""}</td>
              <td className="text-center">{props.results ? props.results[110]: ""}</td>
            </tr>
            <tr>
              <td>No of Times Present</td>
              <td className="text-center">{props.results ? props.results[105]: ""}</td>
              <td className="text-center">{props.results ? props.results[108]: ""}</td>
              <td className="text-center">{props.results ? props.results[111]: ""}</td>
            </tr>
            <tr>
              <td>No of Times Absent</td>
              <td className="text-center">{props.results ? props.results[106]: ""}</td>
              <td className="text-center">{props.results ? props.results[109]: ""}</td>
              <td className="text-center">{props.results ? props.results[112]: ""}</td>
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
              {props.results?.slice(116, 122).map((score) => (
                <td className="text-center">{score}</td>
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
                <p className="subject">Civic Education</p>
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cont. Asses. Scores</td>
             <td className="text-center">30</td>
             {
                testScores?.map((score)=>(
                    <td className="text-center">{score}</td>
                ))
             }
            </tr>
            <tr>
              <td>Sum. Test Scores</td>
              <td className="text-center">70</td>
             {
                examScores?.map((score)=>(
                    <td className="text-center">{score}</td>
                ))
             }
            </tr>
            <tr>
              <td>Total (2nd Term)</td>
              <td className="text-center">100</td>
             {
                totalScores?.map((score)=>(
                    <td className="text-center">{score}</td>
                ))
             }
            </tr>
            <tr>
              <td>First Term Scores (if any)</td>
              <td className="text-center">100</td>
             {
                secondTotal?.map((score)=>(
                    <td className="text-center">{score}</td>
                ))
             }
            </tr>
            <tr>
              <td>Total (Weighted Average)</td>
              <td className="text-center">100</td>
             {
                weightedAverage?.map((score)=>(
                    <td className="text-center">{score}</td>
                ))
             }
            </tr>
            <tr>
            <td colSpan={2}>Average Score <h6>{props.results ? props.results[130] : ""}</h6></td>

              <td colSpan={4}>Marks Obtainable <h6>{props.results? props.results[132]: ""}</h6></td>
              <td colSpan={4}>Marks Obtained <h6>{props.results? props.results[133]: ""}</h6></td>
              <td colSpan={2}>Percentage <h6>{props.results? props.results[134]: ""}</h6></td>
              <td colSpan={3}>Position <h6>{props.results? addSuffix(props.results[135]): ""}</h6></td>

              <td colSpan={4}>No. of Students in Class <h6>{props.results? props.results[103]: ""}</h6></td>
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
              {
                props.results?.slice(122, 127).map((score)=>(
                    <td className="text-center">{score}</td>
                ))
              }
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
            {
                props.results?.slice(127, 130).map((score)=>(
                    <td className="text-center">{score}</td>
                ))
              }
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
        <p className="comments">{props.results ? props.results[114] : ""}</p>
        </div>
        <div className="d-flex flex-row gap-2">
        <p>Signature/Date</p>
        <p className="comments">khe;rih4rhio</p>
        </div>
      </div>
      <div className="d-flex flex-row gap-4">
    <div className="d-flex flex-row gap-2">
        <p>Principal's/ Head Teacher's/Master's Comments:</p>
        <p className="comments">{props.results ? props.results[115] : ""}</p>
        </div>
        <div className="d-flex flex-row gap-2">
        <p>Signature/Date</p>
        <p className="comments">khe;rih4rhio</p>
        </div>
      </div>
      <div className="d-flex flex-row gap-2">
        <p>School Reopens: </p>
        <p className="comments">{props.results ? props.results[113] : ""}</p>
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
  .special-div{
    border-top: 0 !important;
    border: 1px solid black;
    margin-top: -19px;
    font-size: 14px;
    font-weight: 500;
  }
  .student-name{
    border-bottom: 1px solid black;
  }
  .sub-head{
    border-bottom: 0;
  }
  .logo-container{
    height: 200px;
  }
  .table{
    border-collapse: collapse !important;
    border: 1px solid black;
  }
  td{
    border: 1px solid black;
    border-collapse: collapse !important;

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