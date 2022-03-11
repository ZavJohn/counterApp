import { getImagen } from '../../base/11-async-await';

describe('Pruebas con 11-async-await', () =>{
    test('retorna URL', async() => { 
        const url = await getImagen();

        expect( typeof url ).toBe( 'string' );
    });
});