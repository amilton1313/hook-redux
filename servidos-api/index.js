const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { listarTarefa, listarTarefas, cadastrarTarefa,
        atualizartarefa, deletarTarefa, concluirTarefa } = require('./controllers/co_tarefas')

const app = express()
const port = 3001

app.use(cors())
app.use(bodyParser.json())

function naoImplementado (req, res) {
    res.status(501).json({erro: 'Não implementado'})
}


app.get('/tarefas', listarTarefas)
app.get('/tarefas/:id', listarTarefa)
app.post('/tarefas', cadastrarTarefa)
app.put('/tarefas/:id', atualizartarefa)
app.delete('/tarefas/:id', deletarTarefa)
app.put('/tarefas/:id/concluir', concluirTarefa)

app.listen(port, () => console.log(`Serviror ON:${port}`))