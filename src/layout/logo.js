import styled from 'styled-components'
export default function Logo(){
    return(
        <LOGO>
            <img src="/images/logo.png"/>
        </LOGO>
    )
}
const LOGO = styled.div`
height: 50px;
width:50px;
margin-top: -5px !important;
img{object-fit:cover;
display:block;
width:100%;
height:100%;}

`