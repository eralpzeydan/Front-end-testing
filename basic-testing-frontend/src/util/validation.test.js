import {it , expect} from 'vitest';
import {validateNumber , validateStringNotEmpty} from './validation.js';

it('should be provided with number', () => {
    const input = 'invalid'
    const input2 = {};

    const resultFn = () => {
        validateNumber(input);
        validateNumber(input2);
    }

    expect(resultFn).toThrow();
});

it('should has no input which is empty string', () => {
    const input = '';

    const resultFn = () => {
        validateStringNotEmpty(input);
    }

    expect(resultFn).toThrow();
});