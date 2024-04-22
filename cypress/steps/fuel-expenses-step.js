import GeneralStep from "../steps/general-steps";
import FuelExpensesPage from "../pages/FuelExpensesPage";
import GaragePage from "../pages/GaragePage";

export class FuelExpensesStep extends GeneralStep{
    addFuelExpenses(car, day, month, year) {
        FuelExpensesPage.datePicker.click()
        this.datePicker(day, month, year)
        FuelExpensesPage.addExpenseMileage.clear().type(car.newMileage).should('have.value', car.newMileage)
        FuelExpensesPage.addExpenseLiters.type(car.liters).should('have.value', car.liters)
        FuelExpensesPage.addExpenseTotalCost.type(car.totalCost).should('have.value', car.totalCost)
        FuelExpensesPage.add.click();
    }

    addExpenses(car) {
        FuelExpensesPage.addExpenses.click();
    }

}

export const fuelExpensesStep = new FuelExpensesStep();