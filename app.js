 //Aqui tenemos la variables del programa

let numeroUno = 10;

let stringUno = '110';

let numeroSegundo = 30;

let stringSegundo = '30';

let numeroTercero = 10;

let stringTercero = '10';



//Aqui tenemos las comparaciones de las variables del programa
//Comparamos si las variables son iguales o no con simbolo ==
if (numeroUno == stringUno) {
 //Si son iguales se imprime el mensaje
  console.log('Las variables numeroUno y stringUno tienen el mismo valor, pero tipos diferentes')

} else {
//sino enviamos mensaje de error o advertencia
  console.log('Las variables numeroUno y stringUno no tienen el mismo valor')

}

 
//si los tipos son identicos con === se imprime el mensaje
if (numeroSegundo === stringSegundo) {

  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')

} else {

  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')

}
// si los tipos son diferentes con !== se imprime el mensaje
if(numeroTercero != stringTercero){
  console.log('Las variables numeroTercero y stringTercero tienen el mismo valor, pero tipos diferentes')
}else{
  console.log('Las variables numeroTercero y stringTercero no tienen el; mismo valor')
}