import {describe,it,expect,beforeEach }from 'vitest'
import { extractPostData } from './posts'

const testTitle = "test title"
const testContent = "test content"

let testFromData;

describe('extractPostData()', () => {
    beforeEach(() => {
        testFromData = {
            title: testTitle,
            content: testContent,
            get(identifier){
                return this[identifier];
            },
        }
    })

    it('should extract title and contet from providede from data', () => {
        const testTitle = "test title"
        const testContent = "test content"

        const testFromData = {
            title: testTitle,
            content: testContent,
            get(identifier){
                return this[identifier];
            },
        }

        const data = extractPostData(testFromData);

        expect(data.title).toBe(testTitle);
        expect(data.content).toBe(testContent);
    })

})