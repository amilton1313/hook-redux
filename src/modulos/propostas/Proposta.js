import React, { useState } from 'react'
import { Table, Form } from 'react-bootstrap'

const Proposta = () => {
    return ( 
        <>
        <div>Cab</div>
        <div>
            <tr>
                <td>Imobiliária : </td>
                <td>EQUIPE ASSOCIADA</td>
            </tr>
            <tr>
                <td>Corretor : </td>
                <td><input type="text" id="fname" name="fname" /></td>
            </tr>
            <tr>
                <td>Empreendimento : </td>
                <td>
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </td>
            </tr>
        </div>
        </>
     );
}
 
export default Proposta;