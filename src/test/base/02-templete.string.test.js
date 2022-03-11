import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 01 template string.js', ()=>{

    test( 'Prueba en el metodo getSaludo', ()=>{
        const nombre = ' ';

        const saludo =getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre );

    });

});