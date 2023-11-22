import styled from "styled-components"
export default function ContactUs (){
    return(
<Contact>
<div className="header row">
    <h2 className="display-5 col-md-6">
        Always Be In Touch With Us!
    </h2>
    <div className="d-flex flex-column col-md-6 right">
        <div className="media d-flex flex-row gap-3">
<div className="medium"></div>
<div className="medium"></div>
<div className="medium"></div>
<div className="medium"></div>

        </div>
        <div>

        <p>We are alwsys available to take your calls and messages at all times. we take out clients/ parents/ students as our number one priorities</p>
        </div>
    </div>
</div>
</Contact>
    )
}
const Contact = styled.div`
height: 400px;
border: 1px solid red;
.medium{
    background-color: red;
    height: 50px;
    width:50px;
    border-radius: 50%;
}
.right{
    max-width: 400px;
}
`