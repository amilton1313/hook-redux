const SOMA = '+'
const SUBTRACAO = '-'
const DIVISAO = '/'
const MULTIPLICACAO = '*'


function CalculadoraService() {
    function calcular(numero1, numero2, operacao) {

        let resultado

        switch (operacao) {
            case SOMA:
                return resultado = numero1 + numero2

            case SUBTRACAO:
                return resultado = numero1 - numero2   
            
            case DIVISAO:
                return resultado = numero1 / numero2     

            case MULTIPLICACAO:
                return resultado = numero1 * numero2 
                
            default:
                return 0    
        }

        return resultado
    }

    function concatenarNumero(numAtual, numConcat) {

        // 0 ou null reincia valor
        if (numAtual === '0' || numAtual === null) {
            numAtual = ''
        }

        // . já existente retorna 
        if (numConcat === '.' && numAtual === '') {
            return '0.'
        }

        if (numConcat === '.' && numAtual.indexOf('.') > -1) {
            return numAtual
        }

        return numAtual + numConcat

    }

    

    return [
        calcular,
        concatenarNumero,
        SOMA,
        SUBTRACAO,
        DIVISAO,
        MULTIPLICACAO
    ]
}

export default CalculadoraService