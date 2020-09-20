import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BotaoLinha = ({disabled, classe, onClick, icone}) => {

    return (
        <Button disabled={disabled} className={classe} onClick={onClick}><FontAwesomeIcon icon={icone} /></Button>
      );
}
 
export default BotaoLinha;

