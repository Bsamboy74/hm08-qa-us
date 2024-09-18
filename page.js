module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    cardNumber: '#number',
    cardCode: '.card-second-row #code',
    iceCreamFieldSelector:'.counter-value',
    driverNumberField: ".order-number",
    // Using id attribute
    messageInputSelector: '#comment',
    // Buttons
    callATaxiButton: '.button.round',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    paymentMethodButton: '.pp-text',
    addCardButton: 'div=Add card',
    linkCardButton: '//button[text()="Link" and contains(@class, "button full")]',
    closedPaymentMethodModalButton: '.payment-picker .close-button',
    cardPaymentMethodIcon: 'img[alt="card"]',
    tcardTitleSelector: 'div=Supportive',
    HandkerchiefCheckBox: '.r-sw',
    blanketCheckboxSelector: '.switch-input',
    chiefsLabelSelector: '.switch',
    iceCreamPlusButtonSelector: '.counter-plus',
    smartButtonSelector: "button.smart-button",
    orderButton : '.smart-button-wrapper',
    // Modals`  
    phoneNumberModal: '.modal',
    carSearchModal: '.order-body',
    //Misc
    cardSignatureStrip:'.plc',

    // Functions
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);

        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        callATaxiButton.scrollIntoView();
        await callATaxiButton.waitForClickable({ timeout: 5000 });
        await callATaxiButton.click();
    },

    selectSupportiveTitle: async function() {
        const supportiveTitle = await $(this.tcardTitleSelector);
        await supportiveTitle.waitForDisplayed();
        await supportiveTitle.click();
    },

    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },

    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        const requests = await browser.getRequests();               
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click();
 
    },
   
    addPaymentMethodCard: async function() {
        const paymentMethodButton = await $(this.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();
       
        const addCardButton = await $(this.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();
   
        const cardNumber = await $(this.cardNumber);
        await cardNumber.waitForDisplayed();
        await cardNumber.setValue(1234567812345678);
   
        const cardCode = await $(this.cardCode);
        await cardCode.waitForDisplayed();
        await cardCode.setValue(55);
   
        const cardSignatureStrip = await $(this.cardSignatureStrip);
        await cardSignatureStrip.waitForDisplayed();
        await cardSignatureStrip.click();
   
        const linkCardButton = await $(this.linkCardButton);
        await linkCardButton.waitForDisplayed();
        await linkCardButton.click();
   
        const closedPaymentMethodModalButton = await $(this.closedPaymentMethodModalButton);
        await closedPaymentMethodModalButton.waitForDisplayed();
        await closedPaymentMethodModalButton.click();
    },

    setMessageToDriver: async function(message) {
        const messageInputSelector = await $(this.messageInputSelector); // Retrieve the element using the selector
        await messageInputSelector.scrollIntoView(); // Wait for the element to be visible 
        await messageInputSelector.waitForExist();
        await messageInputSelector.setValue('bring some Jack Daniels');
    },
    
    selectHandkerchiefCheckBox: async function() {
        const checkbox = await $(this.HandkerchiefCheckBox);
        await checkbox.waitForDisplayed({ timeout: 60000 });
        await checkbox.click();
    },

    
    selectBlanketAndHandkerchiefs: async function() {
        const checkbox = await $(this.chiefsLabelSelector);
        await checkbox.scrollIntoView();
        await checkbox.waitForDisplayed({ timeout: 10000 });
        await checkbox.click();
    },

    
    orderIceCreamPlusButtonSelector: async function() {
        const iceCreamPlusButtonSelector = await $(this.iceCreamPlusButtonSelector);
        await iceCreamPlusButtonSelector.scrollIntoView();
        await iceCreamPlusButtonSelector.waitForDisplayed();
        await iceCreamPlusButtonSelector.click();
        await iceCreamPlusButtonSelector.click();
        const iceCreamFieldSelector = await $(this.iceCreamFieldSelector);
        await iceCreamFieldSelector.waitForDisplayed();
    },
    openCarSearchModal: async function() {
        const orderButton = await $(this.orderButton);
        await orderButton.waitForDisplayed();
        await orderButton.click();
        const carSearchModal = await $(this.carSearchModal);
        await carSearchModal.waitForExist();
     },

     showDriverInfo: async function() {
        const driverNumberField = await $(this.driverNumberField);
        await driverNumberField.waitForExist({timeout: 400000});
    
    }

    };





