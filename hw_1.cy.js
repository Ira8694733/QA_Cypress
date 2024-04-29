/// <reference types="cypress" />

function randomEmail() {
    let random = '0123456789abcdefghijklmnopqrstuvwxyz';
    let email = '';
    for (let i = 0; i < 10; i++) {
        email += random.charAt(Math.floor(Math.random() * random.length));
    }
    email += '@test.com';
    return email;
}

describe('Test quatro Sign In', () => {
    it('Visit site', () => {
        cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/')
        // cy.get('button.hero-descriptor_btn').should('exist').click();
        cy.get('button').contains('Sign up').click();
        cy.get('input#signupName').type('TestNameZ').should('have.value', 'TestNameZ');
        cy.get('input#signupLastName').type('TestLastNameZ').should('have.value', 'TestLastNameZ');
        const email = randomEmail();
        cy.get('input#signupEmail').type(email).should('have.value', email);
        cy.get('input#signupPassword').type('123Q456w').should('have.value', '123Q456w');
        cy.get('input#signupRepeatPassword').type('123Q456w').should('have.value', '123Q456w');
        cy.get('button').contains('Register').click();
    })
});
