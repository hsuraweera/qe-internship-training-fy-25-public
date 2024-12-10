## TC 01 - VerifyProductSearchFunctionalityOfWileyEcommerceSite

**Preconditions:**
- User has access to the internet and a web browser.
- The Wiley.com website is accessible.

| Steps | Expected Results |
|---|---|
| Open https://www.wiley.com | Wiley's homepage should be visible. |
| Click on the search field and enter the ISBN `9781119592402`. | The ISBN should be entered. |
| Hit enter key. | - Search results should be visible.<br>- Product name should be **"Microbiology, 3rd Edition"**.<br>- The price should be **$121.95**.<br>- **Learn More** button should be visible.<br>- Product should be marked as featured, and the background color should be yellow. |

---

## TC 02 -VerifyAccessibilityOnEcommerceSearchResultsPage

**Preconditions:**
- User has access to the internet and a web browser.
- The Wiley.com website is accessible.

| Steps | Expected Results |
|---|---|
| Open https://www.wiley.com | Wiley's homepage should be visible. |
| Click on the search field and enter the ISBN `9781119592402`. | The ISBN should be entered. |
| Hit enter key. | - Search results should be visible.<br>- Product name should be **"Microbiology, 3rd Edition"**. |
| Scan for accessibility violations. | It should not have any violations. |

---

## TC 03 - VerifyLoginRequestWithValidCredentials

**Preconditions:**
- The login endpoint `<endpoint>` is accessible.

| Steps | Expected Results |
|---|---|
| Send a POST request to `<endpoint>` with the following credentials:<br>- **Email**: `<email>`<br>- **Password**: `<password>` | - The response code is **200** and the status is **OK**.<br>- The response body contains a `wpUserToken` attribute. |

---

## TC 04 - VerifyUserDetailsReturnsTheCorrectInformation

**Preconditions:**
- A valid authentication token has been obtained.

| Steps | Expected Results |
|---|---|
| Send a GET request to `<endpoint>` with a valid authentication token. | - The response code is **200** and the status is **OK**.<br>- The response body contains the email as **`<email>`** , firstName as **`Harsha`**, lastName as **`Suraweera`** and the country as **`LK`** |
