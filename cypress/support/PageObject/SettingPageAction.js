class SettingPage{


    getAccount(){

       return cy.get('[tabindex="0"] > button > span')
    }

    getPreference(){

       return cy.get('[routerlink="/admin/account/preferences"]')

    }

    getdropdown(){
        return cy.get('.settings-content > .dropdown-select > .dropdown > .select > .icon > div > svg')
    }

    clickonselecteddropdown(){
        return cy.get(':nth-child(2) > .dropdown-menu-item-content > span')
    }

    clickCatalog(){

       return cy.get('[routerlink="/admin/account/catalogs"]')
    }

    addCatalog(){
        return cy.get('.d-flex > .button > button')
    }

    closeCatalog(){

        return cy.get('.wizard-header > .icon > div > svg')
    }


    clickMembers(){

       return cy.get('[routerlink="/admin/account/users"]')
    }

    inviteMembers(){
        return cy.get('.users-header > .button > button')
    }

    closeMember(){
        return cy.get('.wizard-header > .icon > div > svg')
    }

}

export default SettingPage