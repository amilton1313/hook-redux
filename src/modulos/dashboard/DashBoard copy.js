import React, { useState } from 'react'
import Chart from 'react-google-charts'

const DashBoard = () => {

  const TITULO = 'Quantidade de cadastros primeiro semestre'

  const [dados, setDados] = useState([
    ['Mês', 'Quantidade'],
    ['Janeiro', 33],
    ['Fevereiro', 68],
    ['Março', 49],
    ['Abril', 80],
    ['Maio', 80],
    ['Junho', 27],
  ])

  return (
    <>
      <h1>DashBoard</h1>
      {/* <Chart
        width={'400px'}
        height={'300px'}
        chartType={'PieChart'}
        data={dados}
        options={{
          title: TITULO
        }}
      />

      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'PieChart'}
        data={dados}
        options={{
          title: TITULO,
          is3D: true
        }}
      /> */}

    </>
  )
}

export default DashBoard;
