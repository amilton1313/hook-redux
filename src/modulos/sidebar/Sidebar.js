import { faShuttleVan } from '@fortawesome/free-solid-svg-icons'
import React, {useState} from 'react'
import { Button } from 'react-bootstrap'

import LeftSideBar from './LeftSideBar'

const Sidebar = () => {

    const [mostrar, setMostrar] = useState(false)

    const handleToggle = () => {
        setMostrar(!mostrar)
    }

    return ( 
    <div>
        <Button onClick={() => handleToggle()}>Display</Button>
        <LeftSideBar classe={mostrar ? "left_sidebar left_sidebar-show" : "left_sidebar left_sidebar-hide"} mostrar={mostrar}/>
    </div> );
}
 
export default Sidebar;