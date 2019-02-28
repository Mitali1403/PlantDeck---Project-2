var Add = {}           // var EmployeeManager = {}

module.exports = { //calling the functions here
    beforeEach: browser => {
        Add = browser.page.pageObject() //pageObject is the name of our folder
        Add.navigate()
    },
    after: browser => {
        browser.end()
    },
    'Add an item': browser => {
        browser.maximizeWindow()
        Add.AddItem()
    
        }
}     
