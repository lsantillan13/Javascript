
                                      // COSAS QUE HACER
// TENGO QUE HACER UNA FUNCION PARA EL <idINPUT> QUE TRANSFORME EN ARRAY EL [input.value]
// Y MOSTRARLO EN "resultado".innerHTML CON PUSH
// PARA DESPLEGAR LOS VALORES DE LAS MONEDAS EN SUS RESPECTIVOS DIVS A LA HORA DE HACER CLICK EN <SEND>

// MIS VARIABLES DEL PROYECTO


// SECCIÓN 1, PANTALLA DE MAC
// <OPTION> </OPTION>
  // MI FUNCION PARA EL COMBO
  function insertarMonedas(items, combo) {
  // DEJA QUE Destino sea igual a la ubicacion del <OPTION> </OPTION>
  let Destino = document.getElementById(combo)
  // FOR PARA DARLE LOS PARAMETROS DE MIS OBJETOS AL <OPTION> </OPTION>
  for(Moneda of items){
  Destino.innerHTML+=`<option id="${Moneda.id}" value="${Moneda.valor}">${Moneda.nombre}</option>`}}
  // MI CLASS PARA MIS MONEDAS
class Moneda {
  // MI CONSTRUCTOR
    constructor (id, nombre, valor, mensaje){
      this.id = parseInt(id);
      this.nombre = nombre;
      this.valor = valor;
      this.mensaje = mensaje;
      this.image = image;}}
  // MI FUNCION PARA QUE FUNCIONE TODO LO ANTERIOR
    insertarMonedas(combo,'menuMonedas');



    ///

    const list = document.querySelector('.list');
    const sort_todo_btn = document.querySelector('.sort-options .sort-todo');
    const sort_name_btn = document.querySelector('.sort-options .sort-name');
    const sort_crypto_btn = document.querySelector('.sort-options .sort-crypto');


    let list_items = [
      //DOLAR
      {id: 1,
      valor: 1,
      proposito: true,
      tipo: 'fiat',
      nombre: 'Dolar Américano',
      imagen: 'assets/img/dolar.png'},
      //PESO
      {id: 2,
      valor: 0.888,
      proposito: true,
      tipo: 'fiat',
      nombre: 'Peso Argentino',
      imagen: 'assets/img/argentina.png'},
      //BITCOIN
      {id:3,
      valor:0.000025,
      proposito:false,
      tipo:'crypto',
      nombre:'Bitcoin',
      imagen:'assets/img/bitcoin.png'},
      //ETHER
      {id:4,
      valor:0.00031,
      proposito:false,
      tipo:'crypto',
      nombre:'Ether',
      imagen:'assets/img/ether.png'},
      //XRP
      {id: 5,
      valor:0.892,
      proposito:false,
      tipo:'crypto',
      nombre:'XRP',
      imagen:'assets/img/xrp.png'},
      {id:6,
      valor:0.431,
      proposito:false,
      tipo:'crypto',
      nombre:'Litecoin',
      imagen:'assets/img/litecoin.png'},
      {id:7,
      valor:0.169,
      proposito:false,
      tipo:'crypto',
      nombre:'Eos',
      imagen:'assets/img/eos.png'},
      {id:8,
      valor:1.00,
      proposito:false,
      tipo:'crypto',
      nombre:'Tether',
      imagen:'assets/img/tether.png'},
     { id:9,
      valor:1.00,
      proposito:false,
      tipo:'crypto',
      nombre:'0x',
      imagen:'assets/img/0x.png'},
      {id:10,
      valor:1.00,
      proposito:false,
      tipo:'stablecoin',
      nombre:'USDCoin',
      imagen:'assets/img/usdcoin.png'},
      {id:11,
      valor:1.00,
      proposito:false,
      tipo:'stablecoin',
      nombre:'TrueUSD',
      imagen:'assets/img/tusd.png'},
      {id:12,
      valor:1.00,
      proposito:false,
      tipo:'stablecoin',
      nombre:'Universal Euro',
      imagen:'assets/img/universaleuro.png'}];

       let desc =true;
       let click= false;
       sort_crypto_btn.addEventListener('click', () => {
        let array = sort_array_by(list_items, 'crypto', desc);
        mostrarMonedas(array);
        desc = !desc;
       });
       sort_name_btn.addEventListener('click', () => {
        let array = sort_array_by(list_items, 'name', desc);
        mostrarMonedas(array);
        desc = !desc;
       });

       function sort_array_by(array, sort, desc){
         array.sort(function (a,b) {
           if (a[sort] < b[sort]) return -1;
           if (a[sort] > b[sort]) return 1;
           return 0;
         });
         if (desc) array.reverse();
         return array;
       }
    function mostrarMonedas( array = []){
      list.innerHTML= "";
      for ( let i = 0; i <array.length; i++){
        let item = array[i];

        let item_container = document.querySelector('.crypto');
        let item_container2 = document.querySelector('.stablecoin');
        let item_element = document.createElement('div');
        let item_element2 = document.createElement('div');
        item_element.classList.add('list-item')
        item_container.appendChild(item_element);
        item_element2.classList.add('list-item')
        item_container2.appendChild(item_element);
        // NOMRBE
        let title = document.createElement('div');
        title.classList.add('item-title');
        title.innerText = item.nombre;
        item_element.appendChild(title);  
        // TIPO
        let crypto = document.createElement('div');
        crypto.classList.add('item-crypto');
        crypto.innerText = item.tipo;
        item_element.append(crypto);
        // VALOR
        let howMuch = document.createElement('div');
        howMuch.classList.add('item-age');
        howMuch.innerText = item.valor;
        item_element.appendChild(howMuch);

        list.appendChild(item_element);
      }}
      mostrarMonedas(list_items);