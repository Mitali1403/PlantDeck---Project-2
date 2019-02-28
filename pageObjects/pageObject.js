var Cart = {
  clickText: function (text) {                        //Click by text
    this.api.useXpath()
    this.click(`//*[text()="${text}"]`)
    this.api.useCss()
    return this
  },

  AddItem: function () {
    this
      .waitForElementVisible('@Header', 5000)
      .click("@Item")
      .click('@AddtocartButton')
      .click('@CheckoutButton')
      .expect.element('@CartTitle').text.to.contain('YOUR SHOPPING CART').before(5000)
    return this

  },
}

module.exports = {
  url: 'https://www.plantdeck.com/',
    commands: [Cart],               //called the command here
  elements: {
    Header: 'img[class="hvr-shrink"]',
    /*  Email: '#username', 
      Password: '#password',
      LoginButton: '#login-box > div > form > p:nth-child(4) > input.button.submit.login-button', */
    AddtocartButton: 'button[type="submit"]',
    CheckoutButton: 'div[class="pd-proceed-checkout"]',
    CartTitle: 'div[class="pd-cart-title"]', 
    
    Item: {
     selector: '//*[text()="CALATHEA ZEBRINA - ACHAAR JAR"]',
     locateStrategy: 'xpath'
    },
  },
}


