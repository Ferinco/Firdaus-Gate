import styled from "styled-components";
import { Button } from "../custom/Button";

export default function AdmissionSection(){
    return(
        <Wrapper>
            <div className="container py-5 d-flex flex-column justify-content-center align-items-center">
            <h2 className="display-3 text-align-center">
                Have you started your admission process already?
            </h2>
            <div className="buttons d-flex flex-row gap-2">
            <Button blue> Start Admssion</Button>
            <Button > Continue Admssion</Button>
            </div>

            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
height: 400px;
`