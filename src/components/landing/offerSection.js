import styled from "styled-components";
import { Icon } from "@iconify/react";
export default function OfferSection(){
    return(
        <Container>
            <div className="container">
<div className="header d-flex flex-column justify-content-center align-items-center">
<h6 className="pre-header">Why choose us</h6>
<h2>Why you can should trust us with your ward(s)</h2>
</div>
<div className="body row">
<div className="col-md-4 d-flex flex-column">
    <h5>20+ years experience</h5>
    <div className="icon-div">    <Icon className="icon" icon="svg-spinners:clock" color="blue"/>
</div>

    <p>wuhhdiuher eifgieugriew gpiugreaw rjguksuewgptriuegwr w; yurtewr  </p>
</div>
<div className="col-md-4 d-flex flex-column">
<h5>Compitent workers</h5>
<div className="icon-div"><Icon className="icon" icon="mingcute:necktie-fill" color="blue" />
</div>

<p>jkhuir ghpitd3 upgt879tre ugpitgEew iur[ewry[uiewgriuier uiyiuperweui</p>
</div>
<div className="col-md-4 d-flex flex-column">
<h5>Accredited and certified</h5>
<div className="icon-div"><Icon className="icon" icon="mingcute:certificate-2-fill" color="blue"/>
</div>

<p>jkhuir ghpitd3 upgt879tre ugpitgEew iur[ewry[uiewgriuier uiyiuperweui</p>
</div>

</div>
</div>
        </Container>
    )
}
const Container = styled.div`
margin-top: 100px;

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