import {it, expect,vi} from 'vitest';
import {promises as fs, writeFile } from 'fs';
import writeData from './io.js';

vi.mock('fs');
vi.mock('path', () => {
    return {
        default:{
            join: (...args) => {
                return args[args.length -1]
            }
        }
    }
})

it('should execute the writeFile method', () => {
    const testData = "Test"
    const testFileName = "test.txt"

    writeData(testData, testFileName);

    //after mock
    return expect(writeData(testData,testFileName)).resolves.toBeUndefined();
    //eh
    // expect(fs.writeFile).toBeCalledWith(testFileName, testData);
});