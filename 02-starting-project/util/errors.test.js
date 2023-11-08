import {it,describe,expect} from 'vitest'
import { HttpError } from './errors';

describe('HTTP errors', () => {
    it('constructor elements should be provided', () => {
        const testStatus = 1;
        const testMessage = "asdfgdsaf"
        const testData = {};
        
        const testObj = new HttpError(testStatus,testMessage,testData);

        expect(testObj.statusCode).toBe(testStatus)
        expect(testObj.message).toBe(testMessage)
        expect(testObj.data).toBe(testData)
    })
})