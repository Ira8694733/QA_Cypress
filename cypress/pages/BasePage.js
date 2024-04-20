export default class BasePage {

    signInButton() {
        return cy.xpath(`//button[@class='hero-descriptor_btn btn btn-primary']`);
    }

    signupName() {
        return cy.xpath("//input[@id='signupName']");
    }

    signupLastName() {
        return cy.xpath("//input[@id='signupLastName']");
    }

    signupEmail() {
        return cy.xpath("//input[@id='signupEmail']");
    }

    signupPassword() {
        return cy.xpath("//input[@id='signupPassword']");
    }

    signupRepeatPassword() {
        return cy.xpath("//input[@id='signupRepeatPassword']");
    }

    registerButton(){
        return cy.xpath("//button[@class='btn btn-primary']").click();}

    createAccount(user){
        this.signupName().type(user.name).should('have.value', user.name);
        this.signupLastName().type(user.lastName).should('have.value', user.lastName);
        this.signupEmail().type(user.email).should('have.value', user.email);
        this.signupPassword().type(user.userPassword).should('have.value', user.userPassword);
        this.signupRepeatPassword().type(user.userPassword).should('have.value', user.userPassword);
    }

}

export const basePage = new BasePage()

