// PRIMER FUNCION AL PRESIONAR CONVERTIR
let input = document.querySelector('.send');

// FUNCION PARA DESAPARECER LA PLANTILLA LA PRESIONAR CONVERTIR
 input.addEventListener('click', () => {
    let esto = document.querySelector('.first');
    let esto1 = document.querySelector('.app'); 
    esto.style.display = 'none'; esto1.style.display = 'flex';
  });
// SPINNER FUNCTION 
// input.addEventListener('click', () => {
//     esto.style.display = 'none';
//     var contenedor = document.getElementById('loading-container');
//     contenedor.style.visibility = 'visible';
//     contenedor.style.opacity = 'unset';})
let close = document.querySelector('.close');
let select = document.querySelector('.screen');
let Saldo = 0;
// function saldo(){
//    let entrada = parseFloat(document.getElementsByName("valor")[0].value);
//     if (isNaN(entrada)){alert("El valor ingresado no es un número válido.");
//     return;}
//     Saldo = Saldo + entrada; 
//     salida = parseFloat(document.getElementsByName("salida"));
//     salida = entrada;}

