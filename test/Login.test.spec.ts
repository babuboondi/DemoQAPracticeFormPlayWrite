import { test, expect } from "@playwright/test";

import LoginPage from "../page/Login.page";
import * as users from "../data/credentials.json";
//TestCases for new Form application:-Its not possibleto apply all the test cases on practice-Automation site
//having no validations in place
// planned scenarios :
//TC01_Verify that all mandatory fields are marked as such and cannot be left blank
//TC02_ Validate that the registration form accepts valid and unique email addresses
//TC03_Test if the registration form displays the right error messages for invalid or wrong inputs
//TC04_Verify that the registration form clears all fields after a successful registration
//TC05_Validate that the form prevents registration with an already registered email address
//TC06_Test if the registration page has proper validation for optional fields
//TC07_Verify that a user receives a confirmation email upon the completion of a successful registration session
//TC08_Test if the registration form supports different input formats, such as uppercase, lowercase, and mixed case
//TC09_Test if the registration page has a "gender" Radio buttons that is marked as a mandatory field
//TC10_Test if the registration page has proper validation for business phone number formats
//TC11_Test if the registration form has a "Reset" or "Clear" button that clears all entered data
//TC12_Test if the registration process includes encryption of sensitive user information


test.describe("Practice Form DEMOQA Feature @login", async () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page, baseURL }) => {
        loginPage = new LoginPage(page);
        await page.goto(`${baseURL}`);
    })

    test("Positive: Standard user tries to Enter valid Details and submit form", async ({ page }) => {

        await loginPage.Enterfname(users.standard.fname);
        await loginPage.Enterlname(users.standard.lname);
        await loginPage.Enteremail(users.standard.email);
        await loginPage.enterDOB(users.standard.dob); 
        await loginPage.enterMobile(users.standard.mobile); 
        await loginPage.enterSubject(users.standard.subject); 
        await loginPage.enterAddress(users.standard.address); 
        await loginPage.clickGender(); 
        await loginPage.clickHobbies(); 
        await loginPage.clickState('NCR'); 
        await loginPage.clickCity('Delhi'); 
        await loginPage.uplaodpic();
        await loginPage.screenshot();
        await loginPage.clicksubmit();
        //Thanks for submitting the form should be visible
        await loginPage.AssertionValue();
    });
    test("Negative:  User tries to invalid emailid", async ({ page }) => {

        await loginPage.Enterfname(users.standard.fname);
        await loginPage.Enterlname(users.standard.lname);
        await loginPage.Enteremail(users.invalidemail.email);
        await loginPage.enterDOB(users.standard.dob); 
        await loginPage.enterMobile(users.standard.mobile); 
        await loginPage.enterSubject(users.standard.subject); 
        await loginPage.enterAddress(users.standard.address); 
        await loginPage.clickGender(); 
        await loginPage.clickHobbies(); 
        await loginPage.clickState('NCR'); 
        await loginPage.clickCity('Delhi'); 
        await loginPage.uplaodpic();
        await loginPage.screenshot();
        await loginPage.clicksubmit();
        //Thanks for submitting the form should Not be visible
        await loginPage.AssertionInvalidValue();
    });
    test("Negative: User tries to Blank Value", async ({ page }) => {

        await loginPage.Enterfname(users.blankvalue.fname);
        await loginPage.Enterlname(users.blankvalue.lname);
        await loginPage.Enteremail(users.blankvalue.email);
        await loginPage.enterDOB(users.standard.dob); 
        await loginPage.enterMobile(users.standard.mobile); 
        await loginPage.enterSubject(users.standard.subject); 
        await loginPage.enterAddress(users.standard.address); 
        await loginPage.clickGender(); 
        await loginPage.clickHobbies(); 
        await loginPage.clickState('NCR'); 
        await loginPage.clickCity('Delhi'); 
        await loginPage.uplaodpic();
        await loginPage.screenshot();
        await loginPage.clicksubmit();
        //Thanks for submitting the form should Not be visible
        await loginPage.AssertionInvalidValue();
    });
    test("Negative: User tries to invalid date in DOB", async ({ page }) => {

        await loginPage.Enterfname(users.blankvalue.fname);
        await loginPage.Enterlname(users.blankvalue.lname);
        await loginPage.Enteremail(users.blankvalue.email);
        await loginPage.enterDOB(users.invaliddate.dob); 
        await loginPage.enterMobile(users.standard.mobile); 
        await loginPage.enterSubject(users.standard.subject); 
        await loginPage.enterAddress(users.standard.address); 
        await loginPage.clickGender(); 
        await loginPage.clickHobbies(); 
        await loginPage.clickState('NCR'); 
        await loginPage.clickCity('Delhi'); 
        await loginPage.uplaodpic();
        await loginPage.screenshot();
        await loginPage.clicksubmit();
        //Thanks for submitting the form should Not be visible
        await loginPage.AssertionInvalidValue();
    });
    test("Negative: User tries to invalid phone number", async ({ page }) => {

        await loginPage.Enterfname(users.blankvalue.fname);
        await loginPage.Enterlname(users.blankvalue.lname);
        await loginPage.Enteremail(users.blankvalue.email);
        await loginPage.enterDOB(users.invaliddate.dob); 
        await loginPage.enterMobile(users.invalidphone.mobile); 
        await loginPage.enterSubject(users.standard.subject); 
        await loginPage.enterAddress(users.standard.address); 
        await loginPage.clickGender(); 
        await loginPage.clickHobbies(); 
        await loginPage.clickState('NCR'); 
        await loginPage.clickCity('Delhi'); 
        await loginPage.uplaodpic();
        await loginPage.screenshot();
        await loginPage.clicksubmit();
        //Thanks for submitting the form should Not be visible
        await loginPage.AssertionInvalidValue();
    });
    test("Negative: User tries to invalid value with special char", async ({ page }) => {

        await loginPage.Enterfname(users.invalidvalues.fname);
        await loginPage.Enterlname(users.invalidvalues.lname);
        await loginPage.Enteremail(users.invalidvalues.email);
        await loginPage.enterDOB(users.invalidvalues.dob); 
        await loginPage.enterMobile(users.standard.mobile); 
        await loginPage.enterSubject(users.standard.subject); 
        await loginPage.enterAddress(users.standard.address); 
        await loginPage.clickGender(); 
        await loginPage.clickHobbies(); 
        await loginPage.clickState('NCR'); 
        await loginPage.clickCity('Delhi'); 
        await loginPage.uplaodpic();
        await loginPage.screenshot();
        await loginPage.clicksubmit();
        //Thanks for submitting the form should Not be visible
        await loginPage.AssertionInvalidValue();
    });
   
})