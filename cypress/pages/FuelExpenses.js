export default class FuelExpenses {

    routerlink() {
        return cy.xpath("//a[@routerlink='expenses']");
    }

    addExpenses() {
        return cy.xpath ("//button[contains(text(), 'Add an expense')]");
    }

    addCarExpenses() {
        return cy.xpath("//input[@id='addCarExpenses']");
    }

    addExpenseMileage() {
        return cy.xpath("//input[@id='addExpenseMileage']");
    }

    addExpenseLiters() {
        return cy.xpath("//input[@id='addExpenseLiters']")
    }

    addExpenseTotalCost() {
        return cy.xpath("//input[@id='addExpenseTotalCost']");
    }

    add() {
        return cy.xpath("//app-add-expense-modal//button[.='Add']");
    }

    updateCarAudi(car){
        this.addExpenseMileage().clear().type(car.newMileage).should('have.value', car.newMileage)
        this.addExpenseLiters().type(car.liters).should('have.value', car.liters)
        this.addExpenseTotalCost().type(car.totalCost).should('have.value', car.totalCost)
    }
}

export const fuelExpenses = new FuelExpenses()