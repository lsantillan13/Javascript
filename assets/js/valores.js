// MI CONSTANTE PARA EL MENU DE MONEDAS SELECCIONABLES (SELECT / COMBO)
const combo = [{
    // Para llamar un objeto de mi array
    // console.log  =  (  console.log   )
    // nombre de la constante (    console.log(combo)  )
    // ÍNDICE EN EL ARRAY ( console.log(combo[0/1/2/3/4/5]))
    // NOMBRE DE LA PROPIEDAD DEL OBJETO ( console.log(combo[1].valor))
    // PARA RECORRER MI ARRAY DE MONEDAS DEL COMBO
    // ACCESO RÁPIDO=
    // console.log(combo[3].nombre)
    // [0]
    id: 1,
    nombre: "Dolar Américano",
    valor: "1",
    mensaje: "usd"
    },{
    // [1]
    id: 2,
    nombre: "Peso Argentino",
    valor: 094.20,
    mensaje: "AR$"
    },{
    // [2]
    id: 3,
    nombre: "Bitcoin",
    valor: 0.000025,
    mensaje: "₿TC"
    },{
    // [3]
    id: 4,
    nombre: "Euros",
    valor: 1.22,
    mensaje: "E"}]  

// MI FUNCION PARA CREAR EL ARRAY DE MONEDAS
const coin = [];
function post(){
    // MI ARRAY DE MONEDAS
     coin;
    // LOS OBJETOS DE MI ARRAY  
        //DOLAR
    const dolar = {}
    dolar.id = 1,
    dolar.valor = 1,
    dolar.proposito = true,
    dolar.tipo = 'fiat',
    dolar.nombre = 'Dolar Américano',
    dolar.imagen = 'assets/img/dolar.png',
    // EMPUJO SUS VALORES //
    coin.push(dolar);
        //PESO
    var peso = {}
    peso.id = 2,
    peso.valor = 0.888;
    peso.proposito = true,
    peso.tipo = 'fiat',
    peso.nombre = 'Peso Argentino';
    peso.imagen = 'assets/img/argentina.png'
    coin.push(peso);
        //BITCOIN
    var bitcoin = {}
    bitcoin.id = 3,
    bitcoin.valor = 0.000025,
    bitcoin.proposito= false,
    bitcoin.tipo = 'crypto',
    bitcoin.nombre = 'Bitcoin';
    bitcoin.imagen = 'assets/img/bitcoin.png'
    coin.push(bitcoin);
        //ETHER
    var ether = {}
    ether.id = 4,
    ether.valor = 0.00031,
    ether.proposito = false,
    ether.tipo = 'crypto',
    ether.nombre = 'Ether',
    ether.imagen = 'assets/img/ether.png'
    coin.push(ether);
        //XRP
    var xrp = {}
    xrp.id = 5,
    xrp.valor = 0.892,
    xrp.proposito = false,
    xrp.tipo = 'crypto',
    xrp.nombre = 'XRP',
    xrp.imagen = 'assets/img/xrp.png'
    coin.push(xrp);
        //LITECOIN
    var litecoin = {}
    litecoin.id = 6,
    litecoin.valor = 0.431,
    litecoin.proposito = false,
    litecoin.tipo = 'crypto',
    litecoin.nombre = 'Litecoin',
    litecoin.imagen = 'assets/img/litecoin.png'
    coin.push(litecoin);
        //EOS
    var eos = {}
    eos.id = 7,
    eos.valor = 0.169,
    eos.proposito = false,
    eos.tipo = 'crypto',
    eos.nombre = 'Eos',
    eos.imagen = 'assets/img/eos.png'
    coin.push(eos);
        //Tether
    var tether = {}
    tether.id = 8,
    tether.valor = 1.00,
    tether.proposito = false,
    tether.tipo = 'crypto',
    tether.nombre = 'Tether',
    tether.imagen = 'assets/img/tether.png'
    coin.push(tether);
        //0X
    var zerox = {}
    zerox.id = 9,
    zerox.valor = 1.00,
    zerox.proposito = false,
    zerox.tipo = 'crypto',
    zerox.nombre = '0x',
    zerox.imagen = 'assets/img/0x.png'
    coin.push(zerox);
        //USDCoin
    var usdcoin = {}
    usdcoin.id = 10,
    usdcoin.valor = 1.00,
    usdcoin.proposito = false,
    usdcoin.tipo = 'stablecoin',
    usdcoin.nombre = 'USDCoin',
    usdcoin.imagen = 'assets/img/usdcoin.png'
    coin.push(usdcoin);
        //TRUEUSD
    var trueusd = {}
    trueusd.id = 11,
    trueusd.valor = 1.00,
    trueusd.proposito = false,
    trueusd.tipo ='stablecoin',
    trueusd.nombre =  'TrueUSD',
    trueusd.imagen = 'assets/img/tusd.png'
    coin.push(trueusd);
        //UNIVERSAL EURO
    var universaleuro = {}
    universaleuro.id = 12,
    universaleuro.valor = 1.00,
    universaleuro.proposito = false,
    universaleuro.tipo = 'stablecoin',
    universaleuro.nombre = 'Universal Euro',
    universaleuro.imagen = 'assets/img/universaleuro.png'
    coin.push(universaleuro);
    return coin;}
    var temp = post();
