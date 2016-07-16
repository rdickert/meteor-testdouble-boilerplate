module.exports = function() {
  
  this.Given(/^I am viewing a "([^"]*)" field$/, function (arg1) {

  	const 
  	  homepage       = 'http://localhost:3000',
      new_note_field = 'input.note-title'

    browser.url(homepage)
    browser.waitForExist(new_note_field)

  })

  this.Given(/^I can click on the "([^"]*)" field$/, function (arg1) {
    // Write the automation code here
    pending()
  })

  this.When(/^I type "([^"]*)" into the field$/, function (arg1) {
    // Write the automation code here
    pending()
  })

  this.When(/^I hit the return key on my keyboard$/, function () {
    // Write the automation code here
    pending()
  })

  this.Then(/^a note with the title "([^"]*)" should be created$/, function (arg1) {
    // Write the automation code here
    pending()
  })

}

