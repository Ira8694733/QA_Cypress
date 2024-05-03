export default class GaragePage {

    static get routerlink(){
        return cy.xpath("//a[@routerlink='garage']")
    }

    static get addCarButton(){
        return cy.xpath ("//button[contains(text(), 'Add car')]");
        // return cy.get('.panel-page_heading > .btn')

    //   body > app-root > app-global-layout > div > div > div > app-panel-layout > div > div > div > div.col-lg-9.main-wrapper > div > app-garage > div > div.panel-page_heading.d-flex.justify-content-between > button

    }

    static get brand(){
        return cy.xpath("//select[@id='addCarBrand']");;
        // return cy.get('#addCarBrand')
    }

    static get model(){
        return cy.xpath("//select[@id='addCarModel']");
        // return cy.get('#addCarModel')
    }

    static get mileage(){
        return cy.xpath("//input[@id='addCarMileage']");
        //return cy.get('#addCarMileage');
    }

    static get saveCarButton() {
        return cy.xpath("//app-add-car-modal//button[.='Add']");
    }

    static get editCar(){
        return cy.get('span.icon-edit')
    }

}

export const garagePage = new GaragePage()