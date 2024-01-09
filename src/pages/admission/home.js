import styled from "styled-components";
import {  PATH_PAGE, PATH_AUTH } from "../../routes/paths";
import { Link } from "react-router-dom";
import { Button } from "../../components/custom";
export default function AdmissionHome(){
    return(
        <Container className="d-flex justify-content-center h-100">
<div className="card d-flex flex-column gap-2 p-3">
    <h4>Click to Perform Prefered Action</h4>
    <Button blue>
<Link to={PATH_PAGE.admissionForm} className="react-router-link">
Purchase Admission Form</Link>
    </Button>
    <Button blue>
        <Link to={PATH_PAGE.continue} className="react-router-link">Continue Application</Link>
    </Button>
    <Button blue> <Link className="react-router-link" to={PATH_AUTH.login}> Already a Student?</Link></Button>
</div>
        </Container>
    )
}
const Container = styled.div`
background:#f5f5f5;
height:100vh;
.card{
    max-width:500px;
    background: white;
    height: fit-content;
    margin:auto;
}

`