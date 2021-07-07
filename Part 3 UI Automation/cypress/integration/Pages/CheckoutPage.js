/// <reference types="cypress" />
//Class Contain all methods that will be used to test Search Checkout Page.
class checkoutPage {

    removeItemsFromCart(CheckoutPageURI,DeleteItemsBtnLoc) //Remove added items from cart
    { 

     cy.visit(CheckoutPageURI)
     cy.get(DeleteItemsBtnLoc).click()
    } 
    
}
export default checkoutPage;