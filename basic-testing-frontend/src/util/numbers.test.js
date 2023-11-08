import {it , expect} from 'vitest';
import {transformToNumber} from "./numbers.js";

it('should convert strings to numbers', () => {
    const input = '1'
    const result = transformToNumber(input);
    expect(result).toBeTypeOf('number')
});

it('should provided single value', () => {
    const input = [1,2]
    
    const resultFn = () => {
        transformToNumber(input);
        expect(resultFn).toBeTypeOf('number');
    };

    expect(resultFn).toThrow();
});

it('should be providede by convertable string', () => {
    const input = "hello"
    const input2 = {};

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result2).toBeNaN();
    expect(result).toBeNaN();
});
