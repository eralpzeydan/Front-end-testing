import {expect ,it,describe,vi} from 'vitest'
import { sendDataRequest } from './http';

const testResponseData = {testKey : 'testData'};

const testFetch = vi.fn( (url, options) => {
    return new Promise((resolve, reject) => {
        if(typeof options.body !== 'string'){
            return reject('Not a string');
        }
        const testResponse = {
            ok: true,
            json() {
                return new Promise((resolve,reject) => {
                    resolve(testResponseData);
                });
            },
        };
        resolve(testResponse);
    });
});

vi.stubGlobal('fetch', testFetch);

it("should retrun any available response data ", () =>{
    const testData = {key: 'test'}

    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
} )

it('should convert to provided data to JSON before sending the request', async() => {
    const testData = { key: 'test'}

    let errorMessage;

    try{
        await sendDataRequest(testData)
    }catch(err){ 
        errorMessage = err;
    }

    expect(errorMessage).not.toBe('Not a string');
})