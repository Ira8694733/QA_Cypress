/// <reference types="cypress" />
import {basePage} from "../pages/BasePage";
import {generalStep} from "../steps/general-steps";
import {garageStep} from "../steps/garage-step";
import {fuelExpensesStep} from "../steps/fuel-expenses-step";
import GaragePage, {garagePage} from "../pages/GaragePage";

const name="Irina";
const lastName="Test";
const userPassword ="123Q456w";
const baseUrl = 'qauto2.forstudy.space/';
const email = randomEmail();

function randomEmail() {
    let random = '0123456789abcdefghijklmnopqrstuvwxyz';
    let res = '';
    for (let i = 0; i < 10; i++) {
        res += random.charAt(Math.floor(Math.random() * random.length));
    }
    res += '@test.com';
    return res;
}

// function selectDateInPicker(targetDate) {
//     const formattedDate = targetDate.toLocaleDateString('en-US', {
//         weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
//     })
//
//     cy.get('.modal-body').within(() => {
//         cy.get('ngb-dp-day[aria-label="' + formattedDate + '"]')
//             .should('be.visible')
//             .click()
//     })
// }

const user = {
    name,
    lastName,
    email,
    userPassword,
}

const carAudi ={
    brand: 'Audi',
    model: 'TT',
    mileage: '100',
    newMileage: '101',
    liters: '7',
    totalCost: '1000'
}

const carBMW ={
    brand: 'BMW',
    model: '3',
    mileage: '100',
    newMileage: '101',
    liters: '7',
    totalCost: '1000'
}


describe('Test quatro Sign In', () => {
    before(() => {
        cy.visit(`https://guest:welcome2qauto@${baseUrl}`);
        basePage.signInButton().should("exist").click();
        basePage.createAccount(user);
        basePage.registerButton().click();
        cy.url().should('include', '/panel/garage');
        cy.contains ("Log out").should('exist').click()
    })

    beforeEach(()=>{
        cy.visit(`https://guest:welcome2qauto@${baseUrl}`);
        generalStep.login(email, userPassword)
        generalStep.verifyThatLoginButtonIsVisible()


    })

    it("Check that is possible to add  car to user garage", () => {
       garageStep.addNewCar(carAudi);
       garageStep.addNewCar(carBMW);
       cy.url().should('include', '/panel/garage');
       garageStep.editCar();
       garageStep.verifyThatLRemoveCArIsVisible()
    })

    it("Check that is possible to add  fuel expenses to user car", () => {
         fuelExpensesStep.addExpenses(carAudi)
         fuelExpensesStep.addFuelExpenses(carAudi, '1', 'Apr', '2025')
    })


    after("Check that is possible to remove car to user garage",()=>{
        GaragePage.routerlink.click();
        garageStep.editCar();
        garageStep.verifyThatLRemoveCArIsVisible()

    })

});