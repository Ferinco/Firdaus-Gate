import Sidebar from "../sidebar"
import { Icon } from '@iconify/react';
import { useState } from "react"
import styled from "styled-components"
export default function Navbar (){
    const [displaySide, setDisplaySide] = useState(false)
    function toggleDisplay(){
       setDisplaySide(!displaySide) 
    }
    return(
        <NAVBAR>
            <div className="menuBar" onClick={toggleDisplay}><Icon icon="fe:bar" color="gray" /></div>
            <div className="profileIcon"></div>
            {displaySide && (
                <Sidebar/>
            )}
        </NAVBAR>
    )
} 
const NAVBAR = styled.div `
border: 1px solid red;
`