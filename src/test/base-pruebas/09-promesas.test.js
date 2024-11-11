import { getHeroeByIdAsync } from '../../base-pruebas/base-pruebas/09-promesas';

describe('Pruebas en 09-promesas', () => {

    test('getHeroeByIdAsync debe de retornar un héroe', (done) => {

        // 1. inicialización
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {

                // 3. observar el comportamiento... esperado
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                // Decirle a Jest que ya termino el ejercicio asincrono
                done();
            });

    });

    test('getHeroeByIdAsync debe de obtener un error si heroe no existe', (done) => {

        // 1. inicialización
        const id = 100;
        getHeroeByIdAsync(id)
            .then(hero => {

                // 3. observar el comportamiento... esperado
                expect(hero).toBeFalsy();

                // Decirle a Jest que ya termino el ejercicio asincrono
                done();
            })
            .catch(error => {

                // 3. observar el comportamiento... esperado
                expect(error).toBe(`No se pudo encontrar el héroe ${id}`)

                // Decirle a Jest que ya termino el ejercicio asincrono
                done();
            });

    });

});
