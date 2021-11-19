
// type definitions for Cypress object "cy"
/// <reference types="cypress" />
import LoginPage from '../../support/PageObject/LoginPageAction'
import HomePage from '../../support/PageObject/HomePageAction'
import SettingPage from '../../support/PageObject/SettingPageAction'


describe('My First test suite', function(){

    before(function(){

        cy.fixture('example').then(function(data)
        {
            this.data=data

        })

    })

    it('My firstTestcase', function(){
        const loginPage = new LoginPage()
        const homePage = new HomePage()
        const settingPage = new SettingPage()

        cy.visit("https://content-portal.productsup.com/login")
        
        loginPage.getEmailID().type(this.data.email)
        loginPage.getPassword().type(this.data.Password)
        loginPage.loginbutton().click()

        homePage.getSelectall().click()
        homePage.getViewSelected().click()

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

})