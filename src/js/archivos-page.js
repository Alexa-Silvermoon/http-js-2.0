
import { subirImagen } from "./http-provider";

const body = document.body;
let inputFile, imgFoto;

const crearInputFileHtml = () => {

    const html = `
    <h1 class="mt-5">Subir Archivos</h1>
    <hr>

    <label>Selecciona una Fotografia: </label>

    <input type="file" accept="image/png, image/jpeg"/>
    
    <br>
    <img id="foto" class="img-thumbnail" src="">
    `;

    // <input type="file" accept="image/png, image/jpeg"/>
    //input donde solo podre cargar archivo de imagen en formato png o jpeg

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);

    inputFile = document.querySelector('input'); //type="file"
    imgFoto   = document.querySelector('#foto'); //id="foto"

}

const eventos = () => {

    inputFile.addEventListener('change', (event) => {

        // console.log(event);

        const file = event.target.files[0];
        // console.log(file);

        subirImagen( file ).then( url => imgFoto.src = url );  // {

           // console.log( resp );

        // })

    });

}

export const init = () => {

    crearInputFileHtml();
    eventos();

}