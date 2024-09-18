const page = require('../../page');
const helper = require('../../helper')

  

describe('Create an order', () => {
    it('setting the address', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await expect($(page.fromField)).toHaveValue('East 2nd Street, 601');
        await expect($(page.toField)).toHaveValue('1300 1st St');

    })

    it('should open phone number modal and select supportive title', async () => {
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await expect($(page.fromField)).toHaveValue('East 2nd Street, 601');
        await expect($(page.toField)).toHaveValue('1300 1st St');
        const supportiveTitle = await $(page.tcardTitleSelector);
        await supportiveTitle.waitForDisplayed();
        await supportiveTitle.click();
        

    })

   it('Filling in the phone number', async () => {
       await browser.url(`/`)
       await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
       const phoneNumberButton = await $(page.phoneNumberButton);
       await phoneNumberButton.waitForDisplayed();
       await phoneNumberButton.click();
       const pnoneNumberModal = await $(page.phoneNumberModal);
       await expect(pnoneNumberModal).toBeExisting();
        
   })
       //submit phone number
       it('submitting phone number', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');await browser.pause(2000);
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting()
   })

   it('Adding a credit card', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.addPaymentMethodCard();


        const paymentMethodButton = await $(page.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();
       
        const addCardButton = await $(page.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();


        const cardNumber = await $(page.cardNumber);
        await cardNumber.waitForDisplayed();
        await cardNumber.setValue(1234567812345678);


        const cardCode = await $(page.cardCode);
        await cardCode.waitForDisplayed();
        await cardCode.setValue(55);


        const cardSignatureStrip = await $(page.cardSignatureStrip);
        await cardSignatureStrip.waitForDisplayed();
        await cardSignatureStrip.click();
        const linkCardButton = await $(page.linkCardButton);
        await linkCardButton.waitForDisplayed();
        await linkCardButton.click();


        const closedPaymentMethodModalButton = await $(page.closedPaymentMethodModalButton);
        await closedPaymentMethodModalButton.waitForDisplayed();
        await closedPaymentMethodModalButton.click();


        const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await expect(await $(cardPaymentMethodIcon)).toBeExisting();

   })
   it('send message to driver', async () => {
    await browser.url('/'); 
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    await page.selectSupportiveTitle();
    await page.setMessageToDriver('bring some Jack Daniels');
    const messageInputSelector= await $(page.messageInputSelector);
    await expect(messageInputSelector).toHaveValue('bring some Jack Daniels');

   })

   it('should select Blanket and Handkerchiefs and verify state change', async () => {
    await browser.url('/');
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');    
    const supportiveTitle = await $(page.tcardTitleSelector);
    await supportiveTitle.waitForDisplayed();
    await supportiveTitle.click();
    await page.selectSupportiveTitle();
    await page.selectBlanketAndHandkerchiefs();
    await expect($(page.blanketCheckboxSelector)).toBeExisting();
    
    
  })
  it('should order 2 ice creams', async() => {
    await browser.url(`/`);
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    await page.selectSupportiveTitle();
    await page.orderIceCreamPlusButtonSelector();
    const iceCreamFieldSelector = await $(page.iceCreamFieldSelector);
    await expect(iceCreamFieldSelector).toHaveTextContaining('2');
    
})

})
it('should open the car search modal', async() => {
    await browser.url(`/`);
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    await page.openCarSearchModal();
    const carSearchModal = await $(page.carSearchModal);
    await expect(carSearchModal).toBeExisting();
});

it('should display driver information', async() => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.setMessageToDriver('bring some Jack Daniels')
        await page.openCarSearchModal();
        await page.showDriverInfo();
        const driverNumberField = await $(page.driverNumberField)
        await expect(driverNumberField).toBeExisting();
});


