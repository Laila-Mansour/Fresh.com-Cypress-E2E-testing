/// <reference types="cypress" />
//Class Contain all methods that will be used to test Home Page.
class homePage {
    navigateToHomePage(HomePageURI)
    { cy.visit(HomePageURI)}  //Navigate to Home Page.

    searchForValue(SearchBarLoc,SearchValue)     //Search For Value
    { cy.get(SearchBarLoc).type(SearchValue)
      cy.wait(5000) } 


}
export default homePage;
