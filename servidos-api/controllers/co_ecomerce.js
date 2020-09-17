const cidadesEstados = require('../cidades-estados.json')


function finalizarCompra(req, res) {
    console.log(req.body)
    res.send('ok')
}

function obterCidadesPorEstado(req,res) {
    const UF = req.params['UF'].toUpperCase()
    const dadosEstado = cidadesEstados.estados.filter(estado => estado.sigla === UF)
    if (dadosEstado.length === 0) {
        res.status(404).json({erro: `${UF} não é um estado válido`})
    }
    res.json(dadosEstado[0].cidades)
}

module.exports = {
    finalizarCompra,
    obterCidadesPorEstado
}