class HomePage{


    getSelectall(){

      return cy.get('.ml-2 > button')
    }

    getViewSelected(){

      return cy.get('.status > button > span')
    }

}

export default HomePage