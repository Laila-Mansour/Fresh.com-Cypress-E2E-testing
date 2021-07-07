/// <reference types="cypress" />

import homePage , {HomePage} from '../Pages/HomePage'
import searchResultsPage , {SearchResultsPage} from '../Pages/SearchResultsPage'
import firstProductPage , {FirstProductPage} from '../Pages/FirstProductPage'
import checkoutPage , {CheckoutPage} from '../Pages/CheckoutPage'
import signInPage , {SignInPage} from '../Pages/SignInPage'


describe('Sign In succesfully using Email & password', () =>
{
    //Create objects from classes  
    const HP = new homePage()
    const SRP= new searchResultsPage()
    const FPP= new firstProductPage()
    const CP= new checkoutPage()
    const SI = new signInPage()

    

   // runs once before all tests in the block.
    beforeEach(function(){
 

 // Call Fixtures file (Locations and Data) That used for those test cases. 
    cy.fixture('homePageData&Locator').then(function(homeData){
        this.HomeData = homeData })
    cy.fixture('SearchResultsData&Locators').then(function(searchData){
            this.SearchData = searchData })
    cy.fixture('CheckoutPageData&Locators').then(function(checkoutData){
                this.CheckoutData = checkoutData })
    cy.fixture('SignInPageData&Locators').then(function(signInData){
      this.SignInData = signInData })      

   })

   /////////////////////////////////////////////////Sign in Test Case///////////////////////////////////////////////////////
//This test case Sign In succesfully using email & password

it('Sign In succesfully', function () 
{
   SI.navigateToSignInPage(this.SignInData.SignInPageURL)
   SI.EnterCredentials(this.SignInData.SignInEmailFieldLoc,this.SignInData.SignInEmail,this.SignInData.SignInPasswordFieldLoc,this.SignInData.SignInPassword,this.SignInData.SignInBtnLoc)
  

})





})