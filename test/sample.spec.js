describe('simple test for fv main console', async  () => {
    let page;
    
    before(async () => {
        page = await browser.newPage();
        await page.goto("https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin");
        await page.setViewport( { width: 1920, height: 1040} );
    });

    after(async function () {
        await page.close();
    });

    it('should login to home page', async () => {
        const emailInput = "#username";
        const passwordInput = "#password";
        const submitSelector = "#app__container > main > div > form > div.login__form_action_container > button";
         
         linkEmail = await page.$(emailInput);
         linkPassword = await page.$(passwordInput);
         linkSubmit = await page.$(submitSelector);

         await linkEmail.click({ clickCount: 3 });
         await linkEmail.type('jnicolas_180000002934@uic.edu.ph'); // add the email address for linkedin //

         await linkPassword.click({ clickCount: 3});
         await linkPassword.type('June0611'); // add password for linkedin account

         await linkSubmit.click();
         await page.waitForNavigation();
         await page.waitFor(3000);
    });
});