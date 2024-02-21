import styled from "styled-components";
import { Button } from "../custom/Button";
import { Link } from "react-router-dom";
import { PATH_PAGE } from "../../routes/paths";

export default function AdmissionSection(){
    return(
        <Wrapper>
        <div className="join-us p-5 d-flex flex-column justify-content-center align-items-center">
<h2>Ready to Join Us?</h2>
<p>We offer various services that will equip you with then knowledge and skills you need to become a world class individual in every sphere of your life. Applly to be a student with just simple steps now.</p>
<Button white><Link to={PATH_PAGE.admission} className="react-router-link">Start Admission</Link></Button>
        </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
background-color: white !important;
.join-us{
    text-align: center;
    p{
      max-width: 700px;
    }

  }
h2 {
      font-size: 45px ;
      font-weight: 800;
      text-align: center;
      @media (max-width: 768px) {
          font-size: 36px !important;
        }
    }
`