// PARA RECORRER LOS OBJETOS DENTRO DE MI ARRAY //
// console.log(temp[4].imagen);

// pushear(id){  
//     let destinoDiv = document.getElementById(id);
    
//     // HABLA LA MONEDA
//     destinoDiv.innerHTML += `<div class="monedas" style="position: relative; left: 750px;color: #fff; font-size: 1.5em;"><img style="width: 50px; position: relative;"src="${this.image}" <p>    ${this.hablar()}</p> </div>`;
//   }

//  var template = $('.template')
//  template.append('<img class="flag" src=' + temp[0].imagen+'>'+ ' '+temp[0].nombre, ' ',temp[0].valor + '<br>')
//  template.append('<img class="flag" src=' + temp[1].imagen+'>'+ ' '+temp[1].nombre, ' ',temp[1].valor + '<br>')
//  template.append('<img class="flag" src=' + temp[2].imagen+'>'+ ' '+temp[2].nombre, ' ',temp[2].valor + '<br>')
//  template.append('<img class="flag" src=' + temp[3].imagen+'>'+ ' '+temp[3].nombre, ' ',temp[3].valor + '<br>')
//  template.append('<img class="flag" src=' + temp[4].imagen+'>'+ ' '+temp[4].nombre, ' ',temp[4].valor + '<br>')
//  template.append('<img class="flag" src=' + temp[5].imagen+'>'+ ' '+temp[5].nombre, ' ',temp[5].valor + '<br>')
//  template.append('<img class="flag" src=' + temp[6].imagen+'>'+ ' '+temp[6].nombre, ' ',temp[6].valor + '<br>')
//  template.append('<img class="flag" src=' + temp[7].imagen+'>'+ ' '+temp[7].nombre, ' ',temp[7].valor + '<br>')
//  template.append('<img class="flag" src=' + temp[8].imagen+'>'+ ' '+temp[8].nombre, ' ',temp[8].valor + '<br>')
//  template.append('<img class="flag" src=' + temp[9].imagen+'>'+ ' '+temp[9].nombre, ' ',temp[9].valor + '<br>')
//  template.append('<img class="flag" src=' + temp[10].imagen+'>'+ ' '+temp[10].nombre, ' ',temp[10].valor + '<br>')
//  template.append('<img class="flag" src=' + temp[11].imagen+'>'+ ' '+temp[11].nombre, ' ',temp[11].valor + '<br>')
// DECLARACIÓN DE MI ARRAY DE MONEDAS


