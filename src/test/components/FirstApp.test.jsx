import { render } from '@testing-library/react';
import { FirstApp } from '../../components/FirstApp';

describe('Pruebas en <FirstApp />', () => {


    // Las pruebas de snapshot ayuda a que el componente se quede asi por un periodo de tiempo
    // Pero si estan en desarrollo, no vale la pena hacer snapshot, porque dara muchos dolores de cabeza
    /*
    test('debe de hacer match con el snapshot', () => {

        // 1. inicialización
        const title = "Hola, soy Goku";
        const { container } = render(
            <FirstApp
                title={title}
                subTitle={123}
            />
        );

        // 3. observar el comportamiento... esperado
        expect(container).toMatchSnapshot();

    });
    */

    test('debe de mostrar el título en un h1', () => {

        // 1. inicialización
        const title = "Hola, soy Goku";
        const { container, getByText, getByTestId } = render(
            <FirstApp
                title={title}
                subTitle={123}
            />
        );

        // Debug
        // console.log('container', container);
        // console.log('getByText', getByText);
        // console.log('getByTestId', getByTestId);

        // 3. observar el comportamiento... esperado
        // Comprobar texto
        // expect(getByText(title)).toBeTruthy();

        // Comprobar texto, buscar por h1
        // const h1 = container.querySelector('h1').innerHTML;
        // console.log('h1', h1);
        // expect(h1).toContain(title);

        // Comprobar texto, buscar por id
        expect(getByTestId('test-title')).toBeTruthy();

        // Comprobar texto, buscar por id
        expect(getByTestId('test-title').innerHTML).toContain(title);

    });

    test('debe de mostrar el subtitulo enviado por props', () => {

        // 1. inicialización
        const title = "Hola, soy Goku";
        const subTitle = 777;
        const { getAllByText } = render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            />
        );

        // 3. observar el comportamiento... esperado
        // Comprobar texto
        expect(getAllByText(subTitle).length).toBe(2);

    });

});
