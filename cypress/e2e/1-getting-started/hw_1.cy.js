/// <reference types="cypress" />

const baseUrl = 'qauto2.forstudy.space/';
const testEmail = randomEmail();
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
        cy.visit(`https://guest:welcome2qauto@${baseUrl}`)
        // cy.get('button.hero-descriptor_btn').should('exist').click();
        cy.get('button').contains('Sign up').click();
        cy.get('input#signupName').type('TestNameZ').should('have.value', 'TestNameZ');
        cy.get('input#signupLastName').type('TestLastNameZ').should('have.value', 'TestLastNameZ');
        cy.get('input#signupEmail').type(testEmail).should('have.value', testEmail);
        cy.get('input#signupPassword').type('123Q456w').should('have.value', '123Q456w');
        cy.get('input#signupRepeatPassword').type('123Q456w').should('have.value', '123Q456w');
        cy.get('button').contains('Register').click();

        cy.url().should('include', '/panel/garage');

        cy.get('button').contains('My profile').click();
        cy.get('a.dropdown-item.btn.btn-link.user-nav_link').contains('Profile').click();
        cy.get('.profile_name.display-4').should('have.text', 'TestNameZ');
    })
});