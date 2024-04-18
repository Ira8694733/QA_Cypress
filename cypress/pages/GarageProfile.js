export default class GarageProfile_ {

    addCar() {
        return cy.xpath ("//button[contains(text(), 'Add car')]")
        // ("//button[@class='btn btn-primary']");
    }

    addCarBrand() {
        return cy.xpath("//select[@id='addCarBrand']");
    }

    addCarModel() {
        return cy.xpath("//select[@id='addCarModel']")
    }

    addCarMileage() {
        return cy.xpath("//input[@id='addCarMileage']");
    }

    add() {
        return cy.xpath("//app-add-car-modal//button[.='Add']");
    }
}

export const garageProfile = new GarageProfile_()