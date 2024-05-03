import {basePage} from "../pages/BasePage";
import {generalStep} from "../steps/general-steps";
import {garageStep} from "../steps/garage-step";


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

const carAudi ={
    brand: 'Audi',
    model: 'TT',
    initialMileage: '100',
    mileage: '101',
    liters: '7',
    totalCost: '1000'
}

describe('Test quatro Sign In', () => {
    before(() => {
        cy.visit('/');
        basePage.signInButton().should("exist").click();
        basePage.createAccount(user);
        basePage.registerButton().click();
        cy.url().should('include', '/panel/garage');
        cy.contains ("Log out").should('exist').click()
    })

    beforeEach(()=>{
    })

    it('Login via API', () => {
        cy.request({
            method: 'POST',
            url: '/api/auth/signin',
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body: {
                "email": "i9qxss9lqp@test.com",
                "password": "123Q456w",
                "remember": false
            },
        }).as ('login')
    });

    it('Login and Add Car via UI', () => {
        cy.visit('/');
        generalStep.login(email, userPassword)
        generalStep.verifyThatLoginButtonIsVisible()
         garageStep.addNewCar(carAudi);
         cy.url().should('include', '/panel/garage');
     })

    it('Verify Car Creation via API', () => {
        cy.visit('/');
        generalStep.login(email, userPassword)
        generalStep.waitingForApiIsVisible();
        cy.request('GET', '/api/cars').then((response) => {
            expect(response.status).to.equal(200);
            const allCars = response.body.data;
            const createdCar = allCars.find(car => car.brand === 'Audi' && car.model === 'TT');
            expect(createdCar).to.exist;
            expect(createdCar.initialMileage).to.equal(100);
        });
    });

});