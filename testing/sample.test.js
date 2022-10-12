// eslint-disable-next-line import/extensions
import { add } from './sample.js';

// Primero descipcion despues call back
describe('Testing add', () => {
    test('if a = 2 and b = 2 add should be', () => {
        const a = 2;
        const b = 2;
        expect(add(a, b)).toBe(4);
    });
});