/* Dolar */ dolar = temp[0],
/*  Peso  */peso = temp[1],
/* Bitcoin*/bitcoin = temp[2],
/*  Ether */ether = temp[3],
/*  Xrp */  xrp = temp[4],
/*  Lite */ litecoin = temp[5],
/*  Eos  */ eos = temp[6],
/* Tether */ tether = temp[7],
/*   0x   */ zerox = temp[8],
/* USD COIN */ usdcoin = temp[9],
/* TRUE USD */ trueusd = temp[10],
/* U EURO */ universaleuro = temp[11];
// EJEMPLO PARA HACERMONEDAS LITERALES
  var myClass = {
    'Dolar':{id:1,valor:1,proposito:true,tipo:'fiat',nombre:'Dolar Américano',imagen:'assets/img/dolar.png'},
    'Pesos':{id:2,valor:0.888,proposito:true,tipo:'fiat',nombre:'Pesos Argentinos',imagen:'assets/img/argentina.png'},
    'Bitcoin':{id:3,valor:0.000025,proposito:false,tipo:'crypto',nombre:'Bitcoin',imagen:'assets/img/bitcoin.png'},
    'Ether':{id:4,valor:0.00031,proposito:false,tipo:'crypto',nombre:'Ether',imagen:'assets/img/ether.png'},
    'Xrp':{id:5,valor:0.892,proposito:false,tipo:'crypto',nombre:'XRP',imagen:'assets/img/xrp.png'},
    'Litecoin':{id:6,valor:0.431,proposito:false,tipo:'crypto',nombre:'Litecoin',imagen:'assets/img/litecoin.png'},
    'Eos':{id:7,valor:0.169,proposito:false,tipo:'crypto',nombre:'Eos',imagen:'assets/img/eos.png'},
    'Tether':{id:8,valor:1.00,proposito:false,tipo:'crypto',nombre:'Tether',imagen:'assets/img/tether.png'},
    'Zerox':{id: 9,valor:1.00,proposito:false,tipo:'crypto',nombre:'0x',imagen:'assets/img/0x.png'},
    'Usdcoin':{id: 10,valor:1.00,proposito:false,tipo:'stablecoin',nombre:'USDCoin',imagen:'assets/img/usdcoin.png'},
    'Tusd':{id: 11,valor:1.00,proposito:false,tipo:'stablecoin',nombre:'TrueUSD',imagen:'assets/img/tusd.png'},
    'Universal Euro':{id:12,valor:1.00,proposito:false,tipo:'stablecoin',nombre:'Universal Euro',imagen:'assets/img/universaleuro.png'}}
//      var template2 = $('#template2')
//      template2.append('<span class="mySpan">'+ Monedas.Dolar.nombre + '</span>')                        
// ESTE COMANDO ME SIRVE PARA ESCRIBIR EN LA CONSOLA DEL NAVEGADOR
// console.log('%c Mis Monedas', 'color: violet')
// console.table(Monedasliterales)

//    ESTE FOR ME PERMITE SABER QUE PARAMETROS TIENE MI OBJETO LITERAL ( MonedasLiterales )
//   function escribir(Monedasliterales){
//       if( Monedasliterales.Tusd.tipo === 'fiat'){
//          console.log('¡Soy una moneda Fiat!');
//       }
//       else if ( Monedasliterales.Tusd.tipo === 'mineral'){
//          console.log('¡So soy un mineral!');
//       }
//       else if(Monedasliterales.Tusd.tipo ===  'crypto'){     
//           console.log('Soy una Crypto!')
//       }
//       else if (Monedasliterales.Tusd.tipo === 'stablecoin'){
//           console.log('Soy una StableCoin!')
//       }};


    // function dolarFunct(){
    //     if( dolar.tipo == 'fiat');{console.log('¡Soy una moneda Fiat!');}
    //     if(dolar.tipo == 'crypto');{console.log('puto');}
    //     if( dolar.tipo != 'fiat');{console.log('!No soy una moneda fiat');}
    //     if( dolar.tipo != 'crypto');{console.log('¡No soy una Crypto!');
    //     }};
    // dolarFunct();
// CON ESTE FOR, ADJUNTO EL DIV DE CADA MONEDA DE LA APLICACIÓN


class Plata {
    constructor(id,valor,proposito,tipo,nombre,imagen,){
        this.id = id;
        this.valor = valor;
        this.proposito = proposito;
        this.tipo = tipo;
        this.nombre = nombre;
        this.imagen = imagen;
        this.texto = `<div class="myClass1" ${this.tipo}"><img class="flag"src="${this.imagen}"><b id="nombre">${this.nombre}</b><b>:</b> <b id="valor">$ ${this.valor}</b> <br><div>`;}

 };
