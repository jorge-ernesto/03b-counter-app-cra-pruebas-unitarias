import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe de retornar un héroe por ID', () => {

        // 1. inicialización
        const id = 1;
        const hero = getHeroeById(id);

        // 3. observar el comportamiento... esperado
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });

    });

    test('getHeroeById debe de retornar undefined si no existe ID', () => {

        // 1. inicialización
        const id = 100;
        const hero = getHeroeById(id);

        // 3. observar el comportamiento... esperado
        // La función toBeFalsy() en Jest comprueba si el valor pasado es falsy, es decir, si es false, 0, '', null, undefined, o NaN.
        expect(hero).toBeFalsy();

    });

    test('getHeroesByOwner debe de regresar heroes de DC', () => {

        // 1. inicialización
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        // 3. observar el comportamiento... esperado

        // Length === 3
        expect(heroes.length).toBe(3);

        // Debe de retornar un arreglo con los héroes de DC
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));

    });

    test('getHeroesByOwner debe de regresar heroes de DC', () => {

        // 1. inicialización
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        // 3. observar el comportamiento... esperado

        // Length === 2
        expect(heroes.length).toBe(2);

        // Debe de retornar un arreglo con los héroes de Marvel
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));

    });

});
