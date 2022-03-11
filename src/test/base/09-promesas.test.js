import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";


describe('Pruebas con promesas', () => {
    test('Retornar un heroe async', ( done ) => { 
        const id = 1;

        getHeroeByIdAsync( id )
            .then( heroe  => {
                expect( heroe ).toBe( heroes[0] );
                done();
            });

    });

    test('Error si heroe no existe', ( done ) => { 
        const id = 15;

        getHeroeByIdAsync( id )
            .catch( error => {
                expect( error ).toBe( 'No se pudo encontrar el héroe' );
                done();
            });
    });
});