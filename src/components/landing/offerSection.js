import styled from "styled-components";

export default function OfferSection(){
    return(
        <Container>
            <div className="container">
<div className="header d-flex flex-column justify-content-center align-items-center">
<h6>Why choose us</h6>
<h2>why you can should trust us with your ward(s)</h2>
</div>
<div className="body row">
<div className="col-md-4 d-flex flex-column">
    <h5>20 years experience</h5>
    <p>wuhhdiuher eifgieugriew gpiugreaw rjguksuewgptriuegwr w; yurtewr  </p>
</div>
<div className="col-md-4 d-flex flex-column">
<h5>compitentworkers</h5>
<p>jkhuir ghpitd3 upgt879tre ugpitgEew iur[ewry[uiewgriuier uiyiuperweui</p>
</div>
<div className="col-md-4 d-flex flex-column">
<h5>Accredited and certified</h5>
<p>jioyewo oih[ioerw oih'ioy[ ewi'ohiorhyiohwfkjh iugiurgwiuer eugrlewgl rgewipregwup </p>
</div>

</div>
</div>
        </Container>
    )
}
const Container = styled.div`
margin-top: 100px;


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
@media screen and (max-width: 768px){
    .body{
       padding:0 20px; 
    }
}
`