/* eslint-disable no-console */
// eslint-disable-next-line import/extensions
import strictEquals from './equals.js';

// Gherking Usamos el formato given when then al testear

describe('Given strictEquals funciton', () => {
    test('When parameters are 1 and 1, then result should be true', () => {
        // AAA =
        // Arange Preparar. Traducir una linea de enunciado escrito a parametro
        const a = 1;
        const b = 1;
        const expectedResult = true;
        // Act Actuar
        const result = strictEquals(a, b);
        // Asset Comporbar Espero que pase..
        expect(result).toBe(expectedResult);
    });
    test('When parameters are NaN and NaN, then result should be false', () => {
        const a = NaN;
        const b = NaN;
        const expectedResult = false;
        const result = strictEquals(a, b);
        expect(result).toBe(expectedResult);
    });
    test('When parameters are 0 and -0, then result should be true', () => {
        const a = 0;
        const b = -0;
        const expectedResult = true;
        const result = strictEquals(a, b);
        expect(result).toBe(expectedResult);
    });
    test('When parameters are -0 and 0, then result should be true', () => {
        const a = -0;
        const b = 0;
        const expectedResult = true;
        const result = strictEquals(a, b);
        expect(result).toBe(expectedResult);
    });
    test('When parameters are 1 and "1", then result should be false', () => {
        const a = 1;
        const b = '1';
        const expectedResult = false;
        const result = strictEquals(a, b);
        expect(result).toBe(expectedResult);
    });
    test('When parameters are true and false, then result should be false', () => {
        const a = true;
        const b = false;
        const expectedResult = false;
        const result = strictEquals(a, b);
        expect(result).toBe(expectedResult);
    });
    test('When parameters are false and false, then result should be true', () => {
        const a = false;
        const b = false;
        const expectedResult = true;
        const result = strictEquals(a, b);
        expect(result).toBe(expectedResult);
    });
    test('When parameters are Water and oil, then result should be false', () => {
        const a = 'Water';
        const b = 'oil';
        const expectedResult = false;
        const result = strictEquals(a, b);
        expect(result).toBe(expectedResult);
    });
});

// console.log(strictEquals(1, 1));
// console.log(strictEquals(NaN, NaN));
// console.log(strictEquals(0, -0));
// console.log(strictEquals(-0, 0));
// console.log(strictEquals(1, '1'));
// console.log(strictEquals(true, false));
// console.log(strictEquals(false, false));
// console.log(strictEquals('Water', 'oil'));
