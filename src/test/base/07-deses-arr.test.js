import { retornaArreglo } from "../../base/07-deses-arr";


describe('Pruebas en desestructuracion', () => {
    test('Retorna un string y un numero', () => { 

        const arr = retornaArreglo();

        expect( arr ).toEqual( ['ABC', 123] );
    });
});