
import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnOtro, olList;

const crearChistesHtml = () => {

    const html = `

    <h1 class="mt-5">Chistes</h1>
    <hr>

    <button class="btn btn-primary">Otro Chiste</button>

    <ol class="mt-2 list-group">
        <!-- <li class="list-group-item">....</li> -->
    </ol>

    `;

    const divChistes = document.createElement('div'); //crea un contenedor div

    divChistes.innerHTML = html; //divChistes le entra el html gracias al innerHTML

    body.append(divChistes); //insertar al body del index.html el divChistes

}

const eventos = () => {

    olList  = document.querySelector('ol'); // order list del html
    btnOtro = document.querySelector('button'); //boton del html

    btnOtro.addEventListener('click', async () => {

        // console.log('hola mundo');

        btnOtro.disabled = true; //mientras el chiste se esta trayendo, se dehabilita el boton

        dibujarChiste( await obtenerChiste() );

        btnOtro.disabled = false;

    });

}

// chiste { id, value }
const dibujarChiste = ( chiste ) => {

    const olItem = document.createElement('li'); //list item

    olItem.innerHTML = `<b>${ chiste.id } </b>: ${ chiste.value }`;

    olItem.classList.add('list-group-item');

    olList.append(olItem);

}

export const initChistes = () => { //exportamos la creacion del chiste al index.js

    crearChistesHtml();
    eventos(); //tiene sentido que el evento aparezca depues de crear el html, al revez da error

}