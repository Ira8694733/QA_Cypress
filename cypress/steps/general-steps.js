import {basePage} from "../pages/BasePage";
import HomePage from "../pages/HomePage";

export default class GeneralStep {
    login(email, password){
        basePage.findButtonText("Sign In").click();
        basePage.signInEmail().type(email);
        basePage.signInPassword().type(password);
        basePage.findButtonText("Login").click();
    }

    verifyThatLoginButtonIsVisible(){
        HomePage.logout.should("be.visible");
    }

    datePicker(day, month, year){
        cy.get('select[title="Select month"]').select(month);
        cy.get('select[title="Select year"]').select(year);
        cy.contains('.ngb-dp-day', day).within(() => {
            cy.get('div[ngbdatepickerdayview]').click()
        });
    }


    waitingForApiIsVisible() {
       HomePage.waitingApi.should ('be.visible');
    }

}

export const generalStep = new GeneralStep();