let Dolar=new Plata(1, 1,false,'fiat','Dolar Américano','assets/img/dolar.png',);
let Peso=new Plata(2, 0.888,false,'fiat','Peso Argentino','assets/img/argentina.png');
let Bitcoin=new Plata(3,0.000025,false,'crypto','Bitcoin','assets/img/bitcoin.png');
let Ether=new Plata(4,0.00031,false,'crypto','Ether','assets/img/ether.png');
let Xrp=new Plata(5,0.892,false,'crypto','XRP','assets/img/xrp.png');
let Litecoin=new Plata(6,0.431,false,'crypto','Litecoin','assets/img/litecoin.png');
let Eos=new Plata(7,0.169,false,'crypto','Eos','assets/img/eos.png');
let Tether=new Plata(8,1.00,false,'crypto','Tether','assets/img/tether.png');
let Zerox=new Plata(9,1.00,false,'crypto','0x','assets/img/0x.png');
let Usdcoin=new Plata(10,1.00,false,'stablecoin','USDCoin','assets/img/usdcoin.png');
let Tusd=new Plata(11,1.00,false,'stablecoin','TrueUSD','assets/img/tusd.png');
let UniversalEuro=new Plata(12,1.00,false,'stablecoin','Universal Euro','assets/img/universaleuro.png');
let This = 12;
let Hola = Plata;
// for (let i = 1; i<=11; i++) {
//     /* DOLAR */
//     let myFor = temp[0].nombre;
//     if(i==1){$('.myClass1').append(this.texto);   
//      for (type of myFor){let myDiv1 = temp[0].tipo;
//      if( myDiv1 == 'crypto'){console.log(`¡${myFor} es una Crypto!`);}
//      if( myDiv1 == 'stablecoin'){console.log(`¡${myFor} es una Stablecoin!`);}
//      if( myDiv1 == 'fiat'){console.log(`¡${myFor} es una Fiat!`);}}};i++;
//     /* PESO */
//     myFor1 = temp[1].nombre;
//     if(i==2){$('.myClass2').append(myDiv2)
//      for (type of myFor1){let myDiv2 = temp[1].tipo;
//      if ( myDiv2 == 'crypto'){console.log(`¡${myFor1} es una Crypto!`);}
//      if ( myDiv2 == 'stablecoin'){console.log(`¡${myFor1} es una Stablecoin!`);}
//      if ( myDiv2 == 'fiat'){console.log(`¡${myFor1} es una Fiat!`);}}}i++;
//     /* BITCOIN */
//     myFor2 = temp[2].nombre;
//     if(i==3){$('.myClass3').append(myDiv3)
//      for (type of myFor2){let myDiv3 = temp[2].tipo;
//      if ( myDiv3 == 'crypto'){console.log(`¡${myFor2} es una Crypto!`);}
//      if ( myDiv3 == 'stablecoin'){console.log(`¡${myFor2} es una Stablecoin!`);}
//      if ( myDiv3 == 'fiat'){console.log(`¡${myFor2} es una Fiat!`);}}};i++;
//     /* ETHER */
//     myFor3 = temp[3].nombre;
//     if(i==4){$('.myClass4').append(myDiv4)
//      for (type of myFor3){let myDiv4 = temp[3].tipo;
//      if ( myDiv4 == 'crypto'){console.log(`¡${myFor3} es una Crypto!`);}
//      if ( myDiv4 == 'stablecoin'){console.log(`¡${myFor3} es una Stablecoin1`);}
//      if ( myDiv4 == 'fiat'){console.log(`¡${myFor3} es una Fiat!`);}}};i++;
//     /* XRP */
//     myFor4 = temp[4].nombre;
//     if(i==5){$('.myClass5').append(myDiv5)
//      for (type of myFor4){let myDiv5 = temp[4].tipo;
//      if ( myDiv5 == 'crypto'){console.log(`¡${myFor4} es una Crypto!`);}
//      if ( myDiv5 == 'stablecoin'){console.log(`¡${myFor4} es una Stablecoin1`);}
//      if ( myDiv5 == 'fiat'){console.log(`¡${myFor4} es una Fiat!`);}}};i++;
//     /* LITECOIN */
//     myFor5 = temp[5].nombre;
//     if(i==6){$('.myClass6').append(myDiv6)
//      for (type of myFor5){let myDiv6 = temp[5].tipo;
//      if ( myDiv6 == 'crypto'){console.log(`¡${myFor5} es una Crypto!`);}
//      if ( myDiv6 == 'stablecoin'){console.log(`¡${myFor5} es una Stablecoin1`);}
//      if ( myDiv6 == 'fiat'){console.log(`¡${myFor5} es una Fiat!`);}}};i++;
//     /* EOS */
//     myFor6 = temp[6].nombre;
//     if(i==7){$('.myClass7').append(myDiv7)
//      for (type of myFor6){let myDiv7 = temp[6].tipo
//      if ( myDiv7 == 'crypto'){console.log(`¡${myFor6} es una Crypto!`)}
//      if ( myDiv7 == 'stablecoin'){console.log(`¡${myFor6} es una Stablecoin!`)}
//      if ( myDiv7 == 'fiat'){console.log(`¡${myFor6} es una Fiat!`);}}};i++;
//     /* TETHER */
//     myFor7 = temp[7].nombre;
//     if(i==8){$('.myClass8').append(myDiv8)
//      for (type of myFor7){let myDiv8 = temp[7].tipo;
//      if ( myDiv8 == 'crypto'){console.log(`¡${myFor7} es una Crypto!`);}
//      if ( myDiv8 == 'stablecoin'){console.log(`¡${myFor7} es una Stablecoin!`);}
//      if ( myDiv8 == 'fiat'){console.log(`¡${myFor7} es una Fiat!`);}}};i++;
//     /* 0X */
//     myFor8 = temp[8].nombre;
//     if(i==9){$('.myClass9').append(myDiv9)
//      for (type of myFor8){let myDiv9 = temp[8].tipo;
//      if ( myDiv9 == 'crypto'){console.log(`¡${myFor8} es una Crypto!`);}
//      if ( myDiv9 == 'stablecoin'){console.log(`¡${myFor8} es una Stablecoin!`);}
//      if ( myDiv9 == 'fiat'){console.log(`¡${myFor8} es una Fiat!`);}}};i++;
//     /* ETHER */
//     myFor9 = temp[9].nombre;
//     if(i==10){$('.myClass10').append(myDiv10)
//      for (type of myFor9){let myDiv10 = temp[9].tipo;
//      if ( myDiv10 == 'crypto'){console.log(`¡${myFor9} es una Crypto!`);}
//      if ( myDiv10 == 'stablecoin'){console.log(`¡${myFor9} es una Stablecoin!`);}
//      if ( myDiv10 == 'fiat'){console.log(`¡${myFor9} es una Fiat!`);}}};i++;
//     /* USD COIN */
//     myFor10 = temp[10].nombre;
//     if(i==11){$('.myClass11').append(myDiv11)
//      for (type of myFor10){let myDiv11 = temp[10].tipo;
//      if ( myDiv11 == 'crypto'){console.log(`¡${myFor10} es una Crypto!`);}
//      if ( myDiv11 == 'stablecoin'){console.log(`¡${myFor10} es una Stablecoin!`);}
//      if ( myDiv11 == 'fiat'){console.log(`¡${myFor10} es una Fiat!`);}}};i++
//     /* TRUE USD */
//     myFor11 = temp[11].nombre;
//     if(i==12){$('.myclass12').append(myDiv12)
//     for (type of myFor11){let myDiv12 = temp[11].tipo;}
//      if ( myDiv12 == 'crypto'){console.log(`¡${myFor11} es una Crypto!`);}
//      if ( myDiv12 == 'stablecoin'){console.log(`¡${myFor11} es una Stablecoin!`);}
//      if ( myDiv12 == 'fiat'){console.log(`¡${myFor11} es una Fiat!`);}};};
const input = document. querySelector('#valor');
const send = document. querySelector('.input3');
var lista = document.getElementById('lista');
var boton = document.getElementById('boton');
var inputN = document.getElementById('numberinput');


