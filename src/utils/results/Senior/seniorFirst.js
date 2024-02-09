import styled from "styled-components";
import { useAppContext } from "../../../contexts/Context";

export default function SeniorFirst(){
    const { resultsData, setResultsData } = useAppContext();

    return(
        <div>
<ResultDiv className="d-flex flex-column gap-3 p-3">
<div className="logo-div"></div>
<div className="intro-div d-flex flex-column">
<div className=" d-flex flex-row justify-content-between">
    <div className="d-flex flex-row">
        <p>Admission Year</p>
        <p>2023</p>
    </div>
    <h6>
       first twem
    </h6>
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
                {
                    resultsData[0].slice(1,4).map((score)=>(
                        <td>{score}</td>
                    ))
                }

            </tr> <tr>
                <td>Mathematics</td>
                {
                    resultsData[0].slice(1,4).map((score)=>(
                        <td>{score}</td>
                    ))
                }

            </tr>
            <tr>
                <td>biology</td>
                {
                    resultsData[0].slice(1,4).map((score)=>(
                        <td>{score}</td>
                    ))
                }

            </tr>
            <tr>
                <td>physics</td>
                {
                    resultsData[0].slice(1,4).map((score)=>(
                        <td>{score}</td>
                    ))
                }

            </tr>
            <tr>
                <td>chemistry</td>
                {
                    resultsData[0].slice(1,4).map((score)=>(
                        <td>{score}</td>
                    ))
                }

            </tr>
            <tr>
                <td>further mathematics</td>
                {
                    resultsData[0].slice(1,4).map((score)=>(
                        <td>{score}</td>
                    ))
                }

            </tr>
            <tr>
                <td>physicyoruba language</td>
                {
                    resultsData[0].slice(1,4).map((score)=>(
                        <td>{score}</td>
                    ))
                }

            </tr>
            <tr>
                <td>civic education</td>
                {
                    resultsData[0].slice(1,4).map((score)=>(
                        <td>{score}</td>
                    ))
                }

            </tr>
            <tr>
                <td>computer studies</td>
                {
                    resultsData[0].slice(1,4).map((score)=>(
                        <td>{score}</td>
                    ))
                }

            </tr>
            <tr>
                <td>data processing</td>
                {
                    resultsData[0].slice(1,4).map((score)=>(
                        <td>{score}</td>
                    ))
                }

            </tr>
            <tr>
                <td>I.R.S</td>
                {
                    resultsData[0].slice(1,4).map((score)=>(
                        <td>{score}</td>
                    ))
                }

            </tr>
            <tr>
                <td>arabic</td>
                {
                    resultsData[0].slice(1,4).map((score)=>(
                        <td>{score}</td>
                    ))
                }

            </tr>
            <tr>
                <td>economics</td>
                {
                    resultsData[0].slice(1,4).map((score)=>(
                        <td>{score}</td>
                    ))
                }

            </tr>
            <tr>
                <td>government</td>
                {
                    resultsData[0].slice(1,4).map((score)=>(
                        <td>{score}</td>
                    ))
                }

            </tr>
            <tr>
                <td>geography</td>
                {
                    resultsData[0].slice(1,4).map((score)=>(
                        <td>{score}</td>
                    ))
                }

            </tr>
            <tr>
                <td>agricultural science</td>
                {
                    resultsData[0].slice(1,4).map((score)=>(
                        <td>{score}</td>
                    ))
                }

            </tr>
            <tr>
                <td>literature in english</td>
                {
                    resultsData[0].slice(1,4).map((score)=>(
                        <td>{score}</td>
                    ))
                }

            </tr>
            <tr>
                <td>Financial Accounting</td>
                {
                    resultsData[0].slice(1,4).map((score)=>(
                        <td>{score}</td>
                    ))
                }

            </tr>
            <tr>
                <td>commerce</td>
                {
                    resultsData[0].slice(1,4).map((score)=>(
                        <td>{score}</td>
                    ))
                }

            </tr>
            <tr>
                <td>QURAN</td>
                {
                    resultsData[0].slice(1,4).map((score)=>(
                        <td>{score}</td>
                    ))
                }

            </tr>
          </tbody>
      </table>
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
    </div>
    <div className="activity-div p-3">
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
       <table className="w-100">
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
       </table>
       <table className="w-100">
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
       </table>
    </div>
</div>
</div>

</ResultDiv>
        </div>
    )
}
const ResultDiv = styled.div`
width: 1000px;
margin: auto;
.logo-div{
    height: 200px;
    border: 1px solid red;
}
.results-div{
    border: 1px solid black;
    height: auto;
}
.performance-div{
    width: 75%;
}
.activity-div{
    border-left: 1px solid black !important;
    height: 100%;
    width: 25%;
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
    font-size: 13px;
    border: 1px solid black !important;
  }
  h6{
    font-weight: 600 !important;
  }
  td{
    font-size: 12px;
  }
  p,
  h3,
  h6 {
    margin: 0 !important;
  }
  .results-table{
    border-collapse: collapse;
    thead {
      height: 250px !important;
    }
    th {
        text-align: start;
      white-space: nowrap;
      p{
         transform: rotate(-90deg);
        width: 50px;
     }
    }
    .holder {
      width: 250px !important;
    }
  }

`