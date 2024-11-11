import { getUser, getUsuarioActivo } from '../../base-pruebas/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un objeto', () => {

        // 1. inicialización
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();

        // 3. observar el comportamiento... esperado
        // Se usa toEqual o toStrictEqual cuando se comparan objetos
        expect(testUser).toStrictEqual(user);

    });

    test('getUsuarioActivo debe retornar un objeto', () => {

        // 1. inicialización
        const name = 'Fernando';
        const user = getUsuarioActivo(name);

        // 3. observar el comportamiento... esperado
        // Se usa toEqual o toStrictEqual cuando se comparan objetos
        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
        });

    });

});
