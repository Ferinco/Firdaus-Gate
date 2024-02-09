import styled from "styled-components";
import { useAppContext } from "../../../contexts/Context";

export default function SeniorFirst() {
  const { resultsData, setResultsData } = useAppContext();

  return (
    <div>
      <ResultDiv className="d-flex flex-column gap-3 p-3">
        <div className="logo-div"></div>
        <div className="intro-div d-flex flex-column">
          <div className=" d-flex flex-row justify-content-between">
            <div className="d-flex flex-row">
              <p>Admission Year</p>
              <p>2023</p>
            </div>
            <h6>first twem</h6>
            <div className="d-flex flex-row">
              <p>Admission Number</p>
              <p>2023</p>
            </div>
          </div>
          <div className=" d-flex flex-row justify-content-between">
            <div className="d-flex flex-row">
              <p>NAme of Student</p>
              <p>2023</p>
            </div>

            <div className="d-flex flex-row">
              <p>Class</p>
              <p>2023</p>
            </div>
          </div>
          <div className="results-div d-flex flex-row">
            <div className="performance-div p-3">
              <table className="results-table">
                <thead>
                  <tr>
                    <th className="holder"></th>
                    <th>
                      <p className="">Continous Assessment Scores</p>
                    </th>
                    <th>
                      <p className="">Exam Scores</p>
                    </th>
                    <th>
                      <p className="">Total (Weighted Average)</p>
                    </th>
                    <th>
                      <p className="">Position/Grade</p>
                    </th>
                    <th>
                      <p className="holder">Comments</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>max. obtainable</td>
                    <td>40</td>
                    <td>60</td>
                    <td>100</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>english language</td>
                    {resultsData[0].slice(1, 4).map((score) => (
                      <td>{score}</td>
                    ))}
                  </tr>{" "}
                  <tr>
                    <td>Mathematics</td>
                    {resultsData[0].slice(1, 4).map((score) => (
                      <td>{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>biology</td>
                    {resultsData[0].slice(1, 4).map((score) => (
                      <td>{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>physics</td>
                    {resultsData[0].slice(1, 4).map((score) => (
                      <td>{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>chemistry</td>
                    {resultsData[0].slice(1, 4).map((score) => (
                      <td>{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>further mathematics</td>
                    {resultsData[0].slice(1, 4).map((score) => (
                      <td>{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>physicyoruba language</td>
                    {resultsData[0].slice(1, 4).map((score) => (
                      <td>{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>civic education</td>
                    {resultsData[0].slice(1, 4).map((score) => (
                      <td>{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>computer studies</td>
                    {resultsData[0].slice(1, 4).map((score) => (
                      <td>{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>data processing</td>
                    {resultsData[0].slice(1, 4).map((score) => (
                      <td>{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>I.R.S</td>
                    {resultsData[0].slice(1, 4).map((score) => (
                      <td>{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>arabic</td>
                    {resultsData[0].slice(1, 4).map((score) => (
                      <td>{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>economics</td>
                    {resultsData[0].slice(1, 4).map((score) => (
                      <td>{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>government</td>
                    {resultsData[0].slice(1, 4).map((score) => (
                      <td>{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>geography</td>
                    {resultsData[0].slice(1, 4).map((score) => (
                      <td>{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>agricultural science</td>
                    {resultsData[0].slice(1, 4).map((score) => (
                      <td>{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>literature in english</td>
                    {resultsData[0].slice(1, 4).map((score) => (
                      <td>{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Financial Accounting</td>
                    {resultsData[0].slice(1, 4).map((score) => (
                      <td>{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>commerce</td>
                    {resultsData[0].slice(1, 4).map((score) => (
                      <td>{score}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>QURAN</td>
                    {resultsData[0].slice(1, 4).map((score) => (
                      <td>{score}</td>
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
                      <th>Sports and Athletics</th>
                      <th>Other Organised Activities</th>
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
                      {resultsData[0]?.slice(1, 7).map((score) => (
                        <td>{score}</td>
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
                      <td></td>
                      <td></td>
                      <td></td>
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
                    <td className="text-center">1298</td>
                    <td className="text-center">456</td>
                    <td className="text-center">78</td>
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
                    <p className="comments">khe;rih4rhio kjhui4rh iugiuewr iugpegr ugptgewreiurgei </p>
                  </div>

                <div className="d-flex flex-row gap-1 flex-wrap td">
                  <p>Principal's Comments:</p>
                  <p className="comments">nice report jkeep iy uo and so beyytere nes6 yterkm</p>
                </div>
                <div className="d-flex flex-row gap-2">
                  <p>School Reopens: </p>
                  <p className="comments">khe;rih4rhio</p>
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
    border: 1px solid red;
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
    border-collapse: collapse;
    border: 1px solid black;
  }
  td {
    border: 1px solid black;
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
      text-align: start;
      white-space: nowrap;
      p {
        transform: rotate(-90deg);
        width: 50px;
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
