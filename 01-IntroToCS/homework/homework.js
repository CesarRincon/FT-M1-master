'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let resultado = 0;
  let arrNum = num.split('').reverse().join('')

  for (let i = 0; i < num.length; i++) {
    resultado += arrNum[i] * 2 ** i
  }
  
  return resultado
}


function DecimalABinario(num) {
  // tu codigo aca
  return num.toString(2)

}



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}