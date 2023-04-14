'use strict';
//Obtener los elementos de la clase .close
let btns = document.querySelectorAll('.btnClose');
//Recorrerlos
for(let i = 0; i<btns.length;i++)
{
    btns[i].addEventListener('click',function(evento)
    {
        evento.preventDefault();
        let contenedor = document.querySelector('.contenido');
        contenedor.classList.remove('animate__animated');
        contenedor.classList.remove('animate__backInRight');

        contenedor.classList.add('animate__animated');
        contenedor.classList.add('animate__backOutLeft');
        setTimeout(function()
        {
            location.href = "/practicasOtras/index.html";
        },600);
    })
}
//Agregar un evento onClickListener a cada uno de ellos