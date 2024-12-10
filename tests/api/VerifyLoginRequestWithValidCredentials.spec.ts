import { test, expect } from "@playwright/test";

const email = "<YOUR EMAIL>";
const password = "<YOUR PASSOWRD>";
const baseURL = "<YOUR BASE URL>";

test("VerifyLoginRequestWithValidCredentials", async ({ request }) => {

  await test.step("Send a POST request to the login endpoint with valid credentials", async () => {
    const response = await request.post(baseURL, {
      data: {
        userEmail: email,
        password: password,
      },
    });

    expect(response.status()).toBe(200);
    const respnseBody = await response.json();
    expect(respnseBody).toHaveProperty("wpUserToken");
  });
});
