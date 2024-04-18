/// <reference types="cypress" />
import {basePage} from "../pages/BasePage";
import {garageProfile} from "../pages/GarageProfile";
import {fuelExpenses} from "../pages/FuelExpenses";

const name="Irina"
const lastName="Test"
const userPassword ="123Q456w"
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

const user = {
    name,
    lastName,
    email,
    userPassword,
}

describe('Test quatro Sign In', () => {
    it('Visit site', () => {
        cy.visit(`https://guest:welcome2qauto@${baseUrl}`)
        basePage.signInButton().should("exist").click()
        basePage.createAccount(user)
        basePage.registerButton().click()
        cy.url().should('include', '/panel/garage');
        cy.xpath("//button[@id='userNavDropdown']").click();
        // cy.xpath("//button[contains(text(), 'My profile')]").click(); - альтернатива. Що краще використовувати?
        cy.xpath("//a[@routerlink='/panel/profile']").click();
        // cy.xpath("//p[@class='profile_name.display-4']").should('have.text', 'TestNameZ');

        // cy.xpath("//a[@routerlink='garage']").click();
        // garageProfile.addCar().click();
        // garageProfile.addCarBrand().select("BMW");
        // garageProfile.addCarModel().select("3");
        // garageProfile.addCarMileage().type('120000').should('have.value', '120000')
        // cy.wait (2000);
        // garageProfile.add().click();

        cy.xpath("//a[@routerlink='garage']").click();
        garageProfile.addCar().click();
        garageProfile.addCarBrand().select("Audi");
        garageProfile.addCarModel().select("TT");
        garageProfile.addCarMileage().type('120000').should('have.value', '120000')
        cy.wait (2000);
        garageProfile.add().click();

        cy.xpath("//a[@routerlink='expenses']").click();
        fuelExpenses.addExpenses().click();
        fuelExpenses.addExpenseMileage().clear().type('120010').should('have.value', '120010')
        fuelExpenses.addExpenseLiters().type('300').should('have.value', '300')
        fuelExpenses.addExpenseTotalCost().type('15099').should('have.value', '15099')
        cy.wait (2000);
        fuelExpenses.add().click();
     });
});