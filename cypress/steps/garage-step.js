import GeneralStep from "../steps/general-steps";
import GaragePage from "../pages/GaragePage";
import HomePage from "../pages/HomePage";

export class GarageStep extends GeneralStep{
    addNewCar(car) {
        GaragePage.addCarButton.click();
        GaragePage.brand.select(car.brand);
        GaragePage.model.select(car.model);
        GaragePage.mileage.type(car.mileage).should('have.value', car.mileage);
        GaragePage.saveCarButton.click();
    }


    editCar(car) {
        GaragePage.editCar.click();
    }

    verifyThatLRemoveCArIsVisible(){
        HomePage.removeCarButton.should("be.visible").click();
        HomePage.removeButton.should("be.visible").click();
    }
}

export const garageStep = new GarageStep();