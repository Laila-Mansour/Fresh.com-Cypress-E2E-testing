/// <reference types="cypress" />
//Class Contain all methods that will be used to test Sign In Page.
class signInPage {
    navigateToSignInPage(SignInPageURL)
    { cy.visit(SignInPageURL)}  //Navigate to Sign In Page.

    EnterCredentials(SignInEmailFieldLoc,SignInEmail,SignInPasswordFieldLoc,SignInPassword,SignInBtnLoc)     //Enter Email & password & sign in
    { cy.get(SignInEmailFieldLoc).type(SignInEmail)
      cy.get(SignInPasswordFieldLoc).type(SignInPassword)
      cy.get(SignInBtnLoc).click()
      cy.wait(5000) } 


}
export default signInPage;
