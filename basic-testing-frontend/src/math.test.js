import { it , expect} from 'vitest';
import { add } from './math'

it('should summarise all the values in the array',() => {
    //arrange
    const numbers = [1,2]

    //act
    const result = add(numbers);

    //assert
    const expectedResult = numbers.reduce( 
        (prevVal , currentVal) => prevVal + currentVal,
        0
    );
    expect(result).toBe(expectedResult);
});

it('should yield to NaN if invalid input provided', () => {
    const inputs = ['invalid', 1];

    const result = add(inputs);

    expect(result).toBeNaN();
});

it('should yield to correct sum if inputs are string', () => {
    const inputs = ['1' , '2'];

    const result = add(inputs);

    const expectedResult = inputs.reduce( 
        (prevVal , currentVal) => +prevVal + +currentVal,
        0
    );

    expect(result).toBe(expectedResult);

});

it('should yield to 0 if no input provided', () => {
    const inputs = [];

    const result = add(inputs);

    expect(result).toBe(0);
});

it('should throw and error if no value passed into function',() => {
    const resultFn = () => {
        add();
    }

    expect(resultFn).toThrow(/is not iterable/);
});

it('should throw an error if multiple arguments providede instead of array', () => {
    const num1 = 1
    const num2 = 2

    const resultFn = () => {
        add(num1,num2);
    };

    expect(resultFn).toThrow(/is not iterable/)
});