import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";

import LoginPage from '../../../../support/PageObject/LoginPageAction'
import HomePage from '../../../../support/PageObject/HomePageAction'
import SettingPage from '../../../../support/PageObject/SettingPageAction'

const loginPage = new LoginPage()
const homePage = new HomePage()
const settingPage = new SettingPage()

Given('user provide username', function(){

    cy.visit("https://content-portal.productsup.com/login")
    loginPage.getEmailID().type(this.data.email)
})

When('user provide password', function(){

    loginPage.getPassword().type(this.data.Password)
    
})

Then('user click on login button', ()=>{

    loginPage.loginbutton().click()
})

//New Flow 

And('user click on selectAll', ()=>{

    homePage.getSelectall().click()
})

And('user click on ViewSelected', ()=>{
  
    homePage.getViewSelected().click()
    
})

And('user validate settings page', ()=>{
    
    settingPage.getAccount().click()
    settingPage.getPreference().click()
    settingPage.getdropdown().click()
    settingPage.clickonselecteddropdown().click()
    settingPage.clickCatalog().click()
    settingPage.addCatalog().click()
    settingPage.closeCatalog().click()
    settingPage.clickMembers().click()
    settingPage.inviteMembers().click()
    settingPage.closeMember().click()
   
})
