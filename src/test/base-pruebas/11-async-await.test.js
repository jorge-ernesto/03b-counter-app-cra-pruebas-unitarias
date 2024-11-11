import { getImagen } from '../../base-pruebas/base-pruebas/11-async-await';

describe('Pruebas en 11-async-await.js', () => {

    test('getImagen debe de retornar una URL de la imagen', async () => {

        // 1. inicialización
        // 60. Pruebas con async-await
        // Limite de 100 llamadas al API de GIPHY por hora
        // https://www.udemy.com/course/react-cero-experto/learn/lecture/19727760#overview
        const url = await getImagen();

        // Debug
        console.log('url --', url);

        // 3. observar el comportamiento... esperado
        expect(typeof url).toBe('string');

    });

});
