/**
 * Calculo de contrato de veiculo com juros
 * @param Entrada Entrada do cliente
 * @param totalVeiculo Valor total do veiculo
 * @param Juros Juros aplicados ao mes
 * @param parcelas 
 * @returns Retorna o valor financiado
 */


var CalcularContratoVeiculo = (Entrada, totalVeiculo, Juros, parcelas) => {
    Juros = Juros > 1 ? Juros / 100 : Juros
    var Financiar = totalVeiculo - Entrada
    return Entrada + (Financiar * Math.pow(1 + Juros, parcelas))
}

var entrada = 1
var totalVeiculo = 2
var Juros = 3
var parcelas = 4

console.log(CalcularContratoVeiculo(entrada, totalVeiculo, Juros, parcelas))