/// <reference types="cypress" />
//Class Contain all methods that will be used to test Search Results Page.
class searchResultsPage {

    clickOnFirstProduct(FirstItemLoc)
    {  cy.wait(5000) 
        cy.get(FirstItemLoc).should('be.visible').click()
    cy.wait(5000)} //Click on the first item in search result
    


}
export default searchResultsPage;