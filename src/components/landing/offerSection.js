import styled from "styled-components";
import { Icon } from "@iconify/react";
export default function OfferSection(){
    return(
        <Container>
            <div className="container py-5">
<div className="header d-flex flex-column justify-content-center align-items-center">
<h6 className="pre-header">Why choose us?</h6>
<h2>Why you Should Trust us With your Ward(s)</h2>
</div>
<div className="body row">
<div className="col-md-4 d-flex flex-column">
    <h5>20+ years experience</h5>
<div className="image"></div>
    <p>For over 20 years, we have been in operation and have delivered well!</p>
</div>
<div className="col-md-4 d-flex flex-column">
<h5>Compitent workers</h5>
<div className="image"></div>

<p>Our workers are well trained and experienced in their respective fields.</p>
</div>
<div className="col-md-4 d-flex flex-column">
<h5>Accredited and certified</h5>
<div className="image"></div>

<p>Our school is government screened, accredited and certified.</p>
</div>

</div>
</div>
        </Container>
    )
}
const Container = styled.div`
background: white !important;


h5{
    font-size: 21px;
}
.header{
    h2{
        font-size: 45px;
        max-width: 600px;
        text-align: center;
    }
}
.image{
    border:1px solid red;
    width:250px;
    height:200px;
}
.body{
    .d-flex{
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 50px;
        p{
            margin-top: 20px;
        }
    }
}
.icon{
    font-size: 40px;
    
}
.icon-div{
    padding:10px;
    border-radius: 5px;
    background-color: white;
}
@media screen and (max-width: 768px){
    .body{
       padding:0 20px; 
    }
    h2{
        font-size: 36px !important;
    }
}
`