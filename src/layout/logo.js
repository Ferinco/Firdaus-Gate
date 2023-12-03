import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { PATH_PAGE } from '../routes/paths';
export default function Logo(){
    return(
        <LOGO>
            <Link to={PATH_PAGE.home} className='react-router-link'>
            <div className="image">
            <img src="/images/logo.png"/>
            </div>
            <div className="text d-flex flex-column">
                <h6 className='m-0'>FIRDAUS GATE <br/>MODEL SCHOOLS</h6>
              
            </div>
            </Link>
        </LOGO>
    )
}
const LOGO = styled.div`
.react-router-link{
    display:flex;
flex-direction:row;
gap:10px;
&:hover{
    background-color: inherit !important;
}
}
cursor: pointer;
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
    color: black !important;
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
    /* display:none !important; */
  }
    }
`