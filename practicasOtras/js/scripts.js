'use strict';
/*
console.log("Hola mundo en js");

let container = document.querySelectorAll('th');
for(i = 0; i<container.length;i++)
{
    console.log('th numero '+i+' = '+container[i].outerText);
}
*/
let verMas = document.querySelectorAll("a");
console.log(verMas);
for (let i = 0; i < verMas.length; i++) {
  verMas[i].addEventListener("click", function (evento) 
  {
    let fila = this.offsetParent.offsetParent.querySelectorAll("td");
    fila = fila[1].innerText.toLowerCase();
    switch (fila) 
    {
      case "sensei":
        console.log("dirigiendo a sensei");
        evento.preventDefault();
        let contenido = document.querySelector(".contenido");
        contenido.classList.remove("animate__animated");
        contenido.classList.remove("animate__animated");
        contenido.classList.add("animate__animated");
        contenido.classList.add("animate__backOutLeft");
        setTimeout(function()
        {
            location.href = "/practicasOtras/restaurantes/sensei.html";
        },600);
        
        break;
      case "pepe's pizza":
        console.log("dirigiendo a Pepe's Pizza");
        evento.preventDefault();
        break;
      case "la calabaza":
        console.log("dirigiendo a La calabaza");
        evento.preventDefault();
        break;
      default:
        console.log("Restaurante no enlistado");
        evento.preventDefault();
    }
  });
}

var n = 20;
if (true) {
    var n = "asd";
    alert(n);
}
alert(n);

