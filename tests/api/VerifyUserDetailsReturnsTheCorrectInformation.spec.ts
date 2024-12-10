import {test, expect} from '@playwright/test';

const email = "<YOUR EMAIL>";
const password = "<YOUR PASSOWRD>";
const baseURL = "<YOUR BASE URL>";
const tokenEndpoint = "<TOKEN ENDPOINT>";
let token = "";

test.beforeAll(async ({request}) => {
    const response = await request.post(baseURL, {
        data: {
            userEmail: email,
            password: password
        },
    });

    expect(response.status()).toBe(200);
    const respnseBody = await response.json();
    expect(respnseBody).toHaveProperty('wpUserToken');
    token = respnseBody.wpUserToken;
});

test('VerifyUserDetailsReturnsTheCorrectInformation', async ({request}) => {

    await test.step('Get User details via token', async () => {
        console.log(token);
        const response = await request.get(tokenEndpoint, {
            headers: {
                authorization: `Bearer ${token}`,
            }
        });
        
        console.log(await response.json());
        expect(response.status()).toBe(200);
        const respnseBody = await response.json();
        expect(respnseBody.lastName).toBe("Suraweera");
        expect(respnseBody.firstName).toBe("Harsha");
        expect(respnseBody.email).toBe(email);
        expect(respnseBody.country).toBe("LK");
    });

});