// send.addEventListener('click',() => {
//     let myResult = $('#valor');
    
coin.forEach(element => {
    Calc = `${element["valor"]}` * `${input.value}`;
    // $('#template').append(`<div class="myClass1" ${element["tipo"]}"><img class="flag"src="${element["imagen"]}"> <b> ${element["nombre"]} </b><br><div>`);
    // FIAT 
});
// })

// function fiat(){
//     if (Dolar.tipo == 'fiat'){ $('.coins').append(`${Dolar.texto}`)};
//     if (Peso.tipo == 'fiat'){ $('.coins').append(`${Peso.texto}`)};
//     $('.coins').append();}
// fiat();
// function crypto(){
//     if (Bitcoin.tipo == 'crypto'){ $('.crypto').append(`${Bitcoin.texto}`)};
//     if (Ether.tipo == 'crypto'){ $('.crypto').append(`${Ether.texto}`)};
//     if (Xrp.tipo == 'crypto'){ $('.crypto').append(`${Xrp.texto}`)};
//     if (Litecoin.tipo == 'crypto'){ $('.crypto').append(`${Litecoin.texto}`)};
//     if (Eos.tipo == 'crypto'){ $('.crypto').append(`${Eos.texto}`)};
//     if (Tether.tipo == 'crypto'){ $('.crypto').append(`${Tether.texto}`)};
//     if (Zerox.tipo == 'crypto'){ $('.crypto').append(`${Zerox.texto}`)};
//     if (Eos.tipo == 'crypto'){ $('.crypto').append(`${Eos.texto}`)};
//     if (Usdcoin.tipo == 'stablecoin'){ $('.stablecoin').append(`${Usdcoin.texto}`)};
//     if (UniversalEuro.tipo == 'stablecoin'){ $('.stablecoin').append(`${UniversalEuro.texto}`)};
// }
// crypto();

