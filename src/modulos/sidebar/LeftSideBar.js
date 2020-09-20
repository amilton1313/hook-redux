import React, {useState} from 'react'
import { Button } from 'react-bootstrap'

import './sidebar.css'

const LeftSideBar = ({classe, mostrar}) => {
    return ( 
    <div className={classe}>
        LeftSideBar = {mostrar}
    </div> );
}
 
export default LeftSideBar;

