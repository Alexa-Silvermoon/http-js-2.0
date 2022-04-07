
import { obtenerUsuarios } from "./js/http-provider";
import { initChistes } from "./js/chistes-page";
// obtenerUsuarios().then( console.log );
// init(); //importamos el crearChistesHtml(); desde chistes-page

import { initUsuarios } from "./js/usuarios-page";
// init();

import { init } from "./js/archivos-page";

init(); //para subir archivos a Cloudinary.com
initChistes(); //obtendra los chistes de la pagina de chistes de chuck norris
obtenerUsuarios(); //imprimira los usuarios pero en consola
initUsuarios(); // muestra un listado en html de los usuarios (email, nombre, avatar)



/*

import * as CRUD from './js/crud-provider'; // * me importa todo desde crud-provedire y le pone alias CRUD

CRUD.getUsuario( 2 ).then( console.log );


CRUD.crearUsuario( {

    name: 'Alexander',

    job: 'Programador'

}).then( console.log );


CRUD.actualizarUsuario( 1, {

    name: 'Jeronimo',

    job: 'YouTuber'

}).then( console.log );


CRUD.borrarUsuario( 1 ).then( console.log );



import { obtenerChiste } from "./js/http-provider";

obtenerChiste().then( console.log );


fetch( jokeUrl ).then( resp => {

    // console.log( resp );

    resp.json().then( ( {id, value } ) => {

        //console.log( data );
        console.log( id );
        console.log( value ); //el chiste de chuck norris

    });

});


fetch ( jokeUrl ) //esta forma es la mejor para mi
    .then( resp => resp.json())
    .then( console.log );

   
// fetch ( jokeUrl )
//     .then( resp => resp.json() )
//     .then( ( {id, value } ) => {
//         console.log( id, value);
//     });


*/