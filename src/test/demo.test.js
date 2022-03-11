
describe('Pruebas en el archivo demo.js', ()=> {
    test('deben ser iguales los dos strings', () => {

        //Inicialización
        const mensaje = 'Hola mundo';
    
        //Estímulo
        const mensaje2 = 'Hola mundo';
    
        //Observar el comportamiento
        expect( mensaje ).toBe( mensaje2 )
    
    });
});
