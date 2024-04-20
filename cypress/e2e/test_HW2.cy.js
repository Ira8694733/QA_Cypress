/// <reference types="cypress" />
import {basePage} from "../pages/BasePage";
import {garageProfile} from "../pages/GarageProfile";
import {fuelExpenses} from "../pages/FuelExpenses";
import {profilePage} from "../pages/ProfilePage";

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

const user = {
    name,
    lastName,
    email,
    userPassword,
}

// new profile car Audi
const model = "Audi"
const brand = "TT"
const mileage = 12000;
const newMileage = mileage + 1;
const liters = 300;
const totalCost = 15099;

const car ={
    model,
    brand,
    mileage,
    newMileage,
    liters,
    totalCost
}

describe('Test quatro Sign In', () => {
    it('Visit site', () => {
        cy.visit(`https://guest:welcome2qauto@${baseUrl}`)
        basePage.signInButton().should("exist").click()
        basePage.createAccount(user)
        basePage.registerButton().click()
        cy.url().should('include', '/panel/garage');
        profilePage.userNavDropdown().click();
        profilePage.routerlink().click();

        garageProfile.routerlink().click();
        garageProfile.addCar().click();
        garageProfile.createCarAudi(car);
        garageProfile.add().click();

        fuelExpenses.routerlink().click();
        fuelExpenses.addExpenses().click();
        fuelExpenses. updateCarAudi(car);
        fuelExpenses.add().click();
     });
});