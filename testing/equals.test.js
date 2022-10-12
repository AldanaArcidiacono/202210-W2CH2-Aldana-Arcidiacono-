/* eslint-disable no-console */
// eslint-disable-next-line import/extensions
import strictEquals from './equals.js';

describe('Given strictEquals funciton', () => {
    // Arrange
    // FORMA RE-FACTORIZADA
    const cases = [
        { a: 1, b: 1, r: true },
        { a: NaN, b: NaN, r: false },
        { a: 0, b: -0, r: true },
        { a: -0, b: 0, r: true },
        { a: 1, b: '1', r: false },
        { a: true, b: false, r: false },
        { a: false, b: false, r: true },
        { a: true, b: true, r: true },
        { a: 'Water', b: 'oil', r: false },
        { a: 'Water', b: 'Water', r: true },
    ];

    cases.forEach((testCase) => {
        test(`When parameters are ${testCase.a} and ${testCase.b}, then result should be ${testCase.r}`, () => {
            const result = strictEquals(testCase.a, testCase.b);
            expect(result).toBe(testCase.r);
        });
    });

    // FORMA antes de factorizar:

    // test('When parameters are 1 and 1, then result should be true', () => {
    //     const a = 1;
    //     const b = 1;
    //     const expectedResult = true;
    //     const result = strictEquals(a, b);
    //     expect(result).toBe(expectedResult);
    // });
    // test('When parameters are NaN and NaN, then result should be false', () => {
    //     const a = NaN;
    //     const b = NaN;
    //     const expectedResult = false;
    //     const result = strictEquals(a, b);
    //     expect(result).toBe(expectedResult);
    // });
    // test('When parameters are 0 and -0, then result should be true', () => {
    //     const a = 0;
    //     const b = -0;
    //     const expectedResult = true;
    //     const result = strictEquals(a, b);
    //     expect(result).toBe(expectedResult);
    // });
    // test('When parameters are -0 and 0, then result should be true', () => {
    //     const a = -0;
    //     const b = 0;
    //     const expectedResult = true;
    //     const result = strictEquals(a, b);
    //     expect(result).toBe(expectedResult);
    // });
    // test('When parameters are 1 and "1", then result should be false', () => {
    //     const a = 1;
    //     const b = '1';
    //     const expectedResult = false;
    //     const result = strictEquals(a, b);
    //     expect(result).toBe(expectedResult);
    // });
    // test('When parameters are true and false, then result should be false', () => {
    //     const a = true;
    //     const b = false;
    //     const expectedResult = false;
    //     const result = strictEquals(a, b);
    //     expect(result).toBe(expectedResult);
    // });
    // test('When parameters are false and false, then result should be true', () => {
    //     const a = false;
    //     const b = false;
    //     const expectedResult = true;
    //     const result = strictEquals(a, b);
    //     expect(result).toBe(expectedResult);
    // });
    // test('When parameters are Water and oil, then result should be false', () => {
    //     const a = 'Water';
    //     const b = 'oil';
    //     const expectedResult = false;
    //     const result = strictEquals(a, b);
    //     expect(result).toBe(expectedResult);
    // });
});
