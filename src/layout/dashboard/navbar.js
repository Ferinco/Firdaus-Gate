import Sidebar from "./sidebar"
import { Icon } from '@iconify/react';
import { useState } from "react"
import styled from "styled-components"
export default function Navbar (){
    const [displaySide, setDisplaySide] = useState(false)
    const [displaySign, setDisplaySign]= useState(false)
    function toggleDisplayMenu(){
       setDisplaySide(!displaySide) 
    }
    function toggleDisplaySign(){
        setDisplaySign(!displaySign) 
     }
    return(
        <NAVBAR>
            <div className="menuBar" onClick={toggleDisplayMenu}><Icon icon="fe:bar" color="gray" /></div>
            <div className="profileIcon" onClick={toggleDisplaySign}><Icon icon="iconamoon:profile-fill" color="gray" /></div>
            {displaySide && (
                <Sidebar/>
            )}
            {displaySign && (
                <ul className="sign-nav">
                    <li>Parent</li>
                    <li>Log out</li>
                </ul>
            )}
        </NAVBAR>
    )
} 
const NAVBAR = styled.div `
background-color: rgb(219, 219, 219);
display:flex;
flex-direction: row;
justify-content: space-between;
padding: 10px 20px;
@media screen and (min-width: 601px) {
  .menuBar{
    display: none;
  }
  .profileIcon{
   float: right !important;
  }

}


.sign-nav{
    display: flex;
    flex-direction: column;
    li{
        list-style: none;
    }
}
`