
    ///
    const list = document.querySelector('.list');
    let list_items = [
      //DOLAR
      {id: 1,
      valor: 1,
      proposito: true,
      tipo: 'fiat',
      nombre: 'Dolar Américano',
      imagen: 'assets/img/dolar.png',
      oferta: 'Plus Cambio',
      linkoferta: 'https://www.invertiplus.com.ar',
      oferta1: 'Plaza Cambio',
      linkoferta1: 'https://www.plazacambio.com.ar',
      oferta2:'CambioAR',
      linkoferta2: 'https://www.cambioar.com'},
      //PESO
      {id: 2,
      valor: 95.56,
      proposito: true,
      tipo: 'fiat',
      nombre: 'Peso Argentino',
      imagen: 'assets/img/argentina.png',
      oferta: 'No disponible',
      linkoferta: '404.html',
      oferta1:'',
      linkoferta1: '',
      oferta2:'',
      linkoferta2: ''},
      //BITCOIN
      {id:3,
      valor: 0.000028,
      proposito:false,
      tipo:'crypto',
      nombre:'Bitcoin',
      imagen:'assets/img/bitcoin.png',
      oferta: 'Binance', 
      linkoferta: 'https://www.binance.com',
      oferta1:'Coinbase',
      linkoferta1: 'https://www.coinbase.com',
      oferta2: 'Trezor',
      linkoferta2: 'https://www.trezor.io'},
      //ETHER
      {id:4,
      valor: '0.00050',
      proposito:false,
      tipo:'crypto',
      nombre:'Ether',
      imagen:'assets/img/ether.png',
      oferta: 'Binance',
      linkoferta: 'https://www.binance.com',
      oferta1: 'Coinbase',
      linkoferta1: 'https://www.coinbase.com',
      oferta2: 'Coimama',
      linkoferta2: 'https://www.coinmama.com'},
      //XRP
      {id: 5,
      valor:'0.6686730000',
      proposito:false,
      tipo:'crypto',
      nombre:'XRP',
      imagen:'assets/img/xrp.png',
      oferta: 'Binance',
      linkoferta: 'https://www.binance.com',
      oferta1:'Trezor', 
      linkoferta1: 'https://www.trezor.io',
      oferta2:'Kriptomat',
      linkoferta1: 'https://www.kriptomat.io/es'},
      {id:6,
      valor:'0.0074',
      proposito:false,
      tipo:'crypto',
      nombre:'Litecoin',
      imagen:'assets/img/litecoin.png',
      oferta: 'Binance', 
      linkoferta: 'https://www.binance.com',
      oferta1:'Coinbase', 
      linkoferta1: 'https://www.coinbase.com',
      oferta2:'Bitbuy',
      linkoferta2:'https://www.bitbuy.ca'},
      {id:7,
      valor:'0.2250326200',
      proposito:false,
      tipo:'crypto',
      nombre:'Eos',
      imagen:'assets/img/eos.png',
      oferta: 'Binance', 
      linkoferta: 'https://www.binance.com',
      oferta1:'Coinbase',
      linkoferta1: 'https://www.coinbase.com',
      oferta2:'Bitbuy',
      linkoferta2:'https://www.bitbuy.ca'},
      {id:8,
      valor:'1.00',
      proposito:false,
      tipo:'crypto',
      nombre:'Tether',
      imagen:'assets/img/tether.png',
      oferta: 'Binance', 
      linkoferta: 'https://www.binance.com',
      oferta1:'Coinbase', 
      linkoferta1: 'https://www.coinbase.com',
      oferta2:'Etoro',
      linkoferta2:'https://www.etoro.com'},
     { id:9,
      valor:'1.55665',
      proposito:false,
      tipo:'crypto',
      nombre:'0x',
      imagen:'assets/img/0x.png',
      oferta: 'Binance', 
      linkoferta: 'https://www.binance.com',
      oferta1:'Coinbase', 
      linkoferta1: 'https://www.coinbase.com',
      oferta2:'Trezor',
      linkoferta2: 'https://www.trezor.io'},
      {id:10,
      valor:'1.05',
      proposito:false,
      tipo:'stablecoin',
      nombre:'USDCoin',
      imagen:'assets/img/usdcoin.png',
      oferta: 'Binance', 
      linkoferta: 'https://www.binance.com',
      oferta1:'Coinbase', 
      linkoferta1: 'https://www.coinbase.com',
      oferta2:'Trezor',
      linkoferta2: 'https://www.trezor.io'},
      {id:11,
      valor:'1.00',
      proposito:false,
      tipo:'stablecoin',
      nombre:'TrueUSD',
      imagen:'assets/img/tusd.png',
      oferta: 'Binance', 
      linkoferta: 'https://www.binance.com',
      oferta1:'Coinbase', 
      linkoferta1: 'https://www.coinbase.com',
      oferta2:'Trezor',
      linkoferta2: 'https://www.trezor.io'},
      {id:12,
      valor:'0.7874015748',
      proposito:false,
      tipo:'stablecoin',
      nombre:'Universal Euro',
      imagen:'assets/img/universaleuro.png',
      oferta: 'Binance', 
      linkoferta: 'https://www.binance.com',
      oferta1:'Coinbase', 
      linkoferta1: 'https://www.coinbase.com',
      oferta2:'Trezor',
      linkoferta2: 'https://www.trezor.io'}];
      function saldo(){
        let entrada = document.getElementById('myNumber').value;
    function mostrarMonedas( array = [], ){
      list.innerHTML= "";
      let valorUsuario = document.getElementById('myNumber').value;
      console.log(parseInt(valorUsuario))
    for ( let i = 0; i <array.length; i++){
        let item = array[i];
        let x = document.getElementById("myNumber").value;
        let item_container = document.querySelector('.app');
        let item_element = document.createElement('div');
        let item_element2 = document.createElement('div');
        item_element.classList.add('list-item')
        item_container.appendChild(item_element);
        item_element2.classList.add('list-item')
        // BANDERA
        let flag = document.createElement('div');
        flag.classList.add('item-img');
        flag.innerHTML = `<img src='${item.imagen}'>`;
        item_element.appendChild(flag);
        // NOMBRE
        let title = document.createElement('div');
        title.classList.add('item-title');
        title.innerText = item.nombre;
        item_element.appendChild(title);  
        // VALOR
        let howMuch = document.createElement('div');
        howMuch.classList.add('item-value');
        howMuch.innerText =  item.valor * entrada;
        item_element.appendChild(howMuch);
        // MEJORES PRECIOS
        let ofertas = document.createElement('div');
        ofertas.classList.add('item-ofert');
        ofertas.innerHTML = `<a href="${item.linkoferta}" target="_blank">${item.oferta}</a> <a href="${item.linkoferta1}" target="_blank">${item.oferta1}</a> <a href="${item.linkoferta2}" target="_blank">${item.oferta2}</a>
        `;
        item_element.appendChild(ofertas);
        list.appendChild(item_element);
        console.log(x + 1);
      }}
      mostrarMonedas(list_items);}

      // PONER GRAFICO DE CAIDA DE LA MONEDA
      // AÑADIR AL MENOS DOS O TRES LINKS MAS PARA COMPRAR LA MONEDA