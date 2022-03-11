import React from 'react';
import { shallow } from 'enzyne';
import '@testing-library/jest-dom';
import PrimeraApp from '../PrimeraAPP'
import '../setupTests';


describe('Pruebas en <PrimeraApp />', () => {
    /*test('debe mostrar: Hola soy goku', () => {
        const saludo = 'Hola soy Goku'

        const { getByText } = render( <PrimeraApp saludo={ saludo } />); 
        
        expect( getByText(saludo) ).toBeInTheDocument();
    });*/

    test('debe de mostrar <PrimeraApp/> correctamente', () => {
        const saludo = 'Yugi, por eso nadie quiere jugar contigo';
        const wrapper = shallow(<PrimeraApp saludo = { saludo }/>);

        expect( wrapper ).toMatchSnapshot();
    });
});

