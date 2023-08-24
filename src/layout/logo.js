import styled from 'styled-components'
export default function Logo(){
    return(
        <LOGO>
            <div className="image">
            <img src="/images/logo.png"/>
            </div>
            <div className="text d-flex flex-column">
                <h6>FIRDAUS GATE</h6>
                <h6>MODEL SCHOOLS</h6>
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
.text{
    line-height: 0.7 !important;
    h6{
        font-weight: 600 !important;
    }
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