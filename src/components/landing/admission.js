import styled from "styled-components";
import { Button } from "../custom/Button";

export default function AdmissionSection(){
    return(
        <Wrapper>
            <div className="container py-5 d-flex flex-column justify-content-center align-items-center gap-4">
            <h2 className="display-4">
                Have you Started your Admission process Already?
            </h2>
            <div className="buttons d-flex flex-row gap-2">
            <Button blue> Start Admssion</Button>
            <Button white> Continue Admssion</Button>
            </div>

            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
background-color: white !important;
h2{
    text-align: center;
}
`