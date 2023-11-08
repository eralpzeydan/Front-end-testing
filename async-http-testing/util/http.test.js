import {expect ,it,describe,vi} from 'vitest'
import { sendDataRequest } from './http';
import { HttpError } from './errors';

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
});

it('hsould throw an HttpError in case of non-ok responses', () => {
    testFetch.mockImplementationOnce((url, options) => {
        return new Promise((resolve, reject) => {
            const testResponse = {
                ok: false,
                json() {
                    return new Promise((resolve,reject) => {
                        resolve(testResponseData);
                    });
                },
            };
            resolve(testResponse);
        });
    })

    const testData = {key: 'test'};

    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError)
})
