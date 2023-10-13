import styled from 'styled-components'
export default function Logo(){
    return(
        <LOGO>
            <div className="image">
            <img src="/images/logo.png"/>
            </div>
            <div className="text d-flex flex-column">
                <h6>FIRDAUS GATE <br/>MODEL SCHOOLS</h6>
              
            </div>
        </LOGO>
    )
}
const LOGO = styled.div`
display:flex;
flex-direction:row;
gap:10px;
.image{
    height: 60px;
width:60px;
margin-top: -5px !important;
img{object-fit:cover;
display:block;
width:100%;
height:100%;
}
}
.text{
    justify-content: center;
    align-items: start;
    h6{
        line-height: 1.2 !important;
        font-weight: 600 !important;
    }
}
@media screen and (min-width: 992px) and (max-width: 1200px){
    .image{
        margin:0  !important;
    }
  .text{
    display:none !important;
  }
    }
`