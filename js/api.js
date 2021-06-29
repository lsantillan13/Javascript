const myDiv = document.querySelector('#holaHTML');
console.log(myDiv);
const myBtn = document.querySelector('#holaBTN');
console.log(myBtn);


myBtn.onclick = function() {
    let url = `https://mindicador.cl/api/dolar`;

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    api.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            let datos = JSON.parse(this.responseText);
            let resultado = document.querySelector('.resultado');
            resultado.innerHTML = '';

            for(let item of datos.serie){
                console.log(item.fecha);
                resultado.innerHTML += `<li style=""> <p>Fecha: ${item.fecha.substr(0,10)}</p> _________ <p>Precio: $${item.valor}</p></li>`;
            }
        }
    }
    

};

