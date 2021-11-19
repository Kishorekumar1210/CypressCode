class LoginPage{

getEmailID(){

    return cy.get('input[type="text"]')

}

getPassword(){

   return cy.get('input.ng-untouched.ng-pristine.ng-valid.ng-star-inserted')
}

loginbutton(){
    
    return cy.get('.submit-button > button')
    
}


}

export default LoginPage;