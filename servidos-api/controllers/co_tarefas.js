const { v4 } = require('uuid')

let tarefas = [
    {id: 1, nome: 'aaaaaa', concluida: true},
    {id: 2, nome: 'bbbbbb', concluida: false},
    {id: 3, nome: 'cccccc', concluida: true},
    {id: 4, nome: 'dddddd', concluida: false},
    {id: 5, nome: 'eeeeee', concluida: false},
    {id: 6, nome: 'ffffff', concluida: false}
]

function listarTarefa (req, res) {

const id = req.params.id
    
const tarefa = tarefas.filter(tarefa => tarefa.id === parseInt(id))

if (tarefa.length === 0) {
    res.status(404).json({err: 'Tarefa não encontrada'})
}

res.json(tarefa[0])
}


function listarTarefas (req, res) {
    if (tarefas.length === 0) {
        res.status(404).json({err: 'Não há tarefas cadastradas'})
    }
    
    res.json(tarefas)
}

function cadastrarTarefa (req, res) {
    if (!req.body['nome'] && !req.body['concluida']) {
        res.status(400).json({err: 'Requisição inválida.'})
    }
    const tarefa = {
        id: v4(),
        nome: req.body['nome'],
        concluida: req.body['concluida']
    }
    tarefas.push(tarefa)
    res.status(200).json({msg: 'Cadastro efetuado com sucesso!', tarefa})
}

function atualizartarefa(req, res) {
    const id = req.params.id
    tarefas = tarefas.map(tarefa => {
        if (tarefa.id === parseInt(id)) {
            tarefa.nome = req.body.nome
        }
        return tarefa
    })

    res.status(200).json({msg: 'Alteração efetuada com sucesso!', tarefas})
}

function deletarTarefa(req, res) {
    const id = req.params.id
    tarefas = tarefas.filter(tarefa => tarefa.id !== parseInt(id))

    res.status(200).json({msg: 'Exclusão efetuada com sucesso!', tarefas})
}

function concluirTarefa(req, res) {
    const id = req.params.id
    tarefas = tarefas.map(tarefa => {
        if (tarefa.id === parseInt(id)) {
            tarefa.concluida = !tarefa.concluida
        }
        return tarefa
    })
    res.status(200).json({msg: 'Alteração efetuada com sucesso!', tarefas})
}


module.exports = {
    listarTarefa,
    listarTarefas,
    cadastrarTarefa,
    atualizartarefa,
    deletarTarefa,
    concluirTarefa

}
    
