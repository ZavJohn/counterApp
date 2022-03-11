import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas de 08-imp-exp.js', () => {
    test('retornar un heroe por ID', () => { 

        const id = 1;
        const heroe = getHeroeById(id);

        const heroedata = heroes.find( h => h.id === id);

        expect ( heroe ).toEqual( heroedata );
     });

     test('retornar undefined por heroe no existente', () => { 

        const id = 15;
        const heroe = getHeroeById(id);

        expect ( heroe ).toBe( undefined );
     });

     test('retornar heroes de DC', () => { 

        const owner = 'DC';
        const hero = getHeroesByOwner( owner );
        
        const heroesData = heroes.filter ( h => h.owner === owner);
        expect ( hero ).toEqual( heroesData );
     });

     test('retornar heroes de MARVEL', () => { 

        const owner = 'Marvel';
        const hero = getHeroesByOwner( owner ).length;

        expect ( hero ).toBe( 2 );
     });
});