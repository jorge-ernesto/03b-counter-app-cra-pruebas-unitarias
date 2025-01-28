import { getSaludo } from '../../base-pruebas/base-pruebas/02-template-string';

describe('Pruebas en 02-template-string', () => {

    test('getSaludo debe retornar "Hola Fernando"', () => {

        // 1. inicialización
        const name = 'Fernando';
        const message = getSaludo(name);

        // 3. observar el comportamiento... esperado
        expect(message).toBe(`Hola ${name}`);

    });

});
