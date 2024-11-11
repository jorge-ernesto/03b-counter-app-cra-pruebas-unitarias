import { render, screen } from '@testing-library/react';
import { FirstApp } from '../../components/FirstApp';

describe('Pruebas en <FirstApp />', () => {

    const title = "Hola, soy Goku";
    const subTitle = 777;

    test('debe de hacer match con el snapshot', () => {

        // 1. inicialización
        const { container } = render(
            <FirstApp
                title={title}
                subTitle={123}
            />
        );

        // 3. observar el comportamiento... esperado
        expect(container).toMatchSnapshot();

    });

    test('debe de mostrar el mensaje "Hola, soy Goku"', () => {

        // 1. inicialización
        render(
            <FirstApp
                title={title}
                subTitle={123}
            />
        );

        // Debug
        // console.log('screen', screen); // Objeto screen del ultimo render
        // screen.debug(); // HTML del ultimo render

        // 3. observar el comportamiento... esperado
        expect(
            screen.getByText(title)
        ).toBeTruthy();

    });

    test('debe de mostrar el título en un h1', () => {

        // 1. inicialización
        render(
            <FirstApp
                title={title}
                subTitle={123}
            />
        );

        // Debug
        // level 1 significa h1
        console.log(
            'heading',
            screen.getAllByRole('heading', { level: 1 })[0].innerHTML
        );

        // 3. observar el comportamiento... esperado
        expect(
            screen.getAllByRole('heading', { level: 1 })[0].innerHTML
        ).toContain(title);

    });

    test('debe de mostrar el subtitulo enviado por props', () => {

        // 1. inicialización
        render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            />
        );

        // 3. observar el comportamiento... esperado
        // Comprobar texto
        expect(
            screen.getAllByText(subTitle).length
        ).toBe(2);

    });

});
