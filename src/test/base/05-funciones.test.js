import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones.js', () => {
    test('getUser debe regresar un argumento', () => { 
    
        const userTest = {
            uid : 'ABC123',
            username : 'El_Papi1502'
        }

        const user = getUser();

        expect( user ).toEqual( userTest );
    });


    test('getUsuarioActivo debe regresar un argumento', () => { 
    
        const nombre = 'Jonathan';

        const usuario = {
            uid : 'ABC567',
            username : nombre
        }

        const usuarioActivo = getUsuarioActivo(nombre);

        expect( usuario ).toEqual( usuarioActivo );
    });
});