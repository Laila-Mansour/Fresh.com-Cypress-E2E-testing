/// <reference types="cypress" />
//Class Contain all methods that will be used to test First Product  Page.
class firstProductPage {

    ValidatePrice(PriceBeforeDisLoc,PriceAfterDisLoc) //Check valid price displayed before/after discount
    { 
        const Text1 = cy.get(PriceBeforeDisLoc).should('be.visible').invoke('text')
        const Text2 = cy.get(PriceAfterDisLoc).should('be.visible').invoke('text')
        expect(Text1).not.to.eq(Text2)
        cy.get(PriceAfterDisLoc).invoke('text').should('contain',"EGP")
      cy.get(PriceBeforeDisLoc).invoke('text').should('contain',"EGP")

    }  

    AddItemsToCart(IncreaseQntyBtnLoc,AddToCartBtnLoc,ExitBtnLoc) //Add 3 items to cart
    { 
        cy.get(IncreaseQntyBtnLoc).click()
        cy.get(IncreaseQntyBtnLoc).click()
        cy.get(AddToCartBtnLoc).click()
        cy.get(ExitBtnLoc).click()
    }    
}
export default firstProductPage;




