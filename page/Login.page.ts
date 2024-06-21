import { Page } from "@playwright/test";
const { expect } = require("@playwright/test");
import * as selectors from '../utils/selectors.json';

export default class LoginPage {

    constructor(public page: Page) {
       
    }

    async Enterfname(username: string) {
        await this.page.locator(selectors.LoginPage.fname).type(username);
    }
    async Enterlname(username: string) {
        await this.page.locator(selectors.LoginPage.lname).type(username);
    }
    async Enteremail(username: string) {
        await this.page.locator(selectors.LoginPage.email).type(username);
    }
    async enterMobile(username: string) {
        await this.page.locator(selectors.LoginPage.mobile).type(username);
    }
    async enterDOB(username: string) {
        //await this.page.locator(selectors.LoginPage.dob).clear();
        await this.page.locator(selectors.LoginPage.dob).type(username);
    }
    async enterSubject(username: string) {
        
        await this.page.locator(selectors.LoginPage.subject).type("English");
        await this.page.keyboard.press('Enter');
        const options = this.page.locator("div[class='subjects-auto-complete_menu']")
        const values = await options.allTextContents();
        console.log(values)
        const optionsCount = await options.count();
       
        // Iterate through each value 
        for(let i = 0; i < optionsCount; i++)
        {
            // Get text of nth value
            const text = await options.nth(i).textContent();
            console.log(text);
            // if text matches the expected value
            if(text==="Maths")
            {
                // click and break lloop
                await options.nth(i).click();
                break;
            }    
        }

         
    }
    
    async enterAddress(username: string) {
        await this.page.locator(selectors.LoginPage.address).type(username);
    }


    async clickGender() {
        await this.page.click(selectors.LoginPage.gender);
    }
    async clicksubmit() {
        await this.page.click(selectors.LoginPage.submit);
    }
    async clickHobbies() {
        await this.page.click(selectors.LoginPage.hobies);
    }
    async clickState(state: string) {
        await this.page.click(selectors.LoginPage.state);
        await this.page.waitForTimeout(3000);
        this.page.locator('//*[contains(text(),"NCR")]').click();
          
        
    }
    async clickCity(city: string) {
        await this.page.waitForTimeout(3000);
        await this.page.click(selectors.LoginPage.city);
        await this.page.waitForTimeout(3000);
        this.page.locator('//*[contains(text(),"Delhi")]').click();
          
    }
    async uplaodpic() {
      // Click input[name="file-upload"]
    await this.page.locator('input[id="uploadPicture"]').click();
 
    // Upload fixture.pdf
    await this.page.locator('input[id="uploadPicture"]').setInputFiles('./test/fixture.pdf');
 
    // Click text=fixture.pdf
    //await this.page.locator('text=fixture.pdf').click();
    }
    async screenshot()
    {
        await this.page.screenshot({path: 'test/visibleWindow.png'})
    }
    async AssertionValue()
    {
         
        await expect.soft(this.page.getByText('Thanks for submitting the form'), 'Thanks for submitting the form should be visible').toBeVisible();   
    }

    async AssertionInvalidValue()
    {
         
        await expect.soft(this.page.getByText('Thanks for submitting the form'), 'Thanks for submitting the form should not be visible').toHaveCount(0);  
    }

}