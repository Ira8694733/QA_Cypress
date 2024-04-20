export default class GarageProfile {

    routerlink(){
        return cy.xpath("//a[@routerlink='garage']")
    }

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

    createCarAudi(car){
       this.addCarBrand().select(car.model);
       this.addCarModel().select(car.brand);
       this.addCarMileage().type(car.mileage).should('have.value', car.mileage)
    }

}

export const garageProfile = new GarageProfile()