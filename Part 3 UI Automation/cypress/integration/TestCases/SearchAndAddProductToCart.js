/// <reference types="cypress" />

import homePage , {HomePage} from '../Pages/HomePage'
import searchResultsPage , {SearchResultsPage} from '../Pages/SearchResultsPage'
import firstProductPage , {FirstProductPage} from '../Pages/FirstProductPage'
import checkoutPage , {CheckoutPage} from '../Pages/CheckoutPage'


describe('Search and Add Products to Cart then Remove them', () =>
{
    //Create objects from classes  
    const HP = new homePage()
    const SRP= new searchResultsPage()
    const FPP= new firstProductPage()
    const CP= new checkoutPage()
    

   // runs once before all tests in the block.
    beforeEach(function(){
 

 // Call Fixtures file (Locations and Data) That used for those test cases. 
    cy.fixture('homePageData&Locator').then(function(homeData){
        this.HomeData = homeData })
    cy.fixture('SearchResultsData&Locators').then(function(searchData){
            this.SearchData = searchData })
    cy.fixture('CheckoutPageData&Locators').then(function(checkoutData){
                this.CheckoutData = checkoutData })

   })

   /////////////////////////////////////////////////Product Test Case///////////////////////////////////////////////////////
//This test case go throw the flow of search for certain product then select it , validate the discount price , and add 3 items to the cart , then remove them from cart


it('Search And Add Product To Cart then delete ', function () 
{

   
   HP.navigateToHomePage(this.HomeData.HomePageURI) 
   HP.searchForValue(this.HomeData.SearchBarLoc,this.HomeData.SearchValue)
   SRP.clickOnFirstProduct(this.SearchData.FirstItemLoc)
   FPP.ValidatePrice(this.SearchData.PriceBeforeDisLoc,this.SearchData.PriceAfterDisLoc)
   FPP.AddItemsToCart(this.SearchData.IncreaseQntyBtnLoc,this.SearchData.AddToCartBtnLoc,this.SearchData.ExitBtnLoc)
   CP.removeItemsFromCart(this.CheckoutData.CheckoutPageURI,this.CheckoutData.DeleteItemsBtnLoc)

